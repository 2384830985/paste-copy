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
             @mousewheel="handleMouseWheel"
             ref="head">
            <pc-table-head :styles="tableWidth" ref="tableHead"
                           :columns="tableColumns"
                           :AllChildren="AllChildren"
                           @on-sort="onSort"
                           @checkboxChangeHead="checkboxChangeHead"
                           :childrenShow="childrenShow">
                <span v-if="slotSort.length>0" v-for="(item,index) in slotSort" :class="item" :key="index" :slot="item">
                    <slot :name="item"></slot>
                </span>
            </pc-table-head>
        </div>
        <!-- left 悬浮-->
        <div :class="[`${preFixCls}-left`,{[`${preFixCls}-left-box`]:leftBox}]"
             @mousewheel="handleFixedMousewheel"
             @DOMMouseScroll="handleFixedMousewheel"
             v-show="leftFixedColumnRows.length>0">
            <pc-table-head :columns="leftFixedColumnRows"  @on-sort="onSort" ref="tableHeadLeft" @checkboxChangeHead="checkboxChangeHead" >
                <span v-if="slotSortLeft.length>0" v-for="(item,index) in slotSortLeft" :class="item" :key="index" :slot="item">
                    <slot :name="item"></slot>
                </span>
            </pc-table-head>
            <div  :style="{'max-height':height-headHeight+'px','overflow':'scroll','overflow-scrolling': 'auto'}"
                  ref="bodyLeft"
            >
                <pc-table-body :columns="leftFixedColumnRows"
                               :stripe="stripe"
                               type="left"
                               @checkboxChange="checkboxChange"
                               :childrenShow="childrenShow"
                               :height="height"
                               :spanMethod="spanMethod"
                               :rowClassName="rowClassName"
                               :border="border"
                               :data="tableData"></pc-table-body>
            </div>
        </div>
        <!-- right 悬浮-->
        <!--@scroll="handleLeftBodyScroll"-->
        <div :class="[`${preFixCls}-right`,{[`${preFixCls}-right-box`]:rightBox}]"
             @mousewheel="handleFixedMousewheel"
             @DOMMouseScroll="handleFixedMousewheel"
             v-show="rightFixedColumnRows.length>0">
            <pc-table-head
                    @on-sort="onSort"
                    @checkboxChangeHead="checkboxChangeHead"
                    ref="tableHeadRight"
                    :columns="rightFixedColumnRows">
                <span  v-if="slotSortRight.length>0" v-for="(item,index) in slotSortRight" :class="item" :key="index" :slot="item">
                    <slot :name="item"></slot>
                </span>
            </pc-table-head>
            <div  :style="{'max-height':height-headHeight+'px','overflow':'scroll','overflow-scrolling': 'auto'}"
                  ref="bodyRight"
            >
                <pc-table-body :columns="rightFixedColumnRows"
                               :stripe="stripe"
                               :height="height"
                               type="right"
                               @checkboxChange="checkboxChange"
                               :childrenShow="childrenShow"
                               :rowClassName="rowClassName"
                               :spanMethod="spanMethod"
                               :border="border"
                               :data="tableData"></pc-table-body>
            </div>
        </div>
        <div :class="[
                {[`${preFixCls}-body-fixed`]: height,}
            ]"
             ref="body"
             @scroll="handleBodyScroll"
             :style="{'max-height':height-headHeight+'px','overflow':'scroll','overflow-scrolling': 'auto'}"
        >
            <pc-table-body :columns="!childrenShow?tableColumns:obtainBody"
                           :stripe="stripe"
                           :height="height"
                           :styles="tableWidth"
                           :AllChildren="AllChildren"
                           :rowClassName="rowClassName"
                           :spanMethod="spanMethod"
                           :childrenShow="childrenShow"
                           @checkboxChange="checkboxChange"
                           :border="border"
                           :data="tableData"></pc-table-body>
        </div>
        <div :class="`${preFixCls}-loading`" v-if="loading">
            <pc-icon class="pc-icon-loading" type="loading5"/>
        </div>
    </div>
</template>

<script>
    const preFixCls = 'pc-table';
    import PcTableHead from './table-head'
    import PcTableBody from './table-body'
    import {tableRecursion,obtainLength,obtainBody,obtainAllChildren} from './utils'
    export default {
        name: "PcTable",
        provide(){
            return{
                table: this
            }
        },
        components: {
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
                slotSort: [],
                slotSortRight: [],
                slotSortLeft: [],
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
            loading: {
                type: Boolean,
                default: false
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
            },
            // 实现合并行或列
            spanMethod:{
                type: Function,
                default () {
                    return '';
                }
            },
        },
        computed:{
            tableHeadClass(){
                return [
                    `${preFixCls}-head-fixed`,
                ]
            },
        },
        methods:{
            // 移动触发当前body的值
            handleMouseWheel(event){
                const deltaX = event.deltaX;
                const body = this.$refs.body;
                // 当前往左 或者 右边 滑动的时候就滑动 10像素
                if (deltaX > 0) {
                    body.scrollLeft = body.scrollLeft + 10;
                } else {
                    body.scrollLeft = body.scrollLeft - 10;
                }
            },
            // 移动触发当前body的值
            handleFixedMousewheel(event){
                let deltaY = event.deltaY;
                // 兼容火狐浏览器
                if(!deltaY && event.detail){
                    deltaY = event.detail * 30;
                }
                if(!deltaY && event.wheelDeltaY){
                    deltaY = -event.wheelDeltaY;
                }
                if(!deltaY && event.wheelDelta){
                    deltaY = -event.wheelDelta;
                }
                if(!deltaY) return;
                const body = this.$refs.body;
                const currentScrollTop = body.scrollTop;
                // 防止抖动
                if (deltaY < 0 && currentScrollTop !== 0) {
                    event.preventDefault();
                }
                if (deltaY > 0 && body.scrollHeight - body.clientHeight > currentScrollTop) {
                    event.preventDefault();
                }
                let step = 0;
                let timeId = setInterval(()=>{
                    step += 5;
                    if(deltaY>0){
                        body.scrollTop += 2;
                    }
                    else{
                        body.scrollTop -= 2;
                    }
                    if(step >= Math.abs(deltaY)){
                        clearInterval(timeId);
                    }
                }, 5);
            },
            handleBodyScroll(event){
                this.handelMouse(event,'body')
            },
            handelMouseenter(type){
                // console.log(type)
                // this.type = type;
                // ['bodyRight','bodyLeft','head','body'].forEach(item=>{
                //     this.$refs[item].addEventListener('scroll',this[item],false)
                // })
            },
            bodyRight(event){
                this.handelMouse(event,'bodyRight')
            },
            bodyLeft(event){
                this.handelMouse(event,'bodyLeft')
            },
            head(event){
                this.handelMouse(event,'head')
            },
            body(event){
                this.handelMouse(event,'body')
            },
            handelMouse(event){
                let {bodyRight,bodyLeft,tableHead,head} = this.$refs;
                let that = this;
                let scrollLeft = JSON.parse(JSON.stringify(parseInt(event.target.scrollLeft)));
                let scrollTop = JSON.parse(JSON.stringify(parseInt(event.target.scrollTop)));
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
            },
            handelMouseleave(type){
                // this.$refs[type].removeEventListener('scroll',this.handelMouse,false);
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

                let selection = this.tableColumns.filter((item)=>{return item.type==='selection'});

                if (selection.length>0) {
                    this.tableData.forEach((item)=>{
                        item._checkbox = item._checkbox?item._checkbox:false
                    })
                    let tableData = this.tableData.filter((item)=>{return item._checkbox});
                    if (tableData.length===this.tableData.length) {
                        this.selectAll(true,false)
                    }else if (tableData.length>0) {
                        this.selectAll(true,true)
                    }
                }
            },
            checkboxChangeHead(tableData,checkbox){
                this.$emit('checkboxChangeHead',tableData,checkbox)
            },
            checkboxChange(tableData,item,index){
                this.$emit('checkboxChange',tableData,item,index)
            },
            onSort(item,order){
                this.$emit('on-sort',item,{order: order});
            },
            // 全部选中
            selectAll(value,index){
                let selection = this.tableColumns.filter((item)=>{return item.type==='selection'});
                if (selection.length>0) {
                    let { tableHeadRight, tableHeadLeft, tableHead } = this.$refs;
                    tableHead.checkboxChange(value,index);
                    if (this.leftFixedColumnRows.filter((item)=>{return item.type==='selection'}).length>0) {
                        tableHeadLeft.checkboxChange(value,index)
                    }
                    if (this.rightFixedColumnRows.filter((item)=>{return item.type==='selection'}).length>0) {
                        tableHeadRight.checkboxChange(value,index)
                    }
                }
            },
            // 获取当前选中
            searchSelectAll(){
                let selection = this.tableColumns.filter((item)=>{return item.type==='selection'});
                if (selection.length>0) {
                    return this.tableData.filter((item)=>{return item._checkbox});
                }
            },
        },
        mounted(){
            console.log(this.$slots)
            // let slotSort
            this.leftFixedColumnRows = this.tableColumns.filter((item)=>{
                return (item.fixed===true||item.fixed==='left')&&item.width
            });
            this.leftFixedColumnRows.forEach(item=>{
                if (!!item.slotSort) {
                    this.slotSortLeft.push(item.slotSort)
                }
            })
            this.rightFixedColumnRows = this.tableColumns.filter((item)=>{
                return (item.fixed==='right')&&item.width
            });
            this.rightFixedColumnRows.forEach(item=>{
                if (!!item.slotSort) {
                    this.slotSortRight.push(item.slotSort)
                }
            })
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
            }
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
            this.tableColumns.forEach(item=>{
                if (!!item.slotSort) {
                    this.slotSort.push(item.slotSort)
                }
            })
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
