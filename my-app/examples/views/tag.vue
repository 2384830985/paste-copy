<template>
    <div class='demo-tag' :style='{"margin": "20px"}'>
        <pc-tag closable>标签一</pc-tag>
        <pc-tag closable size='medium'>标签一</pc-tag>
        <pc-tag closable size='small'>标签一</pc-tag>
        <pc-tag closable size='mini'>标签一</pc-tag>
        <pc-tag closable @onClick='testClick' @onClose='testClose'>test</pc-tag>
    </div>
</template>

<script>
export default {
    methods: {
        testClick () {
            alert('click')
        },
        testClose () {
            alert('close')
        }
    }
}
</script>

<style lang="less">
    .demo-tag {
        .pc-tag-wrap {
            margin-left: 10px;
        }
    }
</style>


