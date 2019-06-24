<template>
    <div>
        <div style="margin: 20px">
            <pc-button @click="xxxx">全局</pc-button>
            <pc-button @click="xxx">底下</pc-button>
            <div style="width: 500px;height: 500px;background: #2d8cf0"
                 pc-loading-text="黄全站text"
                 pc-loading-class="黄全站class"
                 pc-loading-background="rgba(0, 0, 0, 0.8)"
                 pc-loading-spinner="loading3"
                 v-loading="loading"
            >54654576654756sdfafdshjfkfsdjk</div>
            <!--v-loading.fullscreen.lock="loading"-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "loading",
        data(){
            return{
                loading: false
            }
        },
        methods:{
            xxxx(){
                const loading = this.$Loading({
                    lock: true,
                    text: 'Loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 2000);
                // this.loading = !this.loading
            },
            xxx(){
                this.loading = !this.loading
            }
        }
    }
</script>

<style scoped>

</style>
