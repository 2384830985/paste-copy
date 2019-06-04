<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    import {oneOf} from '../../utils/assist';
    const prefixCls = 'pc-btn-group';
    export default {
        name: "PcButtonGroup",
        props: {
            // 当前按钮的大小
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
            circle: {
                type: Boolean,
                default: false
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.size}-circle`]: !!this.circle,
                    }
                ]
            }
        },
        mounted(){
        }
    }
</script>

<style scoped>

</style>
