<template>
    
</template>

<script>
export default {
    name: 'Options',

    props: {
        layout: {
            type: String,
            default: 'prev, pager, next, jumper, ->, total'
        },
        pageSizeOpts: {
            type: Array,
            default: [10, 20, 30, 40]
        },
        
    }
}
</script>
