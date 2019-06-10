<template>
    <div style="margin: 20px">
        <pc-form :rules="rules"
                 ref="form"
                 :label-width="80"
                 label-position="right"
                 :labelStyle="labelStyle"
                 :model="model">
            <pc-form-item label="123"
                          :labelStyle="labelStyle1"
                          prop="name">
                <pc-input v-model="model.name"  size="large"></pc-input>
            </pc-form-item>
            <pc-form-item label="123"  prop="checkBoxList">
                <pc-checkbox-group v-model="model.checkBoxList" size="small">
                    <pc-checkbox :label="1"></pc-checkbox>
                    <pc-checkbox :label="2"></pc-checkbox>
                    <pc-checkbox :label="3"></pc-checkbox>
                    <pc-checkbox :label="4"></pc-checkbox>
                </pc-checkbox-group>
            </pc-form-item>
            <pc-form-item label="123" prop="radio">
                <pc-radio-group  v-model="model.radio" entity size="small">
                    <pc-radio :label="1">1</pc-radio>
                    <pc-radio :label="2" disabled>2</pc-radio>
                    <pc-radio :label="3">3</pc-radio>
                </pc-radio-group>
            </pc-form-item>
            <pc-form-item label="123" prop="multiplexx">
                <pc-select v-model="model.multiplexx" size="small">
                    <pc-option-group label="水果">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                        <pc-option label="西瓜香蕉" value="2"></pc-option>
                        <pc-option label="西草莓" value="3"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="西瓜耳机" value="6"></pc-option>
                        <pc-option label="西瓜馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
            </pc-form-item>
            <pc-form-item label="123" prop="multiple">
                <pc-select v-model="model.multiple" multiple :maxTagCount="4" size="small">
                    <pc-option-group label="水果">
                        <pc-option label="西瓜" value="0"></pc-option>
                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                        <pc-option label="西瓜香蕉" value="2"></pc-option>
                        <pc-option label="西草莓" value="3"></pc-option>
                    </pc-option-group>
                    <pc-option-group label="杂项" >
                        <pc-option label="栗子" value="4"></pc-option>
                        <pc-option label="鱼" disabled value="5"></pc-option>
                        <pc-option label="西瓜耳机" value="6"></pc-option>
                        <pc-option label="西瓜馒头" value="7"></pc-option>
                    </pc-option-group>
                </pc-select>
            </pc-form-item>
            <pc-form-item>
                <pc-button @click="clickForm('form')">
                    提交
                </pc-button>
                <pc-button @click="rest('form')">
                    重置
                </pc-button>
            </pc-form-item>
        </pc-form>
    </div>
</template>

<script>
    export default {
        name: "form1",
        data(){
            return{
                labelStyle: {
                    lineHeight: '32px'
                },
                labelStyle1: {
                    lineHeight: '40px'
                },
                model: {
                    name: '323222222',
                    multiplexx: '',
                    radio: '',
                    checkBoxList: [1],
                    multiple: ['7']
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'change' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    checkBoxList: [
                        {  required: true, message: '请选择日期',}
                    ],
                    radio: [
                        {  required: true, message: '请选择日期',}
                    ],
                    multiple: [
                        {  required: true, message: '请选择日期',}
                    ],
                    multiplexx: [
                        {  required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            clickForm(form){
                this.$refs[form].validator(function (value) {
                    console.log(value)
                })
            },
            rest(form){
                this.$refs[form].reset()
            }
        }
    }
</script>

<style scoped>

</style>
