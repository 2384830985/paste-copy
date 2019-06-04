<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    import {findComponentUpward} from '../../utils/assist'
    const prefixCls = 'pc-col';
    export default {
        name: "PcCol",
        props:{
            span: [String,Number],
            push: [String,Number],
            pull: [String,Number],
            offset: [String,Number],
            order: [String,Number],
            className: String,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object],
            xl: [Number, Object],
            xxl: [Number, Object]
        },
        data(){
            return{
                gutter: 0
            }
        },
        computed:{
            classes(){
                let classList = [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-span-${this.span}`]: this.span,
                        [`${prefixCls}-push-${this.push}`]: this.push,
                        [`${prefixCls}-pull-${this.pull}`]: this.pull,
                        [`${prefixCls}-offset-${this.offset}`]: this.offset,
                        [`${prefixCls}-order-${this.order}`]: this.order,
                        [`${prefixCls}-order-${this.order}`]: this.order,
                        [`${this.className}`]: !!this.className
                    },
                ];
                ['xs','sm','md','lg','xl','xxl'].forEach(item=>{
                    if (typeof this[item] === 'number') {
                        classList.push(`${prefixCls}-span-${item}-${this[item]}`)
                    }else if (typeof this[item] === 'object') {
                        Object.keys(this[item]).forEach(items=>{
                            classList.push(
                                items==='span'
                                    ?`${prefixCls}-span-${item}-${this[item][items]}`
                                    :`${prefixCls}-${item}-${items}-${this[item][items]}`
                            )
                        })
                    }
                });
                return classList
            },
            styles(){
                let style = {};
                if (this.gutter) {
                    style = {
                        paddingLeft: this.gutter / 2 + 'px',
                        paddingRight: this.gutter / 2 + 'px'
                    };
                }
                return style
            }
        },
        methods: {
            updateGutter () {
                const Row = findComponentUpward(this, 'PcRow');
                if (Row) {
                    Row.updateGutter(Row.gutter);
                }
            }
        },
        mounted(){
            this.updateGutter();
        },
        beforeDestroy(){
            this.updateGutter();
        }
    }
</script>

<style scoped>

</style>
