<template>
    <div style="margin: 20px;">
        <div style="margin: 20px">
            <pc-table :columns="columns4"
                      :data="data"
                      stripe
                      height="400"
                      border
            ></pc-table>
        </div>
        <div style="margin: 20px">
            <pc-table :columns="columnss"
                      :data="data"
                      stripe
                      height="400"
                      :rowClassName="rowClassName"
                      border
            ></pc-table>
        </div>
        <div style="margin: 20px">
            <pc-table :columns="columns2"
                      :data="data"
                      stripe
                      height="400"
                      :rowClassName="rowClassName"
                      border
            ></pc-table>
        </div>
        <div style="margin: 20px">
            <pc-table :columns="columns3"
                      :data="data"
                      stripe
                      border
            ></pc-table>
        </div>
        <!--<div style="margin: 20px">-->
            <!--<pc-table :columns="columns"-->
                      <!--:data="data"-->
                      <!--stripe-->
                      <!--height="400"-->
                      <!--:rowClassName="rowClassName"-->
            <!--&gt;</pc-table>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "table1",
        data(){
            return{
                columns4: [
                    {
                        type: 'index',
                        width: 45,
                        align: 'center'
                    },
                    {
                        type: 'selection',
                        width: 48,
                        align: 'center'
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                ],
                columns2: [
                    {
                        type: 'index',
                        width: 40,
                        align: 'center'
                    },
                    {
                        type: 'selection',
                        width: 48,
                        align: 'center'
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                        children: [
                                            {
                                                title: 'Address1',
                                                key: 'Address1',
                                            },
                                        ]
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                            {
                                title: '123',
                                key: 'Address123456789',
                            },
                        ]
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                        ]
                    },
                ],
                columnss: [
                    {
                        type: 'index',
                        width: 40,
                        align: 'center'
                    },
                    {
                        type: 'selection',
                        width: 48,
                        align: 'center'
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '789',
                        key: 'name2',
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                        children: [
                                            {
                                                title: 'Address1',
                                                key: 'Address1',
                                            },
                                        ]
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                            {
                                title: '123',
                                key: 'Address123456789',
                            },
                        ]
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: '123',
                        key: 'name',
                        align: 'center',
                        children: [
                            {
                                title: 'Address123456789',
                                children: [
                                    {
                                        title: 'Address1',
                                        key: 'Address1',
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        title: '456',
                        key: 'name',
                        width: 100,
                        fixed: true
                    },
                    {
                        title: '789',
                        key: 'name2',
                        className: 'y',
                        width: 100,
                        fixed: true
                    },
                    {
                        title: '1111',
                        key: 'name3',
                        width: 100,
                        fixed: 'right'
                    },
                ],
                columns: [
                    {
                        type: 'index',
                        width: 40,
                        align: 'center'
                    },
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
                columns3: [
                    {
                        type: 'index',
                        width: 40,
                        align: 'center'
                    },
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
                        name: '456',
                        name1: '123',
                        name2: '789',
                        name3: '1111',
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
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
                    {
                        name: '12323'
                    },
                    {
                        name: '1211113'
                    },
                    {
                        name: '1232323'
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
                    {
                        name: '12323'
                    },
                    {
                        name: '1211113'
                    },
                    {
                        name: '1232323'
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
                    {
                        name: '12323'
                    },
                    {
                        name: '1211113'
                    },
                    {
                        name: '1232323'
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
                    {
                        name: '12323'
                    },
                    {
                        name: '1211113'
                    },
                    {
                        name: '1232323'
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
                    {
                        name: '12323'
                    },
                    {
                        name: '1211113'
                    },
                    {
                        name: '1232323'
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
                    {
                        name: '12323'
                    },
                    {
                        name: '1211113'
                    },
                    {
                        name: '1232323'
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
                if (index===2) {
                    return 'red'
                }
            }
        }
    }
</script>

<style>
    .red{
        background: red;
    }
    .y{
        /*background: #f9ff3f;*/
    }
    .b{
        background: #21ff33;
    }
</style>
