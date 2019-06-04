<template>
    <div :class="wrapperClass"
         :style="wrapperStyleClass"
         v-click-outside.capture="onClickOutside"
         v-click-outside:mousedown.capture="onClickOutside"
         v-click-outside:touchstart.capture="onClickOutside"
    >
        <div ref="reference"
             @click.stop="selectClick"
             :class="selectClass"
             @keydown.esc="handleKeydown"
             @keydown.enter="handleKeydown"
             @keydown.up.prevent="handleKeydown"
             @keydown.down.prevent="handleKeydown"
             @keydown.tab="handleKeydown"
             @keydown.delete="handleKeydown"
        >
            <div :class="[`${prefixCls}-tag`]"
                 v-if="multiple"
                 ref="tag"
                :style="tagStyle">
                <!-- 标签-->
                <div :class="[
                    `${prefixCls}-tag-list`,
                    {
                        [`${prefixCls}-tag-${size}`]:!!size
                    }
                ]" v-for="(item,index) in tagList"
                     :key="index"
                     v-if="!maxTagCount || maxTagCount>index"
                >
                    {{item.label}}
                    <t-icon type="close" @click.stop="closeTagList(item)" :class="`${prefixCls}-tag-close`"></t-icon>
                </div>
                <!-- 超出-->
                <div v-if="tagList.length > maxTagCount" style="padding-right: 4px;padding-left: 4px" :class="[
                    `${prefixCls}-tag-list`,
                    {
                        [`${prefixCls}-tag-${size}`]:!!size
                    }]">
                    +{{tagList.length-maxTagCount}}...
                </div>
                <input
                        ref="tagInput"
                        :class="`${prefixCls}-tag-input`"
                        :style="tagInputClass"
                        @blur="tagOnBlur"
                        v-if="filterable"
                        v-model="tagInputValue"
                        @click.stop
                        @focus="tagOnFocus"
                        @input="tagOnSearchInput"
                        type="text"/>
            </div>
            <t-input :placeholder="placeholders"
                     :readonly="readonly"
                     ref="input"
                     :size="size"
                     v-model="inputValue"
                     :disabled="disabled"
                     :clearable="clearable"
                     @blur="onBlur"
                     @clear="onClear"
                     @focus="onFocus"
                     @input="searchInput"
                     :classIcon="[
                        iconShow?`${prefixCls}-icon`:'',
                     ]"
                     :icon="icon"
            ></t-input>
        </div>
        <Drop v-show="iconShow"
              v-transfer-dom
              ref="drop"
              :showData="dropShowData"
              :class="iconShow?`${prefixCls}-avi-dropIn`:`${prefixCls}-avi-dropOut`"
        >
            <ul :class="[
                `${prefixCls}-ul`
            ]">
                <slot></slot>
            </ul>
        </Drop>
    </div>
</template>

<script>
    const prefixCls = "AIvu-select";
    import * as vClickOutside from 'v-click-outside-x';
    import TransferDom from '../../directives/transfer-dom'
    import {oneOf,findComponentsDownward} from "../../utils/assist";
    import Emitter from '../../mixins/emitter'
    import Drop from './drop'
    export default {
        name: "TSelect",
        directives: {
            clickOutside: vClickOutside.directive,
            TransferDom: TransferDom
        },
        mixins: [Emitter],
        provide(){
            return{
                "select": this
            }
        },
        props:{
            value:{
                type: [Number,String,Array],
                default: ''
            },
            placeholder:{
                type: [Number,String],
                default: '请选择'
            },
            // 大小
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            // 搜索
            filterable:{
                type: Boolean,
                default: false
            },
            clearable:{
                type: Boolean,
                default: false
            },
            disabled:{
                type: Boolean,
                default: false
            },
            // 多选
            multiple:{
                type: Boolean,
                default: false
            },
            // 最大 tag 数量
            maxTagCount:{
                type: Number,
            },
        },
        components: {
            Drop
        },
        data(){
            return {
                wrapperStyleClass: {},
                readonly: !this.filterable || this.multiple,
                prefixCls: prefixCls,
                iconShow: false,
                inputValue: '',
                oldInputValue: '',
                currentValue: this.value,
                choiceIndex: -1,
                optionDate: [],
                oldOptionDate: [],
                optionList: [],
                placeholders: this.placeholder,
                dropShowData: false,
                inputFocus: false,
                tagStyle: {},
                tagInputClass: {},
                optionGroup: [],
                createdOne: 1,
                tagInputValue: '',
                tagList: []
            }
        },
        computed:{
            wrapperClass(){
                return [
                    `${prefixCls}-wrapper`,
                ]
            },
            selectClass(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-clearable`]: this.clearable,
                        [`${prefixCls}-focus`]: this.inputFocus,
                    }
                ]
            },
            icon(){
                let icon = false;
                if (!this.clearable) {
                    icon = 'avi-caret-down'
                }
                return icon
            }
        },
        methods:{
            // 点击事件(是否收缩)
            selectClick(){
                if (this.disabled) {
                    return
                }
                this.iconShow = !this.iconShow;
                // 选中
                if (this.iconShow) {
                    // console.log(this.choiceIndex)
                    // console.log(this.optionDate[this.choiceIndex].$el)
                    // console.log(this.$refs.drop.$el)
                    // 可以搜索当时候
                    if (this.filterable) {
                        this.placeholders = this.oldInputValue;
                        this.inputValue = '';
                    }
                    // 当前展示的时候才触发
                    this.$nextTick(function () {
                        // 有group 的时候且是选中0 是滚动到group的第一个
                        // if (this.choiceIndex>-1) {
                        //     if (this.choiceIndex===0&&(this.optionDate[this.choiceIndex]._uid===this.optionList[this.choiceIndex]._uid)) {
                        //         this.optionDate[0].$el.scrollIntoView()
                        //     }else {
                        //         // 否则就是滚动到当前选中的
                        //         this.optionDate[this.choiceIndex].$el.scrollIntoView();
                        //     }
                        // }
                        // 取消当前所有的hover
                        this.cancelDown();
                        // 当前input 选中
                        this.$refs.input.$refs.input.focus();
                    })
                }else {
                    this.inputValue = this.oldInputValue;
                    this.$refs.input.$refs.input.blur()
                }
            },
            // 离焦事件
            onClickOutside(event){
                if (this.disabled) {
                    return
                }
                if (this.iconShow) {
                    // 重新获取当前的数据（重置）
                    this.getOptionDate();
                    // 不选中
                    this.iconShow = false;
                    // input 离焦
                    this.$refs.input.$refs.input.blur();
                    if (this.filterable&&this.tagList.length===0&&!this.inputFocus) {
                        this.inputValue = this.oldInputValue;
                        this.placeholders = this.oldInputValue?this.oldInputValue:
                            this.placeholder?this.placeholder:
                                '请选择';
                    }
                }
            },
            tagOnSearchInput(event){
                this.searchInput(this.tagInputValue)
            },
            searchInput(val){
                // 进行搜索
                if (this.filterable) {
                    if (!!val) {
                        this.optionList.forEach(item=>{
                            if (item.label.indexOf(val)===-1) {
                                item.show = false
                            }else {
                                item.show = true
                            }
                        })
                        this.optionGroup.forEach(item=>{
                            item.$emit('option-group-value')
                        });
                        let optionListChoice = this.optionList.filter(item=>{ return item.show});
                        this.dropShowData = optionListChoice.length===0;
                        this.optionDate = optionListChoice.filter(item=>{ return !item.disableds});
                    }else {
                        this.dropShowData = false;
                        this.optionDate = this.oldOptionDate;
                        this.optionList.forEach(item=>{
                            item.show = true
                        })
                        this.placeholders =
                            this.oldInputValue?this.oldInputValue:
                                this.placeholder?this.placeholder:
                                    '请选择';
                        this.optionGroup.forEach(item=>{
                            item.show = true
                        })
                    }
                    if (this.optionDate.filter((item,index)=>{
                        if (item.choice) {
                            this.choiceIndex = index;return true}
                        return false}).length>0) {
                    }else {
                        this.choiceIndex = -1;
                    }
                }
            },
            onInput(val){
                this.$emit('input',this.currentValue);
                this.$emit('on-change',this.currentValue);
                this.dispatch('FormItem', 'on-form-change', this.currentValue);
            },
            onFocus(val){
                let that = this;
                if (that.multiple&&that.filterable) {
                    that.$refs.tagInput.focus();
                    that.inputFocus = true
                }
                this.$emit('onFocus',val);
            },
            tagOnBlur(){
                this.inputFocus = false;
                this.tagInputValue = ''
            },
            tagOnFocus(){
                this.inputFocus = true;
                this.iconShow = true;
            },
            onBlur(val){
                this.$emit('onBlur',val)
            },
            // 取消
            onClear(){
                // 进行搜索
                this.oldInputValue = '';
                this.currentValue = '';
                this.inputValue = '';
                this.onInput();
                this.optionList.forEach(item=>{
                    item.choice = false
                })
            },
            // 键盘触发事件
            handleKeydown(event){
                if (event.key === 'Backspace'){
                    return; // so we don't call preventDefault
                }
                if (this.iconShow) {
                    event.preventDefault();
                    // 向下点击键盘
                    if (event.key === 'ArrowDown') {
                        this.upAndDown(1)
                        //    向上点击键盘
                    }else if (event.key === 'ArrowUp') {
                        this.upAndDown(-1)
                        //    【tab】
                    } else if (event.key === 'Tab') {
                        event.stopPropagation();
                        this.onClickOutside()
                        //    回车键
                    }else if (event.key === 'Enter') {
                        if (this.choiceIndex>-1) {
                            this.updateValue({value:this.optionDate[this.choiceIndex].value,})
                        }
                        //    Escape 取消建【esc】
                    }else if (event.key === 'Escape') {
                        event.stopPropagation();
                        this.onClickOutside()
                    }
                }
            },
            // 取消键盘选中
            cancelDown(){
                this.optionDate.forEach((item,i)=>{
                    item.hover = false
                })
            },
            // 键盘选中
            upAndDown(index){
                this.choiceIndex = this.choiceIndex + index;
                if (this.choiceIndex<0) {
                    this.choiceIndex = this.optionDate.length - 1
                }else if (this.choiceIndex >= this.optionDate.length) {
                    this.choiceIndex = 0
                }
                this.optionDate.forEach((item,i)=>{
                    if (i===this.choiceIndex) {
                        item.hover = true;
                        item.$el.scrollIntoView();
                    }else {
                        item.hover = false
                    }
                })
            },
            // 重新获取
            getOptionDate(){
                let that = this;
                this.optionDate = [];
                this.optionList = findComponentsDownward(this,'TOption');
                this.optionDate = this.optionList.filter(item=>{return !item.disableds});
                this.optionDate.forEach((item,index)=>{
                    if (item.choice) {
                        that.choiceIndex = index;
                    }
                });
                this.oldOptionDate = this.optionDate;
            },
            updateValue(val){
                let that = this;
                if (!!val.value) {
                    if (this.optionList) {
                        if (that.multiple) {
                            that.tagList = [];
                            // 如果当前状态是多选且当前的value 是 string 类型的说明当前得是新增修改
                            if (typeof val.value==="string") {
                                let yesIndex = that.currentValue.indexOf(val.value);
                                if (yesIndex!==-1) {
                                    that.currentValue.splice(yesIndex,1)
                                }else {
                                    that.currentValue.push(val.value)
                                }
                            }
                        }
                        this.optionList.forEach((item,index)=>{
                            if (!that.multiple) {
                                // 非多选当时候
                                item.choice = item.value === val.value;
                                if (item.choice) {
                                    that.currentValue = item.value;
                                    that.inputValue = item.label;
                                    that.oldInputValue = JSON.parse(JSON.stringify(this.inputValue));
                                    this.onClickOutside();
                                }
                            }else {
                                // 多选
                                if (that.currentValue.indexOf(item.value)!==-1) {
                                    item.choice = true;
                                    that.tagList.push({
                                        label: item.label,
                                        value: item.value,
                                    })
                                }else {
                                    item.choice = false;
                                }
                            }
                        });
                        if (that.multiple) {
                            that.calculationInputHeight();
                            this.tagInputValue = '';
                            this.searchInput('');
                        }
                        if (this.createdOne===1) {
                            ++this.createdOne;
                            this.getOptionDate();
                        }
                        // input 当前是 watch 进来的不需要进行一个赋值
                        if (val.watch !== true) {
                            that.onInput();
                        }
                    }
                }else {
                    this.onClear()
                }
            },
            /**
             * 删除多数组
             */
            closeTagList(item){
                if (this.disabled) return;
                this.updateValue({value:item.value})
            },
            /**
             * 计算input的高度
             */
            calculationInputHeight(){
                this.$nextTick(function () {
                    if (this.tagList.length>0&&this.multiple) {
                        let height = this.$refs.tag.getBoundingClientRect().height;
                        let node = [].filter.call(this.$refs.input.$el.childNodes,(item)=>{return item.className==='AIvu-input-group-input' });
                        node = [].filter.call(node[0].childNodes,(item)=>{return item.tagName==='INPUT'});
                        if (height>40) {
                            node[0].style.height = height+'px'
                        }else {
                            node[0].style.height = ''
                        }
                        this.broadcast('drop', 'on-update-popper');
                    }
                })
            },
            changeTagList(val){
                val.length===0?this.placeholders = this.placeholder: this.placeholders =''
            }
        },
        mounted(){
            this.tagStyle = {
                maxWidth: `${this.$refs.reference.getBoundingClientRect().width}px`,
                width: '100%'
            };
            this.tagInputClass = {
                maxWidth:  `${this.$refs.reference.getBoundingClientRect().width-55}px`,
            };
            this.optionGroup = findComponentsDownward(this,'TOptionGroup');
            this.getOptionDate();
            if (this.multiple) {
                this.calculationInputHeight();
                this.changeTagList(this.tagList)
            }
            if (this.value) {
                this.updateValue({value:this.value})
            }
        },
        created(){
            if (this.multiple && !Array.isArray(this.value)) {
                this.$emit('input', []);
            }
            if (!this.multiple && Array.isArray(this.value)) {
                this.$emit('input', '');
            }
        },
        watch:{
            filterable(val){
                this.readonly = !val
            },
            value(val,old){
                this.updateValue({value:val,watch:true})
            },
            tagList(val){
                this.changeTagList(val)
            },
        },
    }
</script>

<style scoped>

</style>
