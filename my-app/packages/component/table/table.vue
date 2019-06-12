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
        <div :class="tableHeadClass"
             ref="head" @scroll="handleHeadScroll">
            <pc-table-head :styles="tableWidth" ref="tableHead" :columns="tableColumns" :childrenShow="childrenShow"></pc-table-head>
        </div>
        <!-- left 悬浮-->
        <div :class="[`${preFixCls}-left`,{[`${preFixCls}-left-box`]:leftBox}]" v-if="leftFixedColumnRows.length>0">
            <pc-table-head :columns="leftFixedColumnRows" :childrenShow="childrenShow"></pc-table-head>
            <div  :style="{'max-height':height-headHeight+'px','overflow':'auto'}"
                  @scroll="handleBodyScroll"
                  ref="bodyLeft"
            >
                <pc-table-body :columns="leftFixedColumnRows"
                               :stripe="stripe"
                               :childrenShow="childrenShow"
                               :height="height"
                               :rowClassName="rowClassName"
                               :border="border"
                               :data="tableData"></pc-table-body>
            </div>
        </div>
        <!-- right 悬浮-->
        <div :class="[`${preFixCls}-right`,{[`${preFixCls}-right-box`]:rightBox}]" v-if="rightFixedColumnRows.length>0">
            <pc-table-head :columns="rightFixedColumnRows" :childrenShow="childrenShow"></pc-table-head>
            <div  :style="{'max-height':height-headHeight+'px','overflow':'auto'}"
                  ref="bodyRight"
                  @scroll="handleBodyScroll"
            >
                <pc-table-body :columns="rightFixedColumnRows"
                               :stripe="stripe"
                               :height="height"
                               :childrenShow="childrenShow"
                               :rowClassName="rowClassName"
                               :border="border"
                               :data="tableData"></pc-table-body>
            </div>
        </div>
        <div :class="[
                {[`${preFixCls}-body-fixed`]: height,}
            ]"
             ref="body"
             :style="{'max-height':height-headHeight+'px','overflow':'auto'}"
             @scroll="handleBodyScroll"
        >
            <pc-table-body :columns="!childrenShow?tableColumns:obtainBody"
                           :stripe="stripe"
                           :height="height"
                           :styles="tableWidth"
                           :rowClassName="rowClassName"
                           :childrenShow="childrenShow"
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
    import {tableRecursion,obtainLength,obtainBody} from './utils'
    export default {
        name: "PcTable",
        provide(){
            return{
                table: this
            }
        },
        components: {
            Render,
            PcTableHead,
            PcTableBody
        },
        data(){
            return{
                preFixCls: preFixCls,
                tableData: this.data,
                tableColumns: this.columns,
                tableWidth: '',
                leftDate: [],
                leftIndex: [],
                rightDate: [],
                rightIndex: [],
                headHeight: '',
                bodyHeight: '',
                thanWShow: false,
                thanHShow: false,
                leftBox: false,
                rightBox: false,
                childrenShow: false,
                obtainBody: [],
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
                type: Function,
                default: ()=>{}
            }
        },
        computed:{
            tableHeadClass(){
                return [
                    `${preFixCls}-head-fixed`,
                ]
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
                this.$refs.head.scrollLeft = event.target.scrollLeft;
                // 判断左边是否需要 box-shadow
                if (this.leftFixedColumnRows.length>0) {
                    this.$refs.bodyLeft.scrollTop = event.target.scrollTop;
                    if (event.target.scrollLeft===0) {
                        this.leftBox = false
                    }else {
                        this.leftBox = true
                    }
                }
                // 判断右边是否需要 box-shadow
                if (this.rightFixedColumnRows.length>0) {
                    this.$refs.bodyRight.scrollTop = event.target.scrollTop;
                    if (this.$refs.tableHead.$el.getBoundingClientRect().width - this.$el.offsetWidth - event.target.scrollLeft < 2 ) {
                        this.rightBox = false
                    }else {
                        this.rightBox = true
                    }
                }
            },1),
            handleHeadScroll:publics._debounce(function(event){
                this.$refs.body.scrollLeft = event.target.scrollLeft
            },1),
        },
        mounted(){
            this.leftFixedColumnRows = this.tableColumns.filter((item)=>{
                return (item.fixed===true||item.fixed==='left')&&item.width
            });
            this.rightFixedColumnRows = this.tableColumns.filter((item)=>{
                return (item.fixed==='right')&&item.width
            });
            let data = this.tableColumns.filter((item)=>{
                return !item.fixed
            });
            let children = this.tableColumns.filter((item)=>{
                    return item.children&&item.children.length>0
            });
            this.tableColumns = this.leftFixedColumnRows.concat(...data,...this.rightFixedColumnRows);
            if (children.length>0) {
                if (this.leftFixedColumnRows.length>0) {

                    let leftFixedColumnRows = [
                        [...this.leftFixedColumnRows]
                    ]
                    this.leftFixedColumnRows = leftFixedColumnRows
                }

                this.childrenShow = true;
                children = tableRecursion(this.tableColumns);
                let tableColumns = [];
                for (let i = 0; i < obtainLength(this.tableColumns) ; i++) {
                    tableColumns[i] = [];
                    children.forEach(items=>{
                        if (items.index-1 === i) {
                            tableColumns[i].push(items)
                        }
                    })
                }
                console.log(children)
                this.obtainBody = obtainBody(this.tableColumns);
                console.log(this.obtainBody)
                this.tableColumns = tableColumns
            }
            // leftIndex
            this.updateValue()
        },
        watch:{
            data(val){
                this.tableData = val
                this.updateValue()
            },
        }
    }
</script>

<style scoped>

</style>
