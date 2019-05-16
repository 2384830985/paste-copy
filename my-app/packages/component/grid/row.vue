<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    import {findComponentDownward,findBrothersComponents,oneOf} from '../../utils/assist'
    const prefixCls = 'AIvu-row';
    export default {
        name: "t-row",
        props: {
            gutter:{
                type: Number,
                default: 0
            },
            type: {
                validator (value) {
                    return oneOf(value, ['flex']);
                }
            },
            justify:{
                validator(val){
                    return oneOf(val,['start', 'end', 'center', 'space-around', 'space-between'])
                }
            },
            align:{
                validator(val){
                    return oneOf(val, ['top', 'middle', 'bottom'])
                }
            },
            className: String
        },
        computed:{
            classes(){
                return [
                    {
                        [`${prefixCls}`]: !this.type,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
                        [`${prefixCls}-${this.type}-${this.align}`]: !!this.align,
                        [`${this.className}`]: !!this.className,
                    }
                ]
            },
            styles(){
                let style = {};
                if (this.gutter) {
                    style = {
                        marginLeft: this.gutter/-2 + 'px',
                        marginRight: this.gutter/-2 + 'px',
                    }
                }
                return style
            }
        },
        methods:{
            /**
             * gutter 对col 的赋值
             * @param val
             */
            updateGutter(val){
                let col = findComponentDownward(this,'t-col');
                let colList = findBrothersComponents(col,'t-col',false);
                if (colList.length>0) {
                    colList.forEach(item=>{
                        item.gutter = val
                    })
                }
            }
        },
        watch: {
            gutter (to) {
                this.updateGutter(to);
            }
        }
    }
</script>

<style scoped>

</style>
