<template>
    <div v-if='!simple' class='pc-options-wrap'>
        <pc-select @on-change="sizeChange" class="pc-options-select" v-if='showSize' v-model='currentSize'>
            <pc-option v-for='(item, index) in  pageSizeOpts' :key='index' :label='item+"条/页"' :value='item'></pc-option>
        </pc-select>
        <div v-if='showJump' class='pc-options-jump'>
            <span>跳至</span>
            <pc-input 
            :value='current'
            @keyup.enter.native="jumpPage"/>
            <span>页</span>
        </div>
    </div>
    <div v-else class='pc-page-simple'>
        <div :class="{'disabled': current == 1}" @click='pageChange(current - 1)' class='simple-jump'>
            <Icon data-name="prev" type='left'/>
        </div>
        <input @keyup.enter="jumpPage" :value='current'/>
        <span>/</span>
        <span>{{totalPage}}</span>
        <div :class="{'disabled': current == totalPage}" @click='pageChange(current + 1)' class='simple-jump'>
            <Icon data-name="right" type='right'/>
        </div>
    </div>
</template>

<script>

import PcSelect from '../select';
import PcInput from '../input';
import Icon from '../icon';

export default {
    name: 'Options',
    components: { PcSelect, PcInput, Icon },
    props: {
        showSize: Boolean,
        showJump: Boolean,
        current: Number,
        totalPage: Number,
        pageSizeOpts: Array,
        simple: Boolean
    },
    data () {
        return {
            currentSize: this.pageSizeOpts[0],
            // currentNum: this.current
        }
    },
    methods: {
        sizeChange () {
            this.$emit('sizeChange', this.currentSize);
        },
        jumpPage (e) {
            let pageNum = e.target.value.trim();
            let reg = /^[1-9]+.?[0-9]*$/;
            if (reg.test(pageNum)) {
                pageNum = Number(pageNum);
                if (pageNum !== this.current) {
                    if (pageNum > this.totalPage) {
                        pageNum = this.totalPage;
                    }
                }
            } else {
                pageNum = 1;
            }
            event.target.value = pageNum;
            this.$emit('jumpPage', pageNum)
        },
        pageChange (val) {
            let pageNum = 1;
            if (val > this.totalPage) {
                pageNum = this.totalPage;
            } else if (val < 1) {
                pageNum = 1;
            } else {
                pageNum = val;
            }
            this.$emit('jumpPage', pageNum)
        }
    }
}
</script>
