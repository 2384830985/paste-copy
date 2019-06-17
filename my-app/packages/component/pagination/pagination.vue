<template>
    
</template>

<script>
export default {
    name: 'PcPagination',

    props: {
        total: {
            type: Number,
            default: 0
        },
        current: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 0
        },
        simple: Boolean,
        small: Boolean,
    }
}
</script>
