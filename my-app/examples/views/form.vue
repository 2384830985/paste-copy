<template>
    <div style="margin: 20px">
        <pc-form :rules="rules" :model="model">
            <pc-form-item label="123"
                          prop="name">
                <pc-input v-model="model.name"></pc-input>
            </pc-form-item>
        </pc-form>
    </div>
</template>

<script>
    export default {
        name: "form1",
        data(){
            return{
                model: {
                    name: 'xx'
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
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
        }
    }
</script>

<style scoped>

</style>
