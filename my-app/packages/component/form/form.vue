<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
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
            }
        },
        provide(){
            return{
                form: this
            }
        },
        data(){
            return{
                itemList: []
            }
        },
        mounted(){
            this.$on('on-form-item-add',item=>{
                if (item) this.itemList.push(item);
                return false
            });
            this.$on('on-form-item-remove',item=>{
                if (item.prop) this.itemList.splice(this.itemList.indexOf(item),1);
                return false
            })
        }
    }
</script>

<style scoped>

</style>
