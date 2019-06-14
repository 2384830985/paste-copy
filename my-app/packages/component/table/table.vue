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
             @mouseenter="handelMouseenter('head')"
             @mouseleave="handelMouseleave('head')"
             ref="head">
            <pc-table-head :styles="tableWidth" ref="tableHead"
                           :columns="tableColumns"
                           :AllChildren="AllChildren"
                           :childrenShow="childrenShow"></pc-table-head>
        </div>
        <!-- left 悬浮-->
        <div :class="[`${preFixCls}-left`,{[`${preFixCls}-left-box`]:leftBox}]"
             v-show="leftFixedColumnRows.length>0">
            <pc-table-head :columns="leftFixedColumnRows"></pc-table-head>
            <div  :style="{'max-height':height-headHeight+'px','overflow':'scroll','overflow-scrolling': 'auto'}"
                  ref="bodyLeft"
                  @mouseenter="handelMouseenter('bodyLeft')"
                  @mouseleave="handelMouseleave('bodyLeft')"
            >
                <pc-table-body :columns="leftFixedColumnRows"
                               :stripe="stripe"
                               type="left"
                               :childrenShow="childrenShow"
                               :height="height"
                               :rowClassName="rowClassName"
                               :border="border"
                               :data="tableData"></pc-table-body>
            </div>
        </div>
        <!-- right 悬浮-->
        <!--@scroll="handleLeftBodyScroll"-->
        <div :class="[`${preFixCls}-right`,{[`${preFixCls}-right-box`]:rightBox}]" v-show="rightFixedColumnRows.length>0">
            <pc-table-head :columns="rightFixedColumnRows"></pc-table-head>
            <div  :style="{'max-height':height-headHeight+'px','overflow':'scroll','overflow-scrolling': 'auto'}"
                  ref="bodyRight"
                  @mouseenter="handelMouseenter('bodyRight')"
                  @mouseleave="handelMouseleave('bodyRight')"
            >
                <pc-table-body :columns="rightFixedColumnRows"
                               :stripe="stripe"
                               :height="height"
                               type="right"
                               :childrenShow="childrenShow"
                               :rowClassName="rowClassName"
                               :border="border"
                               :data="tableData"></pc-table-body>
            </div>
        </div>
        <!--@scroll="handleBodyScroll"-->
        <div :class="[
                {[`${preFixCls}-body-fixed`]: height,}
            ]"
             ref="body"
             @mouseenter="handelMouseenter('body')"
             @mouseleave="handelMouseleave('body')"
             :style="{'max-height':height-headHeight+'px','overflow':'scroll','overflow-scrolling': 'auto'}"
        >
            <pc-table-body :columns="!childrenShow?tableColumns:obtainBody"
                           :stripe="stripe"
                           :height="height"
                           :styles="tableWidth"
                           :AllChildren="AllChildren"
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
    import {tableRecursion,obtainLength,obtainBody,obtainAllChildren} from './utils'
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
                type: '',
                thanWShow: false,
                thanHShow: false,
                leftBox: false,
                rightBox: false,
                childrenShow: false,
                scrollLeft: '',
                obtainBody: [],
                leftFixedColumnRows: [],
                AllChildren: [],
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
            // 是否排序
            sort: {
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
                default () {
                    return '';
                }
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
            handelMouseenter(type){
                this.type = type;
                this.$refs[type].addEventListener('scroll',this.handelMouse,false)
            },
            handelMouse(event){
                let type = this.type;
                let {bodyRight,bodyLeft,body,tableHead,head} = this.$refs;
                let that = this;
                let scrollLeft = JSON.parse(JSON.stringify(parseInt(event.target.scrollLeft)));
                let scrollTop = JSON.parse(JSON.stringify(parseInt(event.target.scrollTop)));
                that.$nextTick(()=>{
                    if (type==='bodyRight') {
                        bodyLeft.scrollTop = scrollTop;
                        body.scrollTop = scrollTop;
                    }else if (type==='bodyLeft') {
                        bodyRight.scrollTop = scrollTop;
                        body.scrollTop = scrollTop;
                    }else if (type==='head') {
                        body.scrollLeft = scrollLeft;
                    }else if (type==='body') {
                        if (that.leftFixedColumnRows.length>0) {
                            scrollLeft===0 ? that.leftBox = false:that.leftBox = true;
                            bodyLeft.scrollTop = scrollTop;
                        }
                        // 判断右边是否需要 box-shadow
                        if (that.rightFixedColumnRows.length>0) {
                            tableHead.$el.getBoundingClientRect().width - that.$el.offsetWidth - scrollLeft < 2 ?that.rightBox = false:that.rightBox = true;
                            bodyRight.scrollTop = scrollTop;
                        }
                        head.scrollLeft = scrollLeft;
                    }
                })
            },
            handelMouseleave(type){
                this.$refs[type].removeEventListener('scroll',this.handelMouse,false);
            },
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
            },
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
            // console.log(data)
            this.tableColumns = this.leftFixedColumnRows.concat(...data,...this.rightFixedColumnRows);
            if (children.length>0) {
                this.childrenShow = true;
                children = tableRecursion(this.tableColumns);
                // console.log(children)
                this.AllChildren = obtainAllChildren(this.tableColumns);
                // console.log(this.AllChildren)
                let tableColumns = [];
                for (let i = 0; i < obtainLength(this.tableColumns) ; i++) {
                    tableColumns[i] = [];
                    children.forEach(items=>{
                        if (items.index-1 === i) {
                            tableColumns[i].push(items)
                        }
                    })
                }
                this.obtainBody = obtainBody(this.tableColumns);
                this.tableColumns = tableColumns;
                this.$nextTick(()=>{
                    if (this.leftFixedColumnRows.length>0) {
                        this.leftFixedColumnRows.forEach((item,index)=>{
                            item.height = this.$refs.tableHead.$el.getBoundingClientRect().height - 1;
                            this.$set(this.leftFixedColumnRows,index,item)
                        });
                    }
                    if (this.rightFixedColumnRows.length>0) {
                        this.rightFixedColumnRows.forEach((item,index)=>{
                            item.height = this.$refs.tableHead.$el.getBoundingClientRect().height - 1;
                            this.$set(this.rightFixedColumnRows,index,item)
                        });
                    }
                })
            }
            // leftIndex
            this.updateValue()
        },
        watch:{
            data(val){
                this.tableData = val;
                this.updateValue()
            },
        }
    }
</script>

<style scoped>

</style>
