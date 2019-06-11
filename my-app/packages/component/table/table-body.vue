<template>
    <table cellspacing="0" cellpadding="0" border="0"
           :style="{'width':styles+'px'}"
    >
        <tbody>
        <tr v-for="(item,index) in data"
            :key="index"
            :class="
                        [
                            stripe?(index%2 !==0) ?`${preFixCls}-stripe`:'':'',
                            rowClassName({row:item,index,data})
                        ]
                    "
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
    export default {
        name: "PcTableBody",
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
                type: Function
            }
        },
        data(){
            return{
                preFixCls: preFixCls
            }
        }
    }
</script>

<style scoped>

</style>
