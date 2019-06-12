<template>
    <div class='pc-breadcrumb-wrap'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'PcBreadcrumb',
    props: {
        separator: {
            type: String,
            default: '/'
        }
    },
    provide() {
        return {
            pcBreadcrumb: this.separator
        }
    }
}
</script>

