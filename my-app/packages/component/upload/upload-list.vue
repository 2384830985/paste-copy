<template>
    <div>
        <ul :class="uploadListClass">
            <li :class="fliesClass">123
                <div :class="`${prefixCls}-progress`">
                    <div :class="`${prefixCls}-line`" :style="{'width': lineWidth +'%'}"></div>
                    <div :class="`${prefixCls}-percentage`">0%</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    const prefixCls = 'pc-upload';
    export default {
        name: "upload-list",
        data(){
            return{
                prefixCls: prefixCls,
                lineWidth: 0
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
        mounted(){
            var test2 =setInterval(()=>{
                this.lineWidth += 20;
                if (this.lineWidth>=100) {
                    clearInterval(test2);
                }
            },200)
        }
    }
</script>

<style scoped>

</style>
