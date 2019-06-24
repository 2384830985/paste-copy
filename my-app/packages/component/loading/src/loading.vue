<template>
    <div :class="`${prefixClass}-${customClass} ${addClasses} pc-loading-fixed`"
         :style="{'background': background}"
    >
        <div :class="`${prefixClass}-frame pc-turn-loading` " v-if="spinner===''">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div v-else>
            <pc-icon :type="spinner" :class="`${prefixClass}-spinner pc-turn-loading` "></pc-icon>
        </div>
        <p v-if="spinner===''&&text" :class="`${prefixClass}-text`">{{text}}</p>
        <p v-else :class="`${prefixClass}-text ${prefixClass}-text-spinner`">{{text}}</p>
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
                spinner: '',
                text: null,
            }
        }
    }
</script>

<style scoped>

</style>
