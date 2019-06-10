<template>
    <ul v-show="show">
        <li v-if="label" class="pc-select-option-title" @click.stop >{{label}}</li>
        <slot></slot>
    </ul>
</template>

<script>
    import {findComponentsDownward} from '../../utils/assist'
    export default {
        name: "PcOptionGroup",
        props:{
            label: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        data(){
            return{
                show: true
            }
        },
        methods:{
            updateValue(){
                let optionList = findComponentsDownward(this,'PcOption');
                if (optionList.length>0) {
                    let {disabled} = this;
                    optionList.forEach(item=>{
                        if (disabled) {
                            item.disableds = this.disabled;
                        }
                    });
                    this.show = optionList.filter(item=>{ return item.show}).length>0;
                }else {
                    this.show = false
                }
            }
        },
        mounted(){
            this.$on('option-group-value',this.updateValue);
            this.updateValue();
        }
    }
</script>

<style scoped>

</style>
