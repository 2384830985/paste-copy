<template>
    <div style="margin: 20px;">
        <pc-button @click="click(true)">选中</pc-button>
        <pc-button @click="click(false)">不选中</pc-button>
        <div style="margin: 20px">合并横坐标</div>
        <div style="margin: 20px">
            <pc-table :columns="columns4"
                      :data="data"
                      stripe
                      :spanMethod="spanMethod"
                      @checkboxChange="checkboxChange"
                      @checkboxChangeHead="checkboxChangeHead"
                      ref="selection"
                      height="400"
                      border
            ></pc-table>
        </div>
        <div style="margin: 20px">合并纵坐标</div>
        <div style="margin: 20px">
            <pc-table :columns="columns4"
                      :data="data"
                      stripe
                      height="400"
                      :spanMethod="spanMethod1"
                      border
            ></pc-table>
        </div>
        <div style="margin: 20px">
            多级表头加滚动
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
            多级表头
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
            添加边框
        </div>
        <div style="margin: 20px">
            <pc-table :columns="columns3"
                      :data="data"
                      stripe
                      border
            ></pc-table>
        </div>
        <div style="margin: 20px">
            普通
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
                columns4: [
                    {
                        type: 'index',
                        width: 45,
                        align: 'center',
                    },
                    {
                        type: 'selection',
                        width: 48,
                        align: 'center',
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
                    },
                    {
                        title: '789',
                        key: 'name2',
                        width: 200
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
                                title: '321',
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
                        width: 200
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
                                                width: 200,
                                                title: 'Address1',
                                                key: 'Address1',
                                            },
                                        ]
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                        width: 200
                                    },
                                ]
                            },
                            {
                                title: '123',
                                key: 'Address123456789',
                                width: 200
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
                                        width: 200
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                        width: 200
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
                                        width: 200
                                    },
                                    {
                                        title: 'Address2',
                                        key: 'Address2',
                                        width: 200
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
                ],
                data: [
                    {
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
                        Address1: 'Address1',
                        Address2: 'Address2',
                        Address3: 'Address3',
                        Address4: 'Address4',
                        cellClassName: {
                            name: 'b',
                            name3: 'b',
                        }
                    },{
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        name: '456gfdkjgfd;lgjfdkl;gjkdfkl',
                        name1: '123gfdgfdgdf',
                        name2: '789dfg',
                        name3: '1111',
                        _checkbox: true,
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
                        _checkbox: true,
                        name3: '123',
                    },
                    {
                        name: '12323',
                        _disabled: true
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
            },
            click(state){
                this.$refs.selection.selectAll(state);
            },
            checkboxChange(tableData,item,index){
                console.log(tableData)
                console.log(item)
                console.log(index)
            },
            checkboxChangeHead(tableData,checkbox){
                console.log(tableData)
                console.log(checkbox)
            },
            // row 当前行数据
            // column 当前行的  column
            // rowIndex 当前行的 index
            // columnIndex 当前列的 index
            spanMethod1({row,column,rowIndex,columnIndex}) {
                // console.log(row)
                // console.log(rowIndex)
                // console.log(columnIndex)
                if (columnIndex === 0) {
                    if (rowIndex % 3 === 0) {
                        return {
                            rowspan: 3,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
            spanMethod({row,column,rowIndex,columnIndex}){
                // console.log(row)
                // console.log(rowIndex)
                // console.log(columnIndex)
                if (rowIndex % 2 === 0) {
                    if (columnIndex === 0) {
                        return {
                            rowspan: 1,
                            colspan: 3
                        };
                    } else if (columnIndex === 1) {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }else if (columnIndex === 2) {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }else {
                        return {
                            rowspan: 1,
                            colspan: 1
                        };
                    }
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
