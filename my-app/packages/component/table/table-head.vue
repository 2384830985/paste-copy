<template>
    <table cellspacing="0"
           :style="{'width':styles+'px'}"
           cellpadding="0" border="0" >
        <colgroup v-if="!childrenShow">
            <col v-for="(item,index) in tableColumns"
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
            <th v-for="(item,index) in tableColumns"
                :key="index"
                :width="item.width"
                :height="item.height"
                :style="{'text-align':item.align}"
            >
                <div v-if="item.type==='index'">
                    #
                </div>
                <div v-else-if="item.type==='selection'">
                    <pc-checkbox @on-change="checkboxChange" v-model="checkbox" :indeterminate="indeterminate"/>
                </div>
                <div v-else>
                    {{item.title}}
                    <span :class="`${preFixCls}-sort`" @click="sortClick(item)" v-if="item.sort">
                        <pc-icon type="caret-up" :class="{'on': item.order === 'top'}" @click.stop="sortClick(item,'top')"></pc-icon>
                        <pc-icon type="caret-down" :class="{'on': item.order === 'bottom'}" @click.stop="sortClick(item,'bottom')"></pc-icon>
                    </span>
                    <slot :row="item" :name="item.slotSort"></slot>
                </div>
            </th>
        </tr>
        <template v-else>
            <tr v-for="(items,index) in tableColumns">
                <th v-for="(item,index) in items"
                    :key="index"
                    :rowspan="item.rowspan"
                    :colspan="item.colspan"
                    :width="item.width"
                    :style="{'text-align':item.align}"
                >
                    <div v-if="item.type==='index'">
                        #
                    </div>
                    <div v-else-if="item.type==='selection'">
                        <pc-checkbox v-model="checkbox" @on-change="checkboxChange" :indeterminate="indeterminate"/>
                    </div>
                    <div v-else>
                        {{item.title}}
                        <span :class="`${preFixCls}-sort`" @click="sortClick(item)" v-if="item.sort">
                            <pc-icon type="caret-up" :class="{'on': item.order === 'top'}" @click.stop="sortClick(item,'top')"></pc-icon>
                            <pc-icon type="caret-down" :class="{'on': item.order === 'bottom'}" @click.stop="sortClick(item,'bottom')"></pc-icon>
                        </span>
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
                tableColumns: this.columns,
            }
        },
        methods:{
            sortClick(item,type){
                let order = item.order;
                if (!this.childrenShow) {
                    this.tableColumns.forEach(items=>{
                        items.order = ''
                    });
                }else {
                    this.tableColumns.forEach(items=>{
                        items.forEach(itemes=>{
                            itemes.order = ''
                        });
                    });
                }
                if (!type) {
                    if (!order) {
                        item.order = 'top'
                    }else if (order==='top') {
                        item.order = 'bottom'
                    }else if (order==='bottom'){
                        item.order = ''
                    }
                }else {
                    if (!order) {
                        item.order = type
                    } else if (order === type) {
                        item.order = ''
                    }else if (order !== type) {
                        item.order = type
                    }
                }
                this.$emit('on-sort',{prop: item.key},{order: item.order});
                this.$forceUpdate()
            },
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
            },
            getData(){
                let indexs = '';
                let order = '';
                this.tableColumns.forEach((item,index)=>{
                    if (item.order&&item.sort) {
                        indexs = index;
                        order = item.order;
                        item.order = '';
                    }
                });
                if (order) {
                    this.tableColumns[indexs].order = order
                }
            }
        },
        mounted(){
            this.getData()
        },
        watch:{
            columns(val){
                this.tableColumns = val;
                this.getData()
            }
        }
    }
</script>

<style scoped>

</style>
