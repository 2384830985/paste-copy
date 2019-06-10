<template>
    <transition name='pc-alert-fade'>
        <div v-if='close' :class='pcAlertType'>
            <span class="pc-alert-icon" v-if='showIcon'>
                <slot name='icon'>
                    <Icon :class="iconClass" :type='typeIcon' />
                </slot>
            </span>
            <div class='pc-alert-content'>
                <p class='pc-alert-title'>
                    <slot name=‘title’>{{title}}</slot>
                </p>
                <p class="pc-alert-desc">
                    <slot name='desc'>{{desc}}</slot>
                </p>
            </div>
            <a class='pc-alert-close' v-if='closable' @click='alertClose'>
                <slot name='close'>
                    <Icon type='close'></Icon>
                </slot>
            </a>
        </div>
    </transition>
</template>

<script>
import Icon from '../icon';

const prefixClass = 'pc-alert';

export default {
    name: 'PcAlert',
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
            default: false
        },
        showIcon: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            close: true
        }
    },
    computed: {
        pcAlertType () {
            return ['pc-alert-wrap', `${prefixClass}-${this.type}`]
        },
        prefixClass (type) {
            return `${prefixClass}-icon-${type}`
        },
        iconClass () {
            if (this.title) {
                return [
                    'bigIcon',
                    `pc-icon-${this.type}`
                ]
            } else {
                return `pc-icon-${this.type}`
            }
        },
        typeIcon () {
            let type = '';

            switch (this.type) {
                case 'success':
                    type = 'check-circle-fill';
                    break;
                case 'warning':
                    type = 'warning-circle-fill';
                    break;
                case 'info':
                    type = 'info-circle-fill';
                    break;
                case 'error':
                    type = 'close-circle-fill';
                    break;
                default:
                    type = 'info-circle-fill';
                    break;
            }

            return type;
        }
    },
    methods: {
        alertClose (e) {
            this.close = false;
            this.$emit('onClose', e);
        }
    }
}
</script>
