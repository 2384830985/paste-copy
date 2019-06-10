<template>
    <div :class="formClass" :style="formItemClass" >
        <label :class="labelClass"
               v-if="label"
               :style="labelStyles">
            <slot name="label">{{label}}</slot>
        </label>
        <div :class="`${prefixCls}-content`" :style="formContent">
            <slot></slot>
            <div :class="`${prefixCls}-massage`">{{massage}}</div>
        </div>
    </div>
</template>

<script>
    const prefixCls = 'pc-form-item';
    import AsyncValidator from 'async-validator';
    import Emitter from '../../mixins/emitter'
    // 深拷贝
    function deepClone(obj){
        let _obj = JSON.stringify(obj),
            objClone = JSON.parse(_obj);
        return objClone
    }
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
            required: {
                type: Boolean,
                default: false
            },
            labelStyle: {
                type: Object,
                default: ()=>{
                    return {}
                }
            },
        },
        computed:{
            labelStyles(){
                return {
                    width: this.labelWidth+'px',
                    textAlign: this.labelTextAlign,
                    ...this.form.labelStyle,
                    ...this.labelStyle,
                }
            },
            formContent(){
                return {
                    marginLeft: this.labelWidth+'px',
                }
            },
            formItemClass(){
                return {
                    display: this.form.inline?'inline-block':''
                }
            },
            formClass(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-error`]: this.state==='error',
                    }
                ]
            },
            labelClass(){
                return [
                    `${prefixCls}-label`,
                    {
                        [`${prefixCls}-required`]: this.isRequired,
                    }
                ]
            }
        },
        data(){
            return{
                state: '',
                massage: '',
                oldValue: '',
                prefixCls: prefixCls,
                isRequired: false,
                labelWidth: this.form.labelWidth,
                labelTextAlign: this.form.labelPosition,
            }
        },
        methods:{
            setRules(){
                if (this.getRules().length===0) {
                    return false
                }
                this.isRequired = this.getRules().filter(item=>{return item.required}).length>0||this.required;
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
                let rules = formRules?formRules[this.prop]?formRules[this.prop]:[]:[];
                return [].concat(rules)
            },
            // 获取当前事件规则
            getFilteredRule(type){
                let formRules = this.getRules();
                return formRules.filter(item=>{return !item.trigger||item.trigger.indexOf(type)!==-1})
            },
            // 验证
            validator(type, callback = function () {}){
                console.log('validator')
                let rulesList = this.getFilteredRule(type);
                console.log(rulesList)
                if (rulesList.length===0||!rulesList) {
                    callback();
                    return false
                };
                let descriptor = {
                    [this.prop]: rulesList
                };
                let validator = new AsyncValidator(descriptor);
                validator.validate(
                    {[this.prop]: this.form.model[this.prop]},
                    { firstFields: true },
                    (errors, fields) => {
                        // errors for address.street, address.city, address.zip
                        this.state = errors?'error':'success';
                        this.massage = errors?errors[0].message:'';
                        callback(this.state)
                    });
            },
            // 重置
            reset(){
                this.form.model[this.prop]= deepClone(this.oldValue);
                this.state = 'success';
                this.massage = '';
            }
        },
        mounted(){
            if (this.prop) {
                this.dispatch('PcForm', 'on-form-item-add', this);
                console.log(typeof this.form.model[this.prop])
                console.log(this.form.model[this.prop])
                this.oldValue = deepClone(this.form.model[this.prop]);
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
