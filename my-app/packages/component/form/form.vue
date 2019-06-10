<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = 'pc-form';
    export default {
        name: "PcForm",
        props: {
            model: {
                type: Object,
                default: ()=>{
                    return {}
                }
            },
            rules:{
                type: Object,
            },
            labelWidth:{
                type: Number|String,
                default:''
            },
            inline: {
                type: Boolean,
                default: false
            },
            labelPosition: {
                type: String
            },
            labelStyle:{
                type: Object,
                default: ()=>{
                    return {}
                }
            }
        },
        provide(){
            return{
                form: this
            }
        },
        data(){
            return{
                itemList: [],
                prefixCls: prefixCls
            }
        },
        methods:{
            validator(callback = function(){}){
                return new Promise((resolve, reject) => {
                    let valid = true;
                    let count = 0;
                    this.itemList.forEach(item=>{
                        item.validator('',error=>{
                            if (error==='error') {
                                valid = false
                            }
                            if (++count === this.itemList.length) {
                                resolve(valid);
                                if (typeof callback === 'function') {
                                    callback(valid)
                                }
                            }
                        })
                    })
                })
            },
            reset(){
                this.itemList.forEach(item=>{
                    item.reset()
                })
            }
        },
        created(){
            this.$on('on-form-item-add',item=>{
                if (item) this.itemList.push(item);
                return false
            });
            this.$on('on-form-item-remove',item=>{
                if (item.prop) this.itemList.splice(this.itemList.indexOf(item),1);
                return false
            })
        },
        watch:{
        }
    }
</script>

<style scoped>

</style>
