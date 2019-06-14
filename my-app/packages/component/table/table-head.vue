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
                    <pc-checkbox/>
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
                        <pc-checkbox v-model="checkbox"/>
                    </div>
                    <div v-else>
                        {{item.title}}
                    </div>
                </th>
            </tr>
        </template>

        </thead>
    </table>
    <!--:class="{-->
    <!--[`${preFixCls}-hidden`]:-->
    <!--type==='center'? item.fixed-->
    <!--: type==='left' ? !item.fixed||item.fixed==='right'-->
    <!--: type==='right'? !item.fixed||item.fixed==='left':false-->
    <!--}"-->
</template>

<script>
    const preFixCls = 'pc-table';
    export default {
        name: "PcTableHead",
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
                checkbox: false
            }
        }
    }
</script>

<style scoped>

</style>
