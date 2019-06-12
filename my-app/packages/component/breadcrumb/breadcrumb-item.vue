<template>
    <span class='pc-breadcrum-item'>
        <span :class='["pc-breadcrum-name", to ? "islink" : ""]' @click='linkClick'>
            <slot></slot>
        </span>
        <span class='pc-breadcrum-separator'>{{separator}}</span>
    </span>
</template>

<script>
export default {
    name: 'PcBreadcrumbItem',
    props: {
        to: {
            type: [Object, String]
        },
        replace: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            separator: ''
        }
    },

    inject: ['pcBreadcrumb'],

    mounted () {
        this.separator = this.pcBreadcrumb;
    },
    
    methods: {
        linkClick () {
            this.$nextTick(() => {
                this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
            })
        }
    }
}
</script>

