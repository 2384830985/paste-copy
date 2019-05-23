<template>
    <label :class="wrapperClass">
        <span :class="checkBoxClasses">
            <span :class="innerClasses"></span>
            <input :class="inputClasses"
                   :checked="currentValue"
                   @blur="onBlur"
                   @focus="onFocus"
                   @change="onChange"
                   :name="name"
                   type="checkbox"
            />
        </span>
        <span><slot>{{label}}</slot></span>
    </label>
</template>

<script>
    const prefixCls = 'AIvu-checkbox';
    import {oneOf,findComponentUpward} from "../../utils/assist";
    import borderAnimation from "../../mixins/borderAnimation";
    import Emitter from '../../mixins/emitter'
    export default {
        name: "TCheckbox",
        mixins:[Emitter,borderAnimation],
        props:{
            label:{
                type: String|Number
            },
            indeterminate:{
                type: Boolean,
                default: false
            },
            size:{
                type: String,
                validator(value){
                    return oneOf(value,['small', 'large', 'default'])
                },
                // 添加默认的按钮大小
                // this.$AVIEW.size 如果有默认注入的按钮大小那么就用默认的
                default(){
                    return !this.$AVIEW || this.$AVIEW.size === '' ? 'default' : this.$AVIEW.size;
                },
            },
            value:{
                type: [String, Number, Boolean],
                default: false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
        },
        computed:{
            wrapperClass(){
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-choice`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: !!this.disabled,
                        [`${prefixCls}-wrapper-focus`]: this.currentValue&&this.focusInner,
                    }
                ]
            },
            inputClasses(){
                return `${prefixCls}-input`
            },
            checkBoxClasses(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-choice`]:this.currentValue,
                        [`${prefixCls}-disabled`]:!!this.disabled,
                        [`${prefixCls}-indeterminate`]:!!this.indeterminate,
                        [`${prefixCls}-${this.size}`]:!!this.size,
                    }
                ]
            },
            innerClasses(){
                return [
                    `${prefixCls}-inner`,
                    {
                        [`${prefixCls}-focus`]: this.focusInner,
                        [`AIvu-btn-default-animation`]: this.animation,
                    }
                ]
            },
        },
        data(){
            return{
                currentValue: this.value,
                focusInner: false,
                group: false,
                checkBoxGroup: findComponentUpward(this,'TCheckboxGroup')
            }
        },
        methods:{
            updateValue(){
                this.currentValue = this.value === this.trueValue
            },
            onChange(event){
                if (this.disabled) {
                    return
                }
                let value = event.target.checked;
                if (value) {
                    this.btnAnimation();
                }
                this.currentValue = value;
                this.$emit('on-change',value);
                if (this.group) {
                    this.checkBoxGroup.onchange({
                        label: this.label,
                        value: value,
                    })
                }else {
                    this.$emit('input', value?this.trueValue:this.falseValue);
                    this.dispatch('FormItem', 'on-form-change', value);
                }
            },
            onFocus(){
                this.focusInner = true
            },
            onBlur(){
                this.focusInner = false
            },
        },
        mounted(){
            if (this.checkBoxGroup) {
                this.group = true;
            }
            if (this.group) {
                this.checkBoxGroup.updateValue()
            }else {
                this.updateValue()
            }
        },
        watch:{
            value(to){
                if (to===this.trueValue||to===this.falseValue) {
                    this.updateValue()
                } else {
                    throw 'Value should be trueValue or falseValue.';
                }
            }
        }
    }
</script>

<style scoped>

</style>
