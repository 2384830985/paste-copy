<template>
    <div class='pc-options-wrap'>
        <pc-select v-if='showSize' v-model='currentSize'>
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
</template>

<script>

import PcSelect from '../select';
import PcInput from '../input';

export default {
    name: 'Options',
    components: { PcSelect, PcInput },
    props: {
        showSize: Boolean,
        showJump: Boolean,
        current: Number,
        totalPage: Number,
        pageSizeOpts: Array
    },
    data () {
        return {
            currentSize: 10
        }
    },
    methods: {
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
                this.$emit('jumpPage', pageNum)
            }
        }
    }
}
</script>
