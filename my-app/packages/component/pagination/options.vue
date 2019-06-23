<template>
    <div class='pc-options-wrap'>
        <pc-select v-if='showSize'>
            <el-option v-for='(item, index) in  pageSizeOpts' :key='index'>{{item}}条/页</el-option>
        </pc-select>
        <div v-if='showJump' class='pc-options-jump'>
            <span>跳至</span>
            <pc-input 
            :value='pageNum'
            @keyup.enter="jumpPage"/>页
        </div>
    </div>
</template>

<script>

import PcSelect from '../select';
import PcInput from '../input';

export default {
    name: 'Options',
    components: {PcSelect, PcInput},
    props: {
        showSize: Boolean,
        showJump: Boolean,
        pageNum: Number,
        total: Number,
        pageSizeOpts: Array
    },
    methods: {
        jumpPage () {

        }
    }
}
</script>
