<template>
    <div style="margin: 20px">
        <pc-upload :fileList="fileList" @uploadClose="uploadClose">
            <pc-button  icon="cloud-upload">123</pc-button>
        </pc-upload>
    </div>
</template>

<script>
    export default {
        name: "upload",
        data(){
            return{
                fileList: [
                    {
                        name: 'food.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    },
                    {
                        name: 'food2.jpeg',
                        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                    }
                ]
            }
        },
        methods:{
            // 删除
            uploadClose(item,index,fileList){
                console.log(item)
                console.log(index)
                fileList.splice(index,1)
                console.log(fileList)
            },
        }
    }
</script>

<style scoped>

</style>
