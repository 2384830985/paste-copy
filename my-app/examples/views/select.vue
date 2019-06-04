<template>
    <div style="margin: 20px">
        <div style="margin: 20px">
            {{multiplexx}}
            <pc-select v-model="multiplexx" size="small" multiple :maxTagCount="4">
                <pc-option-group label="水果">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                    <pc-option label="西瓜香蕉" value="2"></pc-option>
                    <pc-option label="西草莓" value="3"></pc-option>
                </pc-option-group>
                <pc-option-group label="杂项" >
                    <pc-option label="栗子" value="4"></pc-option>
                    <pc-option label="鱼" disabled value="5"></pc-option>
                    <pc-option label="西瓜耳机" value="6"></pc-option>
                    <pc-option label="西瓜馒头" value="7"></pc-option>
                </pc-option-group>
            </pc-select>
            <pc-select v-model="multiplexx" multiple>
                <pc-option-group label="水果">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                    <pc-option label="西瓜香蕉" value="2"></pc-option>
                    <pc-option label="西草莓" value="3"></pc-option>
                </pc-option-group>
                <pc-option-group label="杂项" >
                    <pc-option label="栗子" value="4"></pc-option>
                    <pc-option label="鱼" disabled value="5"></pc-option>
                    <pc-option label="西瓜耳机" disabled value="6"></pc-option>
                    <pc-option label="西瓜馒头" value="7"></pc-option>
                </pc-option-group>
            </pc-select>
            <pc-select v-model="multiplexx" size="large" multiple>
                <pc-option-group label="水果">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                    <pc-option label="西瓜香蕉" value="2"></pc-option>
                    <pc-option label="西草莓" value="3"></pc-option>
                </pc-option-group>
                <pc-option-group label="杂项" >
                    <pc-option label="栗子" value="4"></pc-option>
                    <pc-option label="鱼" disabled value="5"></pc-option>
                    <pc-option label="西瓜耳机" disabled value="6"></pc-option>
                    <pc-option label="西瓜馒头" value="7"></pc-option>
                </pc-option-group>
            </pc-select>
        </div>
        <hr/>
        <div style="margin: 20px">
            {{multiplexx}}
            <pc-select v-model="multiplexx" size="small" filterable multiple>
                <pc-option-group label="水果">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                    <pc-option label="西瓜香蕉" value="2"></pc-option>
                    <pc-option label="西草莓" value="3"></pc-option>
                </pc-option-group>
                <pc-option-group label="杂项" >
                    <pc-option label="栗子" value="4"></pc-option>
                    <pc-option label="鱼" disabled value="5"></pc-option>
                    <pc-option label="西瓜耳机" value="6"></pc-option>
                    <pc-option label="西瓜馒头" value="7"></pc-option>
                </pc-option-group>
            </pc-select>
            <pc-select v-model="multiplexx" multiple filterable>
                <pc-option-group label="水果">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                    <pc-option label="西瓜香蕉" value="2"></pc-option>
                    <pc-option label="西草莓" value="3"></pc-option>
                </pc-option-group>
                <pc-option-group label="杂项" >
                    <pc-option label="栗子" value="4"></pc-option>
                    <pc-option label="鱼" disabled value="5"></pc-option>
                    <pc-option label="西瓜耳机" disabled value="6"></pc-option>
                    <pc-option label="西瓜馒头" value="7"></pc-option>
                </pc-option-group>
            </pc-select>
            <pc-select v-model="multiplexx" size="large" multiple filterable>
                <pc-option-group label="水果">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                    <pc-option label="西瓜香蕉" value="2"></pc-option>
                    <pc-option label="西草莓" value="3"></pc-option>
                </pc-option-group>
                <pc-option-group label="杂项" >
                    <pc-option label="栗子" value="4"></pc-option>
                    <pc-option label="鱼" disabled value="5"></pc-option>
                    <pc-option label="西瓜耳机" disabled value="6"></pc-option>
                    <pc-option label="西瓜馒头" value="7"></pc-option>
                </pc-option-group>
            </pc-select>
        </div>
        <hr/>

        <div style="margin: 20px">
            <pc-select v-model="xxxx" clearable filterable>
                <pc-option-group label="水果">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                    <pc-option label="西瓜香蕉" value="2"></pc-option>
                    <pc-option label="西草莓" value="3"></pc-option>
                </pc-option-group>
                <pc-option-group label="杂项" >
                    <pc-option label="栗子" value="4"></pc-option>
                    <pc-option label="鱼" disabled value="5"></pc-option>
                    <pc-option label="西瓜耳机" disabled value="6"></pc-option>
                    <pc-option label="西瓜馒头" value="7"></pc-option>
                </pc-option-group>
            </pc-select>
            <pc-select v-model="xxxx" filterable>
                <pc-option-group label="水果">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="苹果" value="1" disabled></pc-option>
                    <pc-option label="香蕉" value="2"></pc-option>
                    <pc-option label="草莓" value="3"></pc-option>
                </pc-option-group>
                <pc-option-group label="杂项" >
                    <pc-option label="栗子" value="4"></pc-option>
                    <pc-option label="鱼" disabled value="5"></pc-option>
                    <pc-option label="耳机" disabled value="6"></pc-option>
                    <pc-option label="馒头" value="7"></pc-option>
                </pc-option-group>
            </pc-select>
        </div>
        <div style="margin: 20px">
            <pc-select size="large" v-model="xxxx" clearable>
                <pc-option-group label="水果">
                    <pc-option label="西瓜" value="0"></pc-option>
                    <pc-option label="苹果" value="1" disabled></pc-option>
                    <pc-option label="香蕉" value="2"></pc-option>
                    <pc-option label="草莓" value="3"></pc-option>
                </pc-option-group>
                <pc-option-group label="杂项" >
                    <pc-option label="栗子" value="4"></pc-option>
                    <pc-option label="鱼" disabled value="5"></pc-option>
                    <pc-option label="耳机" disabled value="6"></pc-option>
                    <pc-option label="馒头" value="7"></pc-option>
                </pc-option-group>
            </pc-select>
            <pc-select v-model="xxxx">
                <pc-option label="西瓜" value="0" disabled></pc-option>
                <pc-option label="苹果" value="1"></pc-option>
                <pc-option label="香蕉" value="2"></pc-option>
                <pc-option label="草莓" value="3" disabled></pc-option>
                <pc-option label="栗子" value="4"></pc-option>
                <pc-option label="鱼" value="5"></pc-option>
                <pc-option label="耳机" value="6"></pc-option>
                <pc-option label="馒头" value="7"></pc-option>
            </pc-select>
            <pc-select size="small" v-model="xxxx">
                <pc-option label="西瓜" value="0" disabled></pc-option>
                <pc-option label="苹果" value="1"></pc-option>
                <pc-option label="香蕉" value="2"></pc-option>
                <pc-option label="草莓" value="3" disabled></pc-option>
                <pc-option label="栗子" value="4"></pc-option>
                <pc-option label="鱼" value="5"></pc-option>
                <pc-option label="耳机" value="6"></pc-option>
                <pc-option label="馒头" value="7"></pc-option>
            </pc-select>
        </div>
        <div style="margin: 20px">
            <pc-select size="large" v-model="xxxx">
                <pc-option label="西瓜" value="0"></pc-option>
                <pc-option label="苹果" value="1"></pc-option>
                <pc-option label="香蕉" value="2"></pc-option>
                <pc-option label="草莓" value="3"></pc-option>
                <pc-option label="栗子" value="4"></pc-option>
                <pc-option label="鱼" value="5"></pc-option>
                <pc-option label="耳机" value="6"></pc-option>
                <pc-option label="馒头" value="7"></pc-option>
            </pc-select>
            <pc-select v-model="xxxx">
                <pc-option label="西瓜" value="0" disabled></pc-option>
                <pc-option label="苹果" value="1"></pc-option>
                <pc-option label="香蕉" value="2"></pc-option>
                <pc-option label="草莓" value="3" disabled></pc-option>
                <pc-option label="栗子" value="4"></pc-option>
                <pc-option label="鱼" value="5"></pc-option>
                <pc-option label="耳机" value="6"></pc-option>
                <pc-option label="馒头" value="7"></pc-option>
            </pc-select>
            <pc-select size="small">
                <pc-option label="西瓜" value="0" disabled></pc-option>
                <pc-option label="苹果" value="1"></pc-option>
                <pc-option label="香蕉" value="2"></pc-option>
                <pc-option label="草莓" value="3" disabled></pc-option>
                <pc-option label="栗子" value="4"></pc-option>
                <pc-option label="鱼" value="5"></pc-option>
                <pc-option label="耳机" value="6"></pc-option>
                <pc-option label="馒头" value="7"></pc-option>
            </pc-select>
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
    .pc-select-wrapper{
        width: 320px;
    }
</style>
