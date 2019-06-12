<template>
    <table cellspacing="0"
           :style="{'width':styles+'px'}"
           cellpadding="0" border="0" >
        <thead>
        <tr v-if="!childrenShow">
            <th v-for="(item,index) in columns"
                :key="index"
                :width="item.width"
            >
                {{item.title}}
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
                    {{item.title}}
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
            styles:{
                type: String|Number
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
