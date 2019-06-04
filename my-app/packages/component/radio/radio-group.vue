<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    import {oneOf,findComponentsDownward} from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    const prefixCls = 'pc-radio-group';
    export default {
        name: "PcRadioGroup",
        mixins: [Emitter],
        props:{
            type:{
                type: String
            },
            value:{
                type: [String, Number],
                default: ''
            },
            entity:{
                type:  Boolean,
                default: false
            },
            // 当前按钮的大小
            size: {
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
            name: {
                type: String,
                default(){
                    let time = new Date().getTime();
                    let index = 0;
                    return `pc-${time}-${++index}`
                }
            }
        },
        data(){
            return{
                currentValue: this.value
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-entity`]: !!this.entity,
                    }
                ]
            }
        },
        methods:{
            updateValue(){
                let radioList = findComponentsDownward(this,'PcRadio');
                if (radioList) {
                    radioList.forEach(item=>{
                        item.currentValue = item.label === this.currentValue;
                        item.group = true
                    })
                }
            },
            changeValue(val){
                this.currentValue = val;
                this.updateValue();
                this.$emit('input', val);
                this.$emit('on-change', val);
                this.dispatch('FormItem', 'on-form-change', val);
            }
        },
        watch:{
            value(value){
                let that = this;
                if (value!==this.currentValue) {
                    this.currentValue = value
                    this.$nextTick(_=>{
                       setTimeout(()=>{
                           that.updateValue()
                       },0)
                    });
                }
            }
        },
    }
</script>

<style scoped>

</style>
