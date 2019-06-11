<template>
    <div style="margin: 20px;">
        <div style="margin: 20px">
            <pc-table :columns="columns"
                      :data="data"
                      stripe
                      height="400"
                      :rowClassName="rowClassName"
                      border
            ></pc-table>
        </div>
        <div style="margin: 20px">
            <pc-table :columns="columns"
                      :data="data"
                      stripe
                      height="400"
                      :rowClassName="rowClassName"
            ></pc-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "table1",
        data(){
            return{
                columns: [
                    {
                        title: '123',
                        key: 'name',
                        width: 100,
                        fixed: true
                    },
                    {
                        title: '456',
                        key: 'name',
                        width: 100,
                        fixed: 'right'
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                    {
                        title: '1111',
                        key: 'name3',
                    },
                ],
                data: [
                    {
                        name: '123',
                        name1: '123',
                        name2: '12323',
                        name3: '123',
                    },
                    {
                        name: '123',
                        name1: '123',
                        name2: '12323',
                        name3: '123',
                    },
                    {
                        name: '12323'
                    },
                    {
                        name: '12323'
                    },
                    {
                        name: '1211113'
                    },
                    {
                        name: '1232323'
                    },
                ]
            }
        },
        methods:{
            rowClassName({row,index,data}){
                // console.log(row)
                // console.log(index)
                // console.log(data)
            }
        }
    }
</script>

<style scoped>

</style>
