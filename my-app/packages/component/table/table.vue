<template>
    <!--colspan="4" 列-->
    <!--rowspan="2" 行-->
    <div :class="[
                `${preFixCls}`,
                {
                    [`${preFixCls}-border`]: !!border,
                    [`${preFixCls}-thanW`]: thanWShow,
                    [`${preFixCls}-thanH`]: thanHShow,
                }
            ]">
        <div :class="tableHeadClass" ref="head" @scroll="handleHeadScroll">
            <pc-table-head :styles="tableWidth" ref="tableHead" :columns="columns"></pc-table-head>
        </div>
        <!-- left 悬浮-->
        <div :class="`${preFixCls}-left`" v-if="leftFixedColumnRows.length>0">
            <pc-table-head :columns="leftFixedColumnRows"></pc-table-head>
            <pc-table-body :columns="leftFixedColumnRows"
                           :stripe="stripe"
                           :height="height"
                           :rowClassName="rowClassName"
                           :border="border"
                           :data="tableData"></pc-table-body>
        </div>
        <!-- right 悬浮-->
        <div :class="`${preFixCls}-right`" v-if="rightFixedColumnRows.length>0">
            <pc-table-head :columns="rightFixedColumnRows"></pc-table-head>
            <pc-table-body :columns="rightFixedColumnRows"
                           :stripe="stripe"
                           :height="height"
                           :rowClassName="rowClassName"
                           :border="border"
                           :data="tableData"></pc-table-body>
        </div>
        <div :class="[
                {[`${preFixCls}-body-fixed`]: height,}
            ]"
             ref="body"
             :style="{'max-height':height-headHeight+'px','overflow':'auto'}"
             @scroll="handleBodyScroll"
        >
            <pc-table-body :columns="columns"
                           :stripe="stripe"
                           :height="height"
                           :styles="tableWidth"
                           :rowClassName="rowClassName"
                           :border="border"
                           :data="tableData"></pc-table-body>
        </div>

    </div>
</template>

<script>
    const preFixCls = 'pc-table';
    import PcTableHead from './table-head'
    import PcTableBody from './table-body'
    import Render from './render.js'
    import publics from '../../utils/public'
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
                tableWidth: '',
                leftDate: [],
                leftIndex: [],
                rightDate: [],
                rightIndex: [],
                headHeight: '',
                bodyHeight: '',
                thanWShow: false,
                thanHShow: false,
                leftFixedColumnRows: [],
                rightFixedColumnRows: [],
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
            tableHeadClass(){
                return [
                    {
                        [`${preFixCls}-head-fixed`]: !!this.height,
                    }
                ]
            },
            tableBodyFixedStyle(){
                return {
                    height: this.height&&this.headHeight? this.height-this.headHeight :''
                }
            },
        },
        methods:{
            updateValue(){
                this.headHeight = this.$refs.head.getBoundingClientRect().height;
                this.bodyHeight = this.$refs.body.getBoundingClientRect().height;
                if (this.bodyHeight > (this.height - this.headHeight)) {
                    this.thanWShow = true
                }else {
                    this.thanWShow = false
                }
                console.log( this.height - this.headHeight)
                console.log()
                if (this.$refs.tableHead.$el.getBoundingClientRect().width < this.$el.offsetWidth) {
                    this.tableWidth = this.$el.offsetWidth;
                    this.thanHShow = false
                }else {
                    this.tableWidth = this.$refs.tableHead.$el.getBoundingClientRect().width;
                    this.thanHShow = true
                }
                // this.tableWidth = this.$el.offsetWidth - 1;
                // let leftList = this.data.filter((item)=>{return ''})
            },
            handleBodyScroll:publics._debounce(function(event){
                this.$refs.head.scrollLeft = event.target.scrollLeft
            },1),
            handleHeadScroll:publics._debounce(function(event){
                this.$refs.body.scrollLeft = event.target.scrollLeft
            },1),
        },
        mounted(){
            this.leftFixedColumnRows = this.columns.filter((item)=>{
                return (item.fixed===true||item.fixed==='left')&&item.width
            });
            this.rightFixedColumnRows = this.columns.filter((item)=>{
                return (item.fixed==='right')&&item.width
            });
            // leftIndex
            this.updateValue()
        },
        watch:{
            data(val){
                this.updateValue()
            },
        }
    }
</script>

<style scoped>

</style>
