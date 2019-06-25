<template>
    <div>
        <div @click="seeUpload">
            <input type="file"
                   @change="handleChange"
                   ref="input">
            <slot></slot>
        </div>
        <slot name="tip"></slot>
        <upload-list></upload-list>
    </div>
</template>

<script>
    import ajax from './ajax'
    import UploadList from "./upload-list";
    export default {
        name: "PcUpload",
        components: {UploadList},
        props: {
            action: {
                type: String,
                default: ''
            },
            onPreview:{
                type: Function,
                default: ()=>{
                    return {}
                }
            },
            onSuccess:{
                type: Function,
                default: ()=>{
                    return {}
                }
            },
            onProgress:{
                type: Function,
                default: ()=>{
                    return {}
                }
            },
            beforeUpload:{
                type: Function,
            },
            onError:{
                type: Function,
                default: ()=>{
                    return {}
                }
            },
            onRemove:{
                type: Function,
                default: ()=>{
                    return {}
                }
            },
            beforeRemove:{
                type: Function,
                default: ()=>{
                    return {}
                }
            },
            multiple:{
                type: Boolean,
                default: false
            },
            disabled:{
                type: Boolean,
                default: false
            },
            limit:{
                type: Number,
            },
            onExceed:{
                type: Function,
                default: ()=>{
                    return {}
                }
            },
            fileList:{
                type: Array,
                default: function () {
                    return []
                }
            },
            accept: {
                type: String
            },
        },
        methods:{
            seeUpload(){
                if (this.disabled) return;
                let {input} = this.$refs;
                input.click()
            },
            handleChange(event){
                if (!event.target.files) return;
                this.uploadFiles(event.target.files);
                this.$refs.input.value = null;
            },
            uploadFiles (files) {
                let postFiles = Array.prototype.slice.call(files);
                if (!this.multiple) postFiles = postFiles.slice(0, 1);

                if (postFiles.length === 0) return;

                postFiles.forEach(file => {
                    this.upload(file);
                });
            },
            upload (file) {
                if (!this.beforeUpload) {
                    return this.post(file);
                }
                const before = this.beforeUpload(file);
                if (before && before.then) {
                    before.then(processedFile => {
                        if (Object.prototype.toString.call(processedFile) === '[object File]') {
                            this.post(processedFile);
                        } else {
                            this.post(file);
                        }
                    }, () => {
                        // this.$emit('cancel', file);
                    });
                } else if (before !== false) {
                    this.post(file);
                } else {
                    // this.$emit('cancel', file);
                }
            },
            post(file){
                ajax({
                    data: {
                        file: file,
                    },
                    action: "https://jsonplaceholder.typicode.com/posts/",
                    onSuccess: (res)=>{
                        this.onSuccess(res,file)
                        console.log(res)
                    },
                    onError: (e)=>{
                        this.onError(e)
                        console.log(e)
                    },
                    onProgress: e => {
                        console.log(e)
                        this.handleProgress(e, file);
                    },
                })
            },
            handleProgress(e, file){
                this.onProgress(e, file, this.fileList);
            }
        }
    }
</script>

<style scoped>

</style>
