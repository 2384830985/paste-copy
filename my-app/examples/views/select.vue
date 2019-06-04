<template>
    <div style="margin: 20px">
        <div style="margin: 20px">
            {{multiplexx}}
            <t-select v-model="multiplexx" size="small" multiple :maxTagCount="4">
                <t-option-group label="水果">
                    <t-option label="西瓜" value="0"></t-option>
                    <t-option label="西瓜苹果" value="1" disabled></t-option>
                    <t-option label="西瓜香蕉" value="2"></t-option>
                    <t-option label="西草莓" value="3"></t-option>
                </t-option-group>
                <t-option-group label="杂项" >
                    <t-option label="栗子" value="4"></t-option>
                    <t-option label="鱼" disabled value="5"></t-option>
                    <t-option label="西瓜耳机" value="6"></t-option>
                    <t-option label="西瓜馒头" value="7"></t-option>
                </t-option-group>
            </t-select>
            <t-select v-model="multiplexx" multiple>
                <t-option-group label="水果">
                    <t-option label="西瓜" value="0"></t-option>
                    <t-option label="西瓜苹果" value="1" disabled></t-option>
                    <t-option label="西瓜香蕉" value="2"></t-option>
                    <t-option label="西草莓" value="3"></t-option>
                </t-option-group>
                <t-option-group label="杂项" >
                    <t-option label="栗子" value="4"></t-option>
                    <t-option label="鱼" disabled value="5"></t-option>
                    <t-option label="西瓜耳机" disabled value="6"></t-option>
                    <t-option label="西瓜馒头" value="7"></t-option>
                </t-option-group>
            </t-select>
            <t-select v-model="multiplexx" size="large" multiple>
                <t-option-group label="水果">
                    <t-option label="西瓜" value="0"></t-option>
                    <t-option label="西瓜苹果" value="1" disabled></t-option>
                    <t-option label="西瓜香蕉" value="2"></t-option>
                    <t-option label="西草莓" value="3"></t-option>
                </t-option-group>
                <t-option-group label="杂项" >
                    <t-option label="栗子" value="4"></t-option>
                    <t-option label="鱼" disabled value="5"></t-option>
                    <t-option label="西瓜耳机" disabled value="6"></t-option>
                    <t-option label="西瓜馒头" value="7"></t-option>
                </t-option-group>
            </t-select>
        </div>
        <hr/>
        <div style="margin: 20px">
            {{multiplexx}}
            <t-select v-model="multiplexx" size="small" filterable multiple>
                <t-option-group label="水果">
                    <t-option label="西瓜" value="0"></t-option>
                    <t-option label="西瓜苹果" value="1" disabled></t-option>
                    <t-option label="西瓜香蕉" value="2"></t-option>
                    <t-option label="西草莓" value="3"></t-option>
                </t-option-group>
                <t-option-group label="杂项" >
                    <t-option label="栗子" value="4"></t-option>
                    <t-option label="鱼" disabled value="5"></t-option>
                    <t-option label="西瓜耳机" value="6"></t-option>
                    <t-option label="西瓜馒头" value="7"></t-option>
                </t-option-group>
            </t-select>
            <t-select v-model="multiplexx" multiple filterable>
                <t-option-group label="水果">
                    <t-option label="西瓜" value="0"></t-option>
                    <t-option label="西瓜苹果" value="1" disabled></t-option>
                    <t-option label="西瓜香蕉" value="2"></t-option>
                    <t-option label="西草莓" value="3"></t-option>
                </t-option-group>
                <t-option-group label="杂项" >
                    <t-option label="栗子" value="4"></t-option>
                    <t-option label="鱼" disabled value="5"></t-option>
                    <t-option label="西瓜耳机" disabled value="6"></t-option>
                    <t-option label="西瓜馒头" value="7"></t-option>
                </t-option-group>
            </t-select>
            <t-select v-model="multiplexx" size="large" multiple filterable>
                <t-option-group label="水果">
                    <t-option label="西瓜" value="0"></t-option>
                    <t-option label="西瓜苹果" value="1" disabled></t-option>
                    <t-option label="西瓜香蕉" value="2"></t-option>
                    <t-option label="西草莓" value="3"></t-option>
                </t-option-group>
                <t-option-group label="杂项" >
                    <t-option label="栗子" value="4"></t-option>
                    <t-option label="鱼" disabled value="5"></t-option>
                    <t-option label="西瓜耳机" disabled value="6"></t-option>
                    <t-option label="西瓜馒头" value="7"></t-option>
                </t-option-group>
            </t-select>
        </div>
        <hr/>

        <div style="margin: 20px">
            <t-select v-model="xxxx" clearable filterable>
                <t-option-group label="水果">
                    <t-option label="西瓜" value="0"></t-option>
                    <t-option label="西瓜苹果" value="1" disabled></t-option>
                    <t-option label="西瓜香蕉" value="2"></t-option>
                    <t-option label="西草莓" value="3"></t-option>
                </t-option-group>
                <t-option-group label="杂项" >
                    <t-option label="栗子" value="4"></t-option>
                    <t-option label="鱼" disabled value="5"></t-option>
                    <t-option label="西瓜耳机" disabled value="6"></t-option>
                    <t-option label="西瓜馒头" value="7"></t-option>
                </t-option-group>
            </t-select>
            <t-select v-model="xxxx" filterable>
                <t-option-group label="水果">
                    <t-option label="西瓜" value="0"></t-option>
                    <t-option label="苹果" value="1" disabled></t-option>
                    <t-option label="香蕉" value="2"></t-option>
                    <t-option label="草莓" value="3"></t-option>
                </t-option-group>
                <t-option-group label="杂项" >
                    <t-option label="栗子" value="4"></t-option>
                    <t-option label="鱼" disabled value="5"></t-option>
                    <t-option label="耳机" disabled value="6"></t-option>
                    <t-option label="馒头" value="7"></t-option>
                </t-option-group>
            </t-select>
        </div>
        <div style="margin: 20px">
            <t-select size="large" v-model="xxxx" clearable>
                <t-option-group label="水果">
                    <t-option label="西瓜" value="0"></t-option>
                    <t-option label="苹果" value="1" disabled></t-option>
                    <t-option label="香蕉" value="2"></t-option>
                    <t-option label="草莓" value="3"></t-option>
                </t-option-group>
                <t-option-group label="杂项" >
                    <t-option label="栗子" value="4"></t-option>
                    <t-option label="鱼" disabled value="5"></t-option>
                    <t-option label="耳机" disabled value="6"></t-option>
                    <t-option label="馒头" value="7"></t-option>
                </t-option-group>
            </t-select>
            <t-select v-model="xxxx">
                <t-option label="西瓜" value="0" disabled></t-option>
                <t-option label="苹果" value="1"></t-option>
                <t-option label="香蕉" value="2"></t-option>
                <t-option label="草莓" value="3" disabled></t-option>
                <t-option label="栗子" value="4"></t-option>
                <t-option label="鱼" value="5"></t-option>
                <t-option label="耳机" value="6"></t-option>
                <t-option label="馒头" value="7"></t-option>
            </t-select>
            <t-select size="small" v-model="xxxx">
                <t-option label="西瓜" value="0" disabled></t-option>
                <t-option label="苹果" value="1"></t-option>
                <t-option label="香蕉" value="2"></t-option>
                <t-option label="草莓" value="3" disabled></t-option>
                <t-option label="栗子" value="4"></t-option>
                <t-option label="鱼" value="5"></t-option>
                <t-option label="耳机" value="6"></t-option>
                <t-option label="馒头" value="7"></t-option>
            </t-select>
        </div>
        <div style="margin: 20px">
            <t-select size="large" v-model="xxxx">
                <t-option label="西瓜" value="0"></t-option>
                <t-option label="苹果" value="1"></t-option>
                <t-option label="香蕉" value="2"></t-option>
                <t-option label="草莓" value="3"></t-option>
                <t-option label="栗子" value="4"></t-option>
                <t-option label="鱼" value="5"></t-option>
                <t-option label="耳机" value="6"></t-option>
                <t-option label="馒头" value="7"></t-option>
            </t-select>
            <t-select v-model="xxxx">
                <t-option label="西瓜" value="0" disabled></t-option>
                <t-option label="苹果" value="1"></t-option>
                <t-option label="香蕉" value="2"></t-option>
                <t-option label="草莓" value="3" disabled></t-option>
                <t-option label="栗子" value="4"></t-option>
                <t-option label="鱼" value="5"></t-option>
                <t-option label="耳机" value="6"></t-option>
                <t-option label="馒头" value="7"></t-option>
            </t-select>
            <t-select size="small">
                <t-option label="西瓜" value="0" disabled></t-option>
                <t-option label="苹果" value="1"></t-option>
                <t-option label="香蕉" value="2"></t-option>
                <t-option label="草莓" value="3" disabled></t-option>
                <t-option label="栗子" value="4"></t-option>
                <t-option label="鱼" value="5"></t-option>
                <t-option label="耳机" value="6"></t-option>
                <t-option label="馒头" value="7"></t-option>
            </t-select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "select1",
        data(){
            return{
                xxxx: '',
                multiplexx: ['0','1']
            }
        },
        methods:{
            xx(){
                console.log(this.xxxx)
            }
        }
    }
</script>

<style scoped>
    .AIvu-select-wrapper{
        width: 320px;
    }
</style>
