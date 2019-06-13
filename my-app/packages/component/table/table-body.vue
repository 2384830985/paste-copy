<template>
    <table cellspacing="0" cellpadding="0" border="0"
           :style="{'width':styles+'px'}"
    >
        <tbody>
        <tr v-for="(item,index) in tableData"
            :key="index"
            @mouseenter.stop="handelMouseenter(item,index)"
            @mouseleave.stop="handelMouseleave(item,index)"
            :height="item.height"
            :class="[
                    `${preFixCls}-tr`,
                    stripe?(index%2 !==0) ?`${preFixCls}-stripe`:'':'',
                    item.isHover?`${preFixCls}-isHover`:'',
                        {
                            // [`${rowClassName({row:item,index,data})}`]: !!rowClassName,
                        }
                    ]"
        >
            <td v-for="(items,indexs) in columns"
                :width="items.width"
                :key="indexs">
                <template v-if="items.render">
                    <Render :row="item" :column="items" :index="index" :render="items.render"></Render>
                </template>
                <template v-else-if="items.slot">
                    <slot :row="item" :column="items" :index="index" :name="items.slot"></slot>
                </template>
                <template v-else>
                    {{item[items.key]}}
                </template>
            </td>
        </tr>
        </tbody>
    </table>

</template>

<script>
    const preFixCls = 'pc-table';
    import {findComponentUpward,findComponentsDownward} from '../../utils/assist'
    export default {
        name: "PcTableBody",
        inject: ['table'],
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
                default: ()=>{}
            }
        },
        data(){
            return{
                preFixCls: preFixCls,
                tableData: this.data,
                brotherData: [],
            }
        },
        methods:{
            handelMouseenter(item,index){
                this.handelData();
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
            handelData(){
                let table = findComponentUpward(this,'PcTable');
                this.brotherData = findComponentsDownward(table,'PcTableBody');
                let index = 0;
                let max = 0;
                this.brotherData.forEach((item,indexs)=>{
                    if (item.columns.length > max) {
                        max = item.columns.length
                        index = indexs
                    }
                })
                let height = [];
                this.brotherData[index].$el.childNodes[0].childNodes.forEach(item=>{
                    height.push(item.getBoundingClientRect().height)
                })
                this.brotherData.forEach((item,indexs)=>{
                    if (index!==indexs) {
                        item.tableData.forEach((items,i)=>{
                            items.height = height[i]
                        })
                    }
                })
            }
        },
        mounted(){
            this.handelData();
        },
        watch:{
            data(val){
                this.handelData();
                this.tableData = val
            }
        }
    }
</script>

<style scoped>

</style>
