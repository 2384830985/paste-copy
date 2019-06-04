<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    import {findComponentDownward,findBrothersComponents,oneOf} from '../../utils/assist'
    const prefixCls = 'pc-row';
    export default {
        name: "PcRow",
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
                let col = findComponentDownward(this,'PcCol');
                let colList = findBrothersComponents(col,'PcCol',false);
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
