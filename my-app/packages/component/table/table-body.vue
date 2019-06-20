<template>
    <table cellspacing="0" cellpadding="0" border="0"
           :style="{'width':styles+'px'}"
    >
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
        <tbody>
        <template v-for="(item,index) in tableData">
            <tr @mouseenter="handelMouseenter(item,index)"
                @mouseleave="handelMouseleave(item,index)"
                @click="rowClick(item,index)"
                @dblclick="dblClick(item,index)"
                :style="[{'height':type!=='center'?heights[index]+'px':''}]"
                :class="[
                    `${preFixCls}-tr`,
                    stripe?(index%2 !==0) ?`${preFixCls}-stripe`:'':'',
                    item.isHover?`${preFixCls}-isHover`:'',
                        {
                            [`${rowClassName({row:item,index,tableData})}`]: !!rowClassName({row:item,index,tableData}),
                        }
                    ]"
            >
                <td v-for="(items,indexs) in tableColumns"
                    :width="type!=='center'?items.width:''"
                    v-bind="spanMethod({row:item,column:items,rowIndex:index,columnIndex:indexs})"
                    v-if="bodySpanMethod({row:item,column:items,rowIndex:index,columnIndex:indexs})"
                    :style="{'text-align':items.align}"
                    :class="[`${items.className?items.className:''}`,{
                    [`${item.cellClassName?item.cellClassName[items.key]:''}`]: item.cellClassName?item.cellClassName[items.key]:false
                }]"
                    :key="indexs">
                    <template v-if="items.type&&items.type==='index'">
                        <div :class="`${preFixCls}-cell`">
                            {{index+1}}
                        </div>
                    </template>
                    <template v-else-if="items.type&&items.type==='selection'">
                        <div :class="`${preFixCls}-cell`">
                            <pc-checkbox v-model="item._checkbox" :disabled="item._disabled" @on-change="checkboxChange(item,indexs)"/>
                        </div>
                    </template>
                    <template v-else-if="items.type&&items.type==='expand'">
                        <div :class="`${preFixCls}-expand`" @click.stop="clickExpand(item,items)">
                            <pc-icon type="right" :class="{'on': !!item.expand}"></pc-icon>
                        </div>
                    </template>
                    <template v-else-if="items.render">
                        <div :class="`${preFixCls}-cell`">
                            <Render :row="item" :column="items" :index="index" :render="items.render"></Render>
                        </div>
                    </template>
                    <template v-else-if="items.slot">
                        <div :class="`${preFixCls}-cell`">
                            <slot :row="item" :column="items" :index="index" :name="items.slot"></slot>
                        </div>
                    </template>
                    <template v-else>
                        <div :class="`${preFixCls}-cell`">
                            {{item[items.key]?item[items.key]:'&nbsp;'}}
                        </div>
                    </template>
                </td>
            </tr>
            <tr v-if="expand.length>0&&item.expand">
                <td :colspan="tableColumns.length" >
                    <Render :row="item" :index="index" :render="expand[0].render"></Render>
                </td>
            </tr>
        </template>
        </tbody>
    </table>

</template>

<script>
    const preFixCls = 'pc-table';
    import {findBrothersComponents,findComponentUpward,findComponentsDownward} from '../../utils/assist';
    import Render from './render.js'
    export default {
        name: "PcTableBody",
        inject: ['table'],
        components:{
            Render,
        },
        props: {
            columns: {
                type: Array,
                default: ()=>{
                    return []
                }
            },
            data: {
                type: Array,
                default: ()=>{
                    return []
                }
            },
            AllChildren: {
                type: Array,
                default: ()=>{
                    return []
                }
            },
            stripe: {
                type: Boolean,
                default: false
            },
            childrenShow: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean
            },
            height: {
                type: Number|String
            },
            styles:{
                type: String|Number
            },
            rowClassName:{
                type: Function,
                default: ()=>{return ''}
            },
            spanMethod:{
                type: Function,
                default: ()=>{return ''}
            },
            type:{
                type: String,
                default: 'center'
            },
        },
        data(){
            return{
                preFixCls: preFixCls,
                tableData: this.data,
                tableColumns: this.columns,
                PcTableHead: [],
                brotherData: [],
                expand: [],
                heights: []
            }
        },
        methods:{
            clickExpand(item,items){
                item.expand = !item.expand;
                this.$forceUpdate();
                console.log(items)
            },
            /**
             * 判断当前是否合并单元行
             * @param row
             * @param column
             * @param rowIndex
             * @param columnIndex
             * @returns {boolean}
             */
            bodySpanMethod({row,column,rowIndex,columnIndex}){
                if (typeof this.spanMethod({row,column,rowIndex,columnIndex})==='object') {
                    let spanMethod = this.spanMethod({row,column,rowIndex,columnIndex});
                    if (spanMethod.colspan===0&&spanMethod.colspan===0) {
                        return false
                    }
                }
                return true
            },
            //  checkbox
            checkboxChange(item,index){
                this.$nextTick(()=>{
                    // Object.assign(item,{_checkbox:!item._checkbox});
                    let tableData = this.tableData.filter((items)=>{return items._checkbox});
                    // 空的时候
                    if (tableData.length===0) {
                        this.PcTableHead.forEach(item=>{
                            item.checkbox = false;
                            item.indeterminate = false;
                            item.$forceUpdate()
                        })
                        //    都选中的时候
                    }else if (tableData.length===this.tableData.length) {
                        this.PcTableHead.forEach(item=>{
                            item.checkbox = true;
                            item.indeterminate = false;
                        })
                    }else {
                        this.PcTableHead.forEach(item=>{
                            item.checkbox = true;
                            item.indeterminate = true;
                        })
                    }
                    this.$emit('checkboxChange',tableData,item,index)
                })

            },
            handelMouseenter(item,index){
                this.$nextTick(()=>{
                    this.brotherData.forEach(item=>{
                        item.tableData[index].isHover = true;
                        item.$forceUpdate();
                    })
                });
                this.$forceUpdate()
            },
            handelMouseleave(item,index){
                this.$nextTick(()=>{
                    this.brotherData.forEach(item=>{
                        item.tableData[index].isHover = false;
                        item.$forceUpdate();
                    })
                })
            },
            rowClick(item,index){
                this.$emit('on-row-click',item,index)
            },
            dblClick(item,index){
                this.$emit('on-row-dblclick',item,index)
            },
            handelData(){
                let brotherData = findBrothersComponents(this,'PcTableBody');
                if (this.type==='center'&&this.expand.length===0) {
                    this.$nextTick(()=>{
                        let index = 0;
                        let max = 0;
                        brotherData.forEach((item,indexs)=>{
                            if (item.tableColumns.length > max) {
                                max = item.tableColumns.length
                                index = indexs
                            }
                        })
                        this.heights = [];
                        brotherData[index].$el.childNodes[1].childNodes.forEach((item,index)=>{
                            if (item.getBoundingClientRect) {
                                this.heights.push(item.getBoundingClientRect().height)
                            }
                        });
                        brotherData.forEach((item,indexs)=>{
                            if (index!==indexs) {
                                item.heights = this.heights
                            }
                        })
                    })
                }
            }
        },
        mounted(){
            this.brotherData = findBrothersComponents(this,'PcTableBody');
            this.PcTableHead = findComponentsDownward(this.table,'PcTableHead');
            this.handelData();
            console.log(this.tableColumns)
            this.expand = this.tableColumns.filter(item=>{return item.type&&item.type === 'expand'});
        },
        watch:{
            data(val){
                this.handelData();
                this.tableData = val
            },
            columns(val){
                this.tableColumns = val;
            }
        }
    }
</script>

<style scoped>

</style>
