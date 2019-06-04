<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = 'pc-checkbox-group';
    import {oneOf,findComponentsDownward} from "../../utils/assist";
    import Emitter from '../../mixins/emitter'
    export default {
        name: "PcCheckboxGroup",
        mixins: [Emitter],
        props:{
            type: {
                type: String,
                default: ''
            },
            entity:{
                type:  Boolean,
                default: false
            },
            value:{
                type: Array,
                default:()=>{
                    return []
                }
            },
            size:{
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
        },
        data(){
            return{
                currentValue: this.value,
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-entity`]: !!this.entity,
                        [`${prefixCls}-${this.type}-${this.size}`]: !!this.size&&!!this.type,
                    }
                ]
            },
        },
        methods:{
            updateValue(){
                let checkBoxList = findComponentsDownward(this,'PcCheckbox');
                if (checkBoxList) {
                    const { currentValue } = this;
                    checkBoxList.forEach(item=>{
                        if (currentValue.indexOf(item.label)!==-1) {
                            item.currentValue = true;
                        }
                    })
                }
            },
            onchange(val){
                if (val.value) {
                    this.currentValue.push(val.label)
                }else {
                    this.currentValue = this.currentValue.filter(function (item) {
                        return item!==val.label
                    })
                }
                this.$emit('on-change',this.currentValue);
                this.$emit('input', this.currentValue);
                this.dispatch('FormItem', 'on-form-change', this.currentValue);
            }
        },
        watch:{
            value(to){
                this.updateValue()
            }
        }

    }
</script>

<style scoped>

</style>
