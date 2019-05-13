<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
    const prefixCls = 'avi';
    export default {
        name: "t-icon",
        props: {
            type: {
                type: String,
            },
            custom: {
                type: String,
                default: ''
            },
            size: {
                type: [String,Number]
            },
            color: {
                type: [String,Number]
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: this.type !== '',
                        [`${this.custom}`]: this.custom,
                    }
                ]
            },
            styles(){
                let style = {};
                if (this.size) {
                    style['font-size'] = this.size+'px'
                }
                if (this.color) {
                    style['color'] = this.color
                }
                return style
            },
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    }
</script>

<style scoped>
    .avi{
        vertical-align: middle;
        line-height: 1.5;
    }
</style>
