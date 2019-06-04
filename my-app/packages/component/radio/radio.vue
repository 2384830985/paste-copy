<template>
    <label :class="wrapperClass">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input type="radio"
                   @focus="onFocus"
                   @change="onChange"
                   @blur="onBlur"
                   :checked="currentValue"
                   :name="groupName"
                   :disabled="disabled"
                   :class="inputClasses"/>
        </span>
        <slot>{{label}}</slot>
    </label>
</template>

<script>
    import borderAnimation from '../../mixins/borderAnimation';
    import Emitter from '../../mixins/emitter'
    import {oneOf,findComponentUpward} from "../../utils/assist";
    const prefixCls = 'pc-radio';
    export default {
        name: "PcRadio",
        mixins: [borderAnimation,Emitter],
        props:{
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            label:{
                type: [String, Number],
                default: ''
            },
            size: {
                type: String,
                validator(value){
                    return oneOf(value,['small', 'large', 'default'])
                },
                // 添加默认的按钮大小
                // this.$PASTE.size 如果有默认注入的按钮大小那么就用默认的
                default(){
                    return !this.$PASTE || this.$PASTE.size === '' ? 'default' : this.$PASTE.size;
                },
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
            inputClasses(){
                return `${prefixCls}-input`
            },
            innerClasses(){
                return [
                    `${prefixCls}-inner`,
                    {
                        [`${prefixCls}-focus`]: this.focusInner,
                        [`pc-btn-default-animation`]: this.animation,
                    }
                ]
            },
            radioClasses(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-choice`]: this.currentValue,
                        [`${prefixCls}-disabled`]: !!this.disabled,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                    }
                ]
            },
            wrapperClass(){
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-choice`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: !!this.disabled,
                        [`${prefixCls}-wrapper-focus`]: this.focusInner,
                    }
                ]
            }
        },
        data(){
            return{
                currentValue: this.value,
                focusWrapper: false,
                focusInner: false,
                groupName: this.name,
                group: false,
                superior: findComponentUpward(this,'PcRadioGroup')
            }
        },
        methods:{
            onFocus(){
                this.focusInner = true;
                this.focusWrapper = true;
            },
            onChange(event){
                if (this.disabled) {
                    return false;
                }
                this.btnAnimation();
                let value = event.target.checked;
                this.currentValue = value;
                this.$emit('input', value?this.trueValue:this.falseValue);
                if (this.group) {
                    if (this.label) {
                        this.superior.changeValue(this.label)
                    }
                }else {
                    this.$emit('on-change', value);
                    this.dispatch('FormItem', 'on-form-change', value);
                }
            },
            onBlur(){
                this.focusInner = false
            },
            updateValue(){
                this.currentValue = this.value === this.trueValue
            },
        },
        mounted(){
            if (this.superior) {
                this.group = true;
                if (this.name&&this.superior.name!==this.name) {
                    console.log('当前radio的name 和 group的name不统一')
                }else {
                    this.groupName = this.superior.name;
                }
            }

            if (this.group) {
                this.superior.updateValue()
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
