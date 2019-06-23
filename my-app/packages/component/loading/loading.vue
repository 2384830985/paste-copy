<template>
    <div :class="`${prefixClass}-${customClass} ${addClasses}`"
         :style="{'background': background}"
    >
        <div :class="`${prefixClass}-frame pc-icon-loading` ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p v-if="text" :class="`${prefixClass}-text`">{{text}}</p>
    </div>
</template>

<script>
    const prefixClass = 'pc-loading';
    export default {
        name: "PcLoading",
        data(){
            return{
                prefixClass: prefixClass,
                customClass: '',
                addClasses: '',
                background: '',
                text: null,
            }
        }
    }
</script>

<style scoped>

</style>
