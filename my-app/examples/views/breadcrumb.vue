<template>
    <div style='margin:20px;'>
        <pc-breadcrumb>
            <pc-breadcrumb-item to='/alert'>11111</pc-breadcrumb-item>
            <pc-breadcrumb-item>222222</pc-breadcrumb-item>
            <pc-breadcrumb-item :to='{path: "/breadcrumb"}'>333333</pc-breadcrumb-item>
        </pc-breadcrumb>
    </div>
</template>
<script>
export default {
    
}
</script>
