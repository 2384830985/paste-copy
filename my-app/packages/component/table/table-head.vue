<template>
    <table cellspacing="0"
           :style="{'width':styles+'px'}"
           cellpadding="0" border="0" >
        <colgroup v-if="!childrenShow">
            <col v-for="(item,index) in columns"
                 :key="index"
                 :width="item.width"
                 >
        </colgroup>
        <template v-else>
            <colgroup>
                <col v-for="(item,index) in AllChildren"
                     :key="index"
                     :width="item.width"
                     >
            </colgroup>
        </template>
        <thead>
        <tr v-if="!childrenShow">
            <th v-for="(item,index) in columns"
                :key="index"
                :width="item.width"
                :height="item.height"
            >
                <div v-if="item.type==='index'">
                    #
                </div>
                <div v-else-if="item.type==='selection'">
                    <pc-checkbox @on-change="checkboxChange" v-model="checkbox" :indeterminate="indeterminate"/>
                </div>
                <div v-else>
                    {{item.title}}
                </div>
            </th>
        </tr>
        <template v-else>
            <tr v-for="(items,index) in columns">
                <th v-for="(item,index) in items"
                    :key="index"
                    :rowspan="item.rowspan"
                    :colspan="item.colspan"
                    :width="item.width"
                >
                    <div v-if="item.type==='index'">
                        #
                    </div>
                    <div v-else-if="item.type==='selection'">
                        <pc-checkbox v-model="checkbox" @on-change="checkboxChange" :indeterminate="indeterminate"/>
                    </div>
                    <div v-else>
                        {{item.title}}
                    </div>
                </th>
            </tr>
        </template>

        </thead>
    </table>
</template>

<script>
    const preFixCls = 'pc-table';
    import {findComponentsDownward} from '../../utils/assist'
    export default {
        name: "PcTableHead",
        inject: ['table'],
        props: {
            childrenShow:{
                type: Boolean,
                default: false
            },
            type:{
                type: String,
                default: 'center'
            },
            columns:{
                type: Array
            },
            AllChildren:{
                type: Array
            },
            styles:{
                type: String|Number
            }
        },
        data(){
            return{
                preFixCls: preFixCls,
                checkbox: false,
                indeterminate: false,
            }
        },
        methods:{
            checkboxChange(checkbox,index){
                this.checkbox = checkbox;
                // 部分选中
                if (index===true||index===false) {
                    this.indeterminate = index;
                    return
                }
                this.$nextTick(()=>{
                    if (!checkbox) this.indeterminate = false;
                    let PcTableBody = findComponentsDownward(this.table,'PcTableBody');
                    PcTableBody.forEach(item=>{
                        item.tableData.forEach(items=>{
                            items._checkbox = checkbox
                        });
                        item.$forceUpdate()
                    });
                    this.$emit('checkboxChangeHead',checkbox?PcTableBody[0].tableData:[],checkbox)
                })
            }
        },
    }
</script>

<style scoped>

</style>
