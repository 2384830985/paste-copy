<template>
    <transition name='pr-alert-fade'>
        <div v-if='close' :class='prAlertType'>
            <span class="pr-alert-icon" v-if='showIcon'>
                <slot name='icon'>
                    <Icon :type='typeIcon(type)' />
                </slot>
            </span>
            <span class='pr-alert-title'>
                <slot name=‘title’>{{title}}</slot>
            </span>
            <span class="pr-alert-desc">
                <solt name='desc'>{{desc}}</solt>
            </span>
            <a class='pr-alert-close' v-if='closable' @click='alertClose'>
                <slot name='close'>
                    <Icon type='close'></Icon>
                </slot>
            </a>
        </div>
    </transition>
</template>

<script>
import Icon from '../icon';

const prefixClass = 'pr-alert';

export default {
    name: 'Alert',
    components: { Icon },
    props: {
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: true
        },
        showIcon: Boolean
    },
    data: {
        close: true
    },
    computed: {
        prAlertType () {
            return `${prefixClass}-type`
        },
        prefixClass (type) {
            return `${prefixClass}-icon-${type}`
        }
    }
}
</script>
