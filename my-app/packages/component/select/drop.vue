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
                styles: {},
                popperStatus: false,
            }
        },
        methods:{
            update () {
                if (this.popper) {
                    this.$nextTick(() => {
                        this.popper.update();
                        this.popperStatus = true;
                    });
                } else {
                    this.$nextTick(() => {
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
                                this.$nextTick(this.popper.update());
                            },
                            onUpdate:()=>{
                                // this.resetTransformOrigin();
                            }
                        });
                    });
                }
            },
            destroy () {
                if (this.popper) {
                    setTimeout(() => {
                        if (this.popper && !this.popperStatus) {
                            this.popper.destroy();
                            this.popper = null;
                        }
                        this.popperStatus = false;
                    }, 300);
                }
            },
        },
        mounted(){
            console.log()
            this.styles = {
                width: this.$options.parent.$el.getBoundingClientRect().width+'px'
            }
        },
        created () {
            this.$on('on-update-popper', this.update);
            this.$on('on-destroy-popper', this.destroy);
        },
        beforeDestroy () {
            if (this.popper) {
                this.popper.destroy();
            }
        }
    }
</script>

<style scoped>

</style>
