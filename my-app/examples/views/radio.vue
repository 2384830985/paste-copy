<template>
    <div style="margin: 20px">
        <div>
            <p>radio group</p>
            <p>type:'button'</p>
            <p>entity:false (是否铺满)</p>
            <p>size:'small', 'large', 'default' (只在按钮状态下才可以使用)</p>
        </div>
        <div>
            <p>radio</p>
            <p>label:'' （配合radio group 使用）</p>
            <p>size:'small', 'large', 'default'</p>
            <p>trueValue: '' （正确的值）</p>
            <p>falseValue: '' （错误的值）</p>
            <p>disabled: '' （是否禁用）</p>
        </div>
        <div>
            <p>事件</p>
            <p>on-change</p>
        </div>
        <p>disabled</p>
        <pc-radio-group  v-model="radio" type="button">
            <pc-radio :label="1" :disabled="disabled">1</pc-radio>
            <pc-radio :label="2" :disabled="disabled">2</pc-radio>
            <pc-radio :label="3" :disabled="disabled">3</pc-radio>
        </pc-radio-group>
        <pc-button @click="disabled=!disabled">disabled</pc-button>
        <p>disabled</p>
        <pc-radio-group  v-model="radio">
            <pc-radio :label="1" :disabled="disabled">1</pc-radio>
            <pc-radio :label="2" :disabled="disabled">2</pc-radio>
            <pc-radio :label="3" :disabled="disabled">3</pc-radio>
        </pc-radio-group>
        <pc-button @click="disabled=!disabled">disabled</pc-button>
        <p>铺满</p>
        <pc-radio-group  v-model="radio2" type="button" entity >
            <pc-radio :label="1">1</pc-radio>
            <pc-radio :label="2" disabled>2</pc-radio>
            <pc-radio :label="3">3</pc-radio>
        </pc-radio-group>
        <p>small</p>
        <pc-radio-group  v-model="radio2" type="button" size="small">
            <pc-radio :label="1" >1</pc-radio>
            <pc-radio :label="2" >2</pc-radio>
            <pc-radio :label="3" >3</pc-radio>
        </pc-radio-group>
        <p>default</p>
        <pc-radio-group  v-model="radio" type="button">
            <pc-radio :label="1" disabled>1</pc-radio>
            <pc-radio :label="2">2</pc-radio>
            <pc-radio :label="3" size="large">3</pc-radio>
        </pc-radio-group>
        <p>large</p>
        <pc-radio-group  v-model="radio2" type="button" size="large">
            <pc-radio :label="1" >1</pc-radio>
            <pc-radio :label="2" >2</pc-radio>
            <pc-radio :label="3" disabled size="large">3</pc-radio>
        </pc-radio-group>
        <p>small</p>
        <pc-radio-group  v-model="radio2" >
            <pc-radio :label="1" disabled size="small">1</pc-radio>
            <pc-radio :label="2"  size="small">2</pc-radio>
            <pc-radio :label="3"  size="small">3</pc-radio>
        </pc-radio-group>
        <p>default</p>
        <pc-radio-group  v-model="radio1">
            <pc-radio :label="1" disabled>1</pc-radio>
            <pc-radio :label="2">2</pc-radio>
            <pc-radio :label="3" size="large">3</pc-radio>
        </pc-radio-group>
        <p>large</p>
        <pc-radio-group  v-model="radio2" size="large">
            <pc-radio :label="1" size="large" >1</pc-radio>
            <pc-radio :label="2" size="large" >2</pc-radio>
            <pc-radio :label="3" size="large" >3</pc-radio>
        </pc-radio-group>
    </div>
</template>

<script>
    export default {
        name: "radioa",
        data(){
            return{
                radio: 2,
                radio1: 1,
                radio2: 1,
                disabled: true
            }
        },
        methods:{
            xxx(){
                console.log(this.radio = 2)
            }
        }
    }
</script>

<style scoped>

</style>
