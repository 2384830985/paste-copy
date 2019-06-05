<template>
    <div>
        <label><slot name="label">{{label}}</slot></label>
        <slot></slot>
    </div>
</template>

<script>
    import AsyncValidator from 'async-validator';
    import Emitter from '../../mixins/emitter'
    export default {
        name: "PcFormItem",
        mixins: [Emitter],
        inject: ['form'],
        props:{
            prop: {
                type: String,
            },
            label: {
                type: String,
                default: ''
            },
            labelWidth: {
                type: String,
            }
        },
        methods:{
            setRules(){
                if (this.getRules().length===0) {
                    return false
                }
                this.$off('on-form-blur', this.onBlur);
                this.$off('on-form-change', this.onChange);
                this.$on('on-form-change',this.onChange);
                this.$on('on-form-blur', this.onBlur);
            },
            onChange(){
                this.validator('change')
            },
            onBlur(){
                this.validator('blur')
            },
            // 获取当前当规则
            getRules(){
                let formRules = this.form.rules;
                let rules = formRules?formRules[this.prop]:[];
                return [].concat(rules)
            },
            // 获取当前事件规则
            getFilteredRule(type){
                let formRules = this.getRules();
                return formRules.filter(item=>{return !item.trigger||item.trigger===type})
            },
            // 验证
            validator(type){
                console.log(this.getFilteredRule(type))
                let rulesList = this.getFilteredRule(type)
                if (rulesList.length===0||!rulesList) {

                }
                console.log(type)
            },
        },
        mounted(){
            if (this.prop) {
                this.dispatch('PcForm', 'on-form-item-add', this);
                // Object.defineProperty(this, 'initialValue', {
                //     value: this.fieldValue
                // });
                this.setRules();
            }
        },
        beforeDestroy (){
            this.dispatch('PcForm', 'on-form-item-remove', this);
        }
    }
</script>

<style scoped>

</style>
