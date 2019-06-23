<template>
    <div>
        <div style="margin: 20px">
            <pc-button @click="xxx">123</pc-button>
            <div style="width: 500px;height: 500px;background: #2d8cf0;"
                 pc-loading-text="黄全站text"
                 pc-loading-class="黄全站class"
                 pc-loading-background="rgba(0, 0, 0, 0.8)"
                 v-loading="loading"
            >54654576654756sdfafdshjfkfsdjk</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loading",
        data(){
            return{
                loading: true
            }
        },
        methods:{
            xxx(){
                this.loading = !this.loading
            }
        }
    }
</script>

<style scoped>

</style>
