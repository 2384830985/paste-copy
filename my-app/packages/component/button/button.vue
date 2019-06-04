<template>
    <component :is="tagName" :class="classes" v-bind="tagProps"
               @click="handleClickLink" :disabled="disabled"
               v-no-more-click="noMoreClickTime"
    >
        <pc-icon :type="loadingType" :size="iconSize" class="pc-icon-loading" v-if="loading"></pc-icon>
        <pc-icon :type="icon" :size="iconSize" :customIcon="customIcon" v-if="(icon||customIcon)&&!loading"></pc-icon>
        <span v-if="showSlot" ><slot ref="slot"></slot></span>
    </component>
</template>
<script>
    import {oneOf} from '../../utils/assist';
    import mixinsLink from '../../mixins/link';
    import borderAnimation from '../../mixins/borderAnimation'
    const prefixCls = 'pc-btn';

    export default {
        name: 'PcButton',
        mixins: [mixinsLink,borderAnimation],
        directives:{
            noMoreClick:{
                inserted(el, binding) {
                    if (binding.value!==0) {
                        el.addEventListener('click', () => {
                            el.classList.add('is-disabled');
                            el.disabled = true;
                            setTimeout(() => {
                                el.disabled = false;
                                el.classList.remove('is-disabled');
                            }, binding.value|200)
                        })
                    }
                }
            }
        },
        props: {
            // 当前按钮类型
            type: {
                validator (value) {
                    return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'error']);
                },
                default: 'default'
            },
            // 加载项
            loading: {
                type: Boolean,
                default: false
            },
            // Loading 样式
            loadingType: {
                type: String,
                default(){
                    return 'loading2'
                }
            },
            // icon 的新增class
            customIcon: String,
            // 当前点击间隔时间
            noMoreClickTime: {
                type: Number,
                default: 0
            },
            // icon
            icon: String,
            // 是否可选
            disabled: Boolean,
            // 属性样式
            plain: Boolean,
            // 是否100%
            long: Boolean,
            // 是否虚线
            dashed: Boolean,
            // 是否圆形
            circle: Boolean,
            // 是否是文本
            text: Boolean,
            // 是否幽灵模式
            ghost: Boolean,
            // 当前按钮的大小
            size: {
                type: String,
                validator(value){
                    return oneOf(value,['small', 'large', 'default'])
                },
                // 添加默认的按钮大小
                // this.$PASTE.size 如果有默认注入的按钮大小那么就用默认的
                default(){
                    return !this.$PASTE || this.$PASTE.size === '' ? 'default' : this.$PASTE.size;
                },
            },
            // 默认的button 的值
            htmlButton:{
                type: String,
                validator(value){
                    return oneOf(value, ['button', 'submit', 'reset']);
                },
                default: 'button'
            },

        },
        data(){
            return{
                showSlot: false
            }
        },
        computed: {
            iconSize(){
                let size = 12;
                this.size==='large'? size = 14
                    :this.size==='default'? size = 12
                    :this.size==='small'? size = 12:'';
                return size
            },
            classes(){
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-${this.size}`]: this.size !== 'default',
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.type}-animation`]: this.animation,
                        [`${prefixCls}-${this.type}-plain`]: this.plain,
                        [`${prefixCls}-dashed`]: this.dashed,
                        [`${prefixCls}-ghost`]: this.ghost,
                        [`${prefixCls}-${this.type}-text`]: this.text,
                        [`${prefixCls}-${this.type}-text-disabled`]: this.text&&this.disabled,
                        [`${prefixCls}-${this.size}-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
                        [`${prefixCls}-${this.size}-circle`]: this.circle,
                        [`${prefixCls}-${this.type}-disabled`]: this.disabled&&!this.plain&&!this.text,
                        [`${prefixCls}-${this.type}-disabled-${this.type}`]: this.disabled&&this.plain&&!this.text,
                    }
                ]
            },
            // Point out if it should render as <a> tag
            // !! 等同于 !=null !=undefined !=''
            isHrefPattern() {
                const {to} = this;
                return !!to;
            },
            // 当前标签的名称 如果没有跳转的路径的时候那么就肯定是button
            tagName() {
                const {isHrefPattern} = this;
                return isHrefPattern ? 'a' : 'button';
            },
            tagProps(){
                const {isHrefPattern} = this;
                // 当前按钮是a标签的时候
                // 添加 href 调整路径 target 跳转方式
                if (isHrefPattern) {
                    const {linkUrl,target} = this;
                    return {href:linkUrl,target}
                }else {
                    // 当前是按钮的时候添加 type
                    const {htmlButton} = this;
                    return { type: htmlButton }
                }
            },
        },
        methods:{
            handleClickLink(event){
                let that =this;
                that.$emit('click',event);
                if (!that.text) {
                    that.btnAnimation();
                }
                const openInNewWindow = event.ctrlKey || event.metaKey;
                this.handleCheckClick(event, openInNewWindow);
            },

        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    }
</script>
