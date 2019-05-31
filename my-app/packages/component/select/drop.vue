<template>
    <div class="AIvu-select-drop" :style="styles">
        <slot></slot>
        <ul class="AIvu-select-ul AIvu-select-noData" v-if="showData">暂无匹配数据</ul>
    </div>
</template>

<script>
    const Popper = require('popper.js/dist/umd/popper.js');
    export default {
        name: "drop",
        props: {
            placement: {
                type: String,
                default: 'bottom-start'
            },
            showData:{
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                popper: null,
                styles: {}
            }
        },
        mounted(){
            console.log()
            this.styles = {
                width: this.$options.parent.$el.getBoundingClientRect().width+'px'
            }
            this.$nextTick(() => {
                // console.log(this.$parent.$refs)
                // console.log(this.$parent.$refs.reference.getBoundingClientRect())
                // console.log(this.$parent.$refs.reference.clientWidth)
                this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
                    placement: this.placement,
                    modifiers: {
                        computeStyle:{
                            gpuAcceleration: false
                        },
                        preventOverflow :{
                            boundariesElement: 'window'
                        }
                    },
                    onCreate:()=>{
                        // this.resetTransformOrigin();
                        // this.$nextTick(this.popper.update());
                    },
                    onUpdate:()=>{
                        // this.resetTransformOrigin();
                    }
                });
            });
        }
    }
</script>

<style scoped>

</style>
