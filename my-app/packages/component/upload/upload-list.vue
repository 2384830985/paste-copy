<template>
    <div>
        <ul :class="uploadListClass">
            <li :class="fliesClass"
                v-for="(item,index) in fileList"
                :key="index"
                @mouseenter="enter(index)"
                @mouseleave="leave">
                <span>{{item.name}}</span>
                <pc-icon v-if="indexs!==index+1" class="upload-icon" type="check-circle-fill"></pc-icon>
                <pc-icon v-else class="upload-icon" type="close-circle-fill" @click="uploadClose(item,index)"></pc-icon>
            </li>
        </ul>
        <div :class="`${prefixCls}-progress`" v-if="percent.show">
            <div :class="`${prefixCls}-line`" :style="{'width': percent.percent +'%'}"></div>
            <div :class="`${prefixCls}-percentage`">{{percent.percent}}%</div>
        </div>
    </div>
</template>

<script>
    const prefixCls = 'pc-upload';
    export default {
        name: "upload-list",
        props:{
            percent:{
                type: Object,
                default: ()=>{
                    return {}
                }
            },
            fileList:{
                type: Array,
                default: ()=>{
                    return []
                }
            }
        },
        data(){
            return{
                prefixCls: prefixCls,
                lineWidth: 0,
                indexs: -1
            }
        },
        computed:{
            uploadListClass(){
                return [
                    `${prefixCls}-list`
                ]
            },
            fliesClass(){
                return [
                    `${prefixCls}-list-flies`
                ]
            },
        },
        methods:{
            enter(index){
                this.indexs = index + 1;
            },
            leave(event){
                this.indexs = -1;
            },
            uploadClose(item,index){
                this.$emit('uploadClose',item,index)
            }
        },
        watch:{

        },
        mounted(){
            // this.changeProgress()
        }
    }
</script>

<style scoped>

</style>
