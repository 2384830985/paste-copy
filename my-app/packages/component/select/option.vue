<template>
    <li :class="optionClass"
        v-show="show"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        @click="handleClick">
        <slot>{{label}}</slot>
        <t-icon type="check" :class="[`${prefixCls}-check`]" v-if="choice&&!$slots.default"></t-icon>
    </li>
</template>

<script>
    const prefixCls = 'AIvu-select';
    import {findComponentUpward} from '../../utils/assist'
    export default {
        name: "TOption",
        props:{
            value:{
                type: [Number,String],
                default: ''
            },
            label:{
                type: [Number,String],
                default: ''
            },
            disabled:{
                type: Boolean,
                default: false
            },
        },
        data(){
            return{
                choice: false,
                prefixCls: prefixCls,
                disableds: this.disabled,
                hover: false,
                show: true,
            }
        },
        computed:{
            optionClass(){
                return[
                    `${prefixCls}-option`,
                    {
                        [`${prefixCls}-choice`]: this.choice,
                        [`${prefixCls}-option-disabled`]: this.disableds,
                        [`${prefixCls}-option-hover`]: this.hover,
                    }
                ]
            },
        },
        methods:{
            handleMouseenter(event){
                if (this.disableds) {
                    return
                }
                this.hover = true;
            },
            handleMouseleave(event){
                if (this.disableds) {
                    return
                }
                this.hover = false;
            },
            handleClick(event){
                if (this.disableds) {
                    return
                }
                const select = findComponentUpward(this,'TSelect');
            // &&(select.currentValue!==this.value)
                if (select) {
                    select.updateValue(this.value)
                }
            }
        },
        watch:{
            disabled(val){
                this.disableds = val
            }
        },
        mounted(){
            // console.log(this.$slots.default)
        }
    }
</script>

<style scoped>

</style>
