<template>
    <transition v-if='!nonfading' name='pc-tag-fade'>
        <div @click.stop='tagClick' :style='pcTagColor' :class='pcTagWrap'>
            <span class='pc-tag-name'>
                <slot></slot>
            </span>
            <Icon @click.native.stop='tagClose' v-if='closable' class='pc-tag-icon' type='close'/>
        </div>
    </transition>
    <div v-else class='pc-tag-wrap'>
        <span class='pc-tag-name'>
            <slot></slot>
        </span>
        <Icon @click.native.stop='tagClose' v-if='closable' type='close'/>
    </div>
</template>

<script>
import Icon from '../icon';

let prefixCls = 'pc-tag-'

export default {
    name: 'PcTag',
    components: { Icon },
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        color: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        nonfading: Boolean,
        hollow: Boolean,
        closable: Boolean
    },

    computed: {
        pcTagWrap () {
            return ['pc-tag-wrap', `${prefixCls}${this.type}`, this.size ? `${prefixCls}${this.size}` : '']
        },
        pcTagColor () {
            return {
                'color': !this.hollow && this.color ? '#fff' : this.color,
                'background': this.hollow ? 'none' : this.color,
                'border': this.color ? `1px solid ${this.color}` : ''
            }
        }
    },

    methods: {
        tagClose (e) {
            this.$emit('onClose', e);
        },
        tagClick (e) {
            this.$emit('onClick', e);
        }
    }
}
</script>



