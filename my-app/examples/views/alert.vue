<template>
    <div>
        <div :style='{width:"30%"}'>
            <pc-alert title='这是标题' desc='这是内容'></pc-alert>
        </div>
        <div :style='{width:"30%"}'>
            <pc-alert type='success' desc='这是内容'></pc-alert>
        </div>
        <div :style='{width:"30%"}'>
            <pc-alert :show-icon='false' type='error' title='这是标题' desc='这是内容'></pc-alert>
        </div>
        <div :style='{width:"30%"}'>
            <pc-alert :closable='true' type='warning' title='这是标题' desc='这是内容'></pc-alert>
        </div>
        <div :style='{width:"30%"}'>
            <pc-alert closable :show-icon='false' desc='这是内容'>
                <span slot='close'>关闭</span>
            </pc-alert>
        </div>
        <div :style='{width:"30%"}'>
            <pc-alert @onClose='close' closable :show-icon='false' desc='这是内容'></pc-alert>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        close () {
            alert(1111)
        }
    }
}
</script>
