<template>
    <!--colspan="4" 列-->
    <!--rowspan="2" 行-->
    <div :class="[
                `${preFixCls}`,
            ]" :style="{'height':height+'px','overflow':'auto'}">
        <pc-table-head :styles="tableWidth"
                       :class="tableHeadClass"
                       :columns="columns"></pc-table-head>
        <pc-table-body :columns="columns"
                       :stripe="stripe"
                       :height="height"
                       :styles="tableWidth"
                       :rowClassName="rowClassName"
                       :border="border"
                       :data="tableData"></pc-table-body>
    </div>
</template>

<script>
    const preFixCls = 'pc-table';
    import PcTableHead from './table-head'
    import PcTableBody from './table-body'
    import Render from './render.js'
    export default {
        name: "PcTable",
        components: {
            Render,
            PcTableHead,
            PcTableBody
        },
        data(){
            return{
                preFixCls: preFixCls,
                tableData: this.data,
                tableWidth: 0,
                leftDate: [],
                leftIndex: [],
                rightDate: [],
                rightIndex: [],
            }
        },
        props:{
            columns: {
                type: Array,
                default: ()=>{
                    return []
                }
            },
            // 数据
            data: {
                type: Array,
                default: ()=>{
                    return []
                }
            },
            // 是否斑马纹路
            stripe: {
                type: Boolean,
                default: false
            },
            // 是否需要border
            border: {
                type: Boolean
            },
            // 高度
            height: {
                type: Number|String
            },
            // 添加row 的class
            rowClassName:{
                type: Function
            }
        },
        computed:{
            tableClass(){
                return [
                    `${preFixCls}`,
                    {
                        [`${preFixCls}-border`]: !!this.border
                    }
                ]
            },
            tableHeadClass(){
                return [
                    `${preFixCls}`,
                    {
                        [`${preFixCls}-border`]: !!this.border
                    }
                ]
            },
        },
        methods:{
            updateValue(){
                this.tableWidth = this.$el.offsetWidth - 1;
                console.log(tableWidth)
                let leftList = this.data.filter((item)=>{return ''})
            }
        },
        mounted(){
            console.log(this.columns)
            let left = this.columns.filter((item)=>{ return item.fixed===true||item.fixed==='left'});
            console.log(left)
            // leftIndex
            this.updateValue()
        },
        watch:{
            data(val){
                this.updateValue()
            }
        }
    }
</script>

<style scoped>

</style>
