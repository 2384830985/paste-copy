<template>
    <div :class="wrapperClass">
        <template v-if="type!=='textarea'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" @click="onPrepend">
                <slot name="prepend"></slot>
            </div>
            <div :class="[prefixCls + '-group-input']">
                <input :type="type"
                       :disabled="disabled"
                       :maxlength="maxlength"
                       :id="elementId"
                       :class="inputClasses"
                       ref="input"
                       :readonly="readonly"
                       :value="currentValue"
                       @blur="onBlur"
                       :name="name"
                       @input="onInput"
                       @focus="onFocus"
                       @keyup.enter="handleEnter"
                       @keyup="handleKeyup"
                       @keypress="handleKeypress"
                       @keydown="handleKeydown"
                       @compositionstart="handleComposition"
                       @compositionupdate="handleComposition"
                       @compositionend="handleComposition"
                       :placeholder="placeholder">
                <span :class="[prefixCls+'-icon',prefixCls+'-icon-right']" v-if="icon" @click="onIconClickRight">
                    <i :class="['pc-icon',icon,classIcon]"></i>
                </span>
                <span :class="[prefixCls+'-icon',prefixCls+'-icon-right']" v-else-if="search&&searchButton===false" @click="onIconClickRight">
                    <i :class="['pc-icon','pc-icon-search']"></i>
                </span>
                <span :class="[prefixCls+'-icon',prefixCls+'-icon-left']" v-if="iconLeft" @click="onIconClickLeft">
                    <i :class="['pc-icon',iconLeft]"></i>
                </span>
                <span :class="[prefixCls+'-icon',prefixCls+'-icon-right',{
                        [`${prefixCls}-clear`]: icon||(search&&searchButton===false)
                }]"
                          v-if="clearable && currentValue && !disabled" @click.stop="onClearValue">
                    <i :class="['pc-icon','pc-icon-clear']"></i>
                </span>
            </div>
            <div :class="[prefixCls+'-search',{
            [`${prefixCls}-search-radius`]: !append
        }]" v-if="search&&searchButton" @click="onIconClickRight">
                <i v-if="searchButton===true" class="pc-icon pc-icon-search"></i>
                <template v-else>{{searchButton}}</template>
            </div>
            <div :class="[prefixCls + '-group-append']" v-if="append" @click="onAppend">
                <slot name="append"></slot>
            </div>
        </template>
        <textarea v-else
                  :rows="rows"
                  :disabled="disabled"
                  :placeholder="placeholder"
                  @blur="onBlur"
                  :name="name"
                  @input="onInput"
                  @focus="onFocus"
                  :wrap="wrap"
                  :id="elementId"
                  :maxlength="maxlength"
                  :readonly="readonly"
                  :value="currentValue"
                  :autofocus="autofocus"
                  :class="textareaClasses">
        </textarea>
        <span v-if="type==='textarea'&&maxlength&&showWordLimit"
              :class="[
              `${prefixCls}-count`,
              {
                [`${prefixCls}-count-error`]: maxlength < (currentValue+'').length
              }
              ]">{{(currentValue+'').length}}/{{maxlength}}</span>
    </div>
</template>

<script>
    import {oneOf} from "../../utils/assist";
    import Emitter from '../../mixins/emitter'
    const prefixCls = 'pc-input';
    export default {
        name: "PcInput",
        mixins: [Emitter],
        props:{
            // 规定当在表单中提交时，文本区域中的文本如何换行。。 textarea
            wrap: {
                validator (value) {
                    return oneOf(value, ['hard', 'soft']);
                },
                default: 'soft'
            },
            // 当前的domID
            elementId:{
                type: String
            },
            // 规定在页面加载后文本区域自动获得焦点。 textarea
            autofocus: {
                type: Boolean,
                default: false
            },
            // 是否去除头尾的空格
            blankSpace: {
                type: Boolean,
                default: false
            },
            // textarea 的高度
            rows:{
                type: Number|String,
            },
            // 左边当icon
            iconLeft:{
                type: String|Boolean,
            },
            // 右边当icon
            icon:{
                type: String|Boolean,
            },
            value:{
                type: [Number,String],
                default: ''
            },
            placeholder:{
                type: String|Number,
                default: ''
            },
            // 类型
            type: {
                type: String,
                validator (value) {
                    return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel']);
                },
                default: 'text'
            },
            // 是否展示数量（textarea）的时候才可以使用
            showWordLimit: {
                type: Boolean,
                default: false
            },
            // 是否搜索
            search: {
                type: Boolean,
                default: false
            },
            classIcon: {
                type: String|Boolean,
                default: ''
            },
            searchButton: {
                type: Boolean|String,
                default: false
            },
            // 大小
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$PASTE || this.$PASTE.size === '' ? 'default' : this.$PASTE.size;
                }
            },
            // 知否只读
            readonly: {
                type: Boolean,
                default: false
            },
            // 是否禁用
            disabled: {
                type: Boolean,
                default: false
            },
            // 是否最大长度
            maxlength: {
                type: Number
            },
            // 是否显示清空按钮
            clearable: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
        },
        data(){
            return{
                currentValue: this.value,
                prepend: false,
                append: false,
                prefixCls: prefixCls,
                isOnComposition: false,
                currentValueLength: 0,
            }
        },
        computed:{
            inputClasses(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-prepend`]: this.prepend,
                        [`${prefixCls}-append`]: this.append||(this.search&&this.searchButton),
                        [`${prefixCls}-i-type-right`]:!!this.icon||(this.search&&this.searchButton===false),
                        [`${prefixCls}-i-type-left`]: !!this.iconLeft,
                    },
                ]
            },
            textareaClasses(){
                return [
                    `${prefixCls}`,
                    `${prefixCls}-textarea`,
                ]
            },
            wrapperClass(){
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled,
                    },
                ]
            }
        },
        methods:{
            onAppend(){
                if (!this.onDisabled()) {
                    this.$emit('onAppend',this.currentValue)
                }
            },
            onPrepend(){
                if (!this.onDisabled()) {
                    this.$emit('onPrepend',this.currentValue)
                }
            },
            onIconClickLeft(){
                if (!this.onDisabled()) {
                    this.$emit('onIconClickLeft',this.currentValue)
                }
            },
            onIconClickRight(){
                if (!this.onDisabled()) {
                    if (this.search ) {
                        this.$refs.input.focus()
                    }
                    this.$emit('onIconClickRight',this.currentValue)
                }
            },
            onClearValue(){
                if (!this.onDisabled()) {
                    const e = { target: { value: '' } };
                    this.$emit('input', '');
                    this.$emit('clear');
                    this.$emit('on-change', e);
                    this.updateValue('','input')
                }
            },
            handleComposition(event) {
                if (event.type === 'compositionstart') {
                    this.isOnComposition = true;
                }
                if (event.type === 'compositionend') {
                    this.isOnComposition = false;
                    this.onInput(event);
                }
            },
            onBlur(event){
                if (!this.onDisabled()) {
                    this.updateValue(event.target.value,'blur')
                }
            },
            onInput(event){
                if (this.isOnComposition) return;
                if (!this.onDisabled()) {
                    this.updateValue(event.target.value,'input')
                }
            },
            handleKeypress(event) {
                this.$emit('on-keypress', event.target.value);
            },
            handleKeydown(event) {
                this.$emit('on-keydown', event.target.value);
            },
            handleEnter (event) {
                this.$emit('on-enter', event.target.value);
                if (this.search)  this.$emit('onIconClickRight',this.currentValue);
            },
            handleKeyup (event) {
                this.$emit('on-keyup', event.target.value);
            },
            onFocus(event){
                if (!this.onDisabled()) {
                    this.$emit('focus',event.target.value)
                }
            },
            updateValue(value,type){
                if (!this.onDisabled()) {
                    if (this.blankSpace) {
                        value = value.replace(/(^\s*)|(\s*$)/g, "");
                    }
                    this.currentValue = value;
                    this.$emit(type, value);
                    if (type==='blur') {
                        this.dispatch('PcFormItem', 'on-form-blur', value);
                    }else {
                        this.dispatch('PcFormItem', 'on-form-change', value);
                    }
                }
            },
            onDisabled(){
                return this.disabled
            }
        },
        watch:{
            value(val){
                this.currentValue = val;
            }
        },
        mounted(){
            if (this.type!=='textarea') {
                this.prepend = this.$slots.prepend !== undefined;
                this.append = this.$slots.append !== undefined;
            }
        }
    }
</script>

<style scoped>

</style>
