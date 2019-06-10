<template>
    <table cellspacing="0"
           :style="{'width':styles+'px'}"
           cellpadding="0" border="0" >
        <thead>
        <tr>
            <th v-for="(item,index) in columns"
                :key="index"
                :width="item.width"
            >
                {{item.title}}
            </th>
        </tr>
        </thead>
    </table>
</template>

<script>
    export default {
        name: "PcTableHead",
        props: {
            columns:{
                type: Array
            },
            styles:{
                type: String|Number
            }
        }
    }
</script>

<style scoped>

</style>
