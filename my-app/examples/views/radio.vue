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
        <p>铺满</p>
        <t-radio-group  v-model="radio2" type="button" entity >
            <t-radio :label="1">1</t-radio>
            <t-radio :label="2" disabled>2</t-radio>
            <t-radio :label="3">3</t-radio>
        </t-radio-group>
        <p>small</p>
        <t-radio-group  v-model="radio2" type="button" size="small">
            <t-radio :label="1" >1</t-radio>
            <t-radio :label="2" >2</t-radio>
            <t-radio :label="3" >3</t-radio>
        </t-radio-group>
        <p>default</p>
        <t-radio-group  v-model="radio" type="button">
            <t-radio :label="1" disabled>1</t-radio>
            <t-radio :label="2">2</t-radio>
            <t-radio :label="3" size="large">3</t-radio>
        </t-radio-group>
        <p>large</p>
        <t-radio-group  v-model="radio2" type="button" size="large">
            <t-radio :label="1" >1</t-radio>
            <t-radio :label="2" >2</t-radio>
            <t-radio :label="3" disabled size="large">3</t-radio>
        </t-radio-group>
        <p>small</p>
        <t-radio-group  v-model="radio2" >
            <t-radio :label="1" disabled size="small">1</t-radio>
            <t-radio :label="2"  size="small">2</t-radio>
            <t-radio :label="3"  size="small">3</t-radio>
        </t-radio-group>
        <p>default</p>
        <t-radio-group  v-model="radio1">
            <t-radio :label="1" disabled>1</t-radio>
            <t-radio :label="2">2</t-radio>
            <t-radio :label="3" size="large">3</t-radio>
        </t-radio-group>
        <p>large</p>
        <t-radio-group  v-model="radio2" size="large">
            <t-radio :label="1" size="large" >1</t-radio>
            <t-radio :label="2" size="large" >2</t-radio>
            <t-radio :label="3" size="large" >3</t-radio>
        </t-radio-group>
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
