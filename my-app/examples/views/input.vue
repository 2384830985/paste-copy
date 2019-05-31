<template>
    <div>
        <div>
            <div style="margin: 20px">
                <t-input placeholder="123"
                         type="textarea"
                         disabled
                         rows="5"
                         >
                </t-input>
                <t-input placeholder="123"
                         style="margin-bottom: 20px"
                         >
                    <t-select slot="prepend">
                        <t-option-group label="水果">
                            <t-option label="西瓜" value="0"></t-option>
                            <t-option label="西瓜苹果" value="1" disabled></t-option>
                            <t-option label="西瓜香蕉" value="2"></t-option>
                            <t-option label="西草莓" value="3"></t-option>
                        </t-option-group>
                    </t-select>
                    <t-select slot="append">
                        <t-option-group label="水果">
                            <t-option label="西瓜" value="0"></t-option>
                            <t-option label="西瓜苹果" value="1" disabled></t-option>
                            <t-option label="西瓜香蕉" value="2"></t-option>
                            <t-option label="西草莓" value="3"></t-option>
                        </t-option-group>
                    </t-select>
                </t-input>
                <t-input placeholder="123"
                         style="margin-bottom: 20px"
                         >
                    <t-select slot="prepend">
                        <t-option-group label="水果">
                            <t-option label="西瓜" value="0"></t-option>
                            <t-option label="西瓜苹果" value="1" disabled></t-option>
                            <t-option label="西瓜香蕉" value="2"></t-option>
                            <t-option label="西草莓" value="3"></t-option>
                        </t-option-group>
                    </t-select>
                </t-input>
                <t-input placeholder="123"
                         style="margin-bottom: 20px"
                         >
                    <t-select slot="append">
                        <t-option-group label="水果">
                            <t-option label="西瓜" value="0"></t-option>
                            <t-option label="西瓜苹果" value="1" disabled></t-option>
                            <t-option label="西瓜香蕉" value="2"></t-option>
                            <t-option label="西草莓" value="3"></t-option>
                        </t-option-group>
                    </t-select>
                </t-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <t-input placeholder="123"
                         type="textarea"
                         v-model="xxxxxxxx"
                         rows="5"
                         blankSpace
                         showWordLimit
                         :maxlength="100"
                         >
                </t-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <t-input placeholder="123"
                         @onAppend="onAppend"
                         @onPrepend="onPrepend"
                         type="password"
                         clearable
                         show-password
                         search
                         icon-left="avi-warning-circle">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </t-input>
            </div>
            <div style="margin: 20px">
                <t-input placeholder="123" search clearable  icon-left="avi-warning-circle" size="small"></t-input>
            </div>
            <div style="margin: 20px">
                <t-input placeholder="123" search  clearable  icon-left="avi-warning-circle" size="large"></t-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <t-input placeholder="123"
                         @onAppend="onAppend"
                         @onPrepend="onPrepend"
                         type="password"
                         clearable
                         show-password
                         search
                         :searchButton="true"
                         icon-left="avi-warning-circle">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </t-input>
            </div>
            <div style="margin: 20px">
                <t-input placeholder="123" search clearable  :searchButton="1" icon-left="avi-warning-circle" size="small"></t-input>
            </div>
            <div style="margin: 20px">
                <t-input placeholder="123" search  clearable  :searchButton="123" icon-left="avi-warning-circle" size="large"></t-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <t-input placeholder="123"
                         @onAppend="onAppend"
                         @onPrepend="onPrepend"
                         clearable
                         icon-left="avi-warning-circle">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </t-input>
            </div>
            <div style="margin: 20px">
                <t-input placeholder="123" icon-left="avi-warning-circle" clearable size="small"></t-input>
            </div>
            <div style="margin: 20px">
                <t-input placeholder="123" icon-left="avi-warning-circle" clearable size="large"></t-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <t-input placeholder="123" icon="avi-warning-circle">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </t-input>
            </div>
            <div style="margin: 20px">
                <t-input placeholder="123" icon="avi-warning-circle" size="small"></t-input>
            </div>
            <div style="margin: 20px">
                <t-input placeholder="123" icon="avi-warning-circle" size="large"></t-input>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "input1",
        data(){
            return{
                xxxxxxxx: '12323546547657856765'
            }
        },
        methods:{
            onAppend(val){
                console.log(val)
            },
            onPrepend(val){
                console.log(val)
            },
        }
    }
</script>

<style>
    /*.AIvu-select .AIvu-input,.AIvu-select-wrapper {*/
        /*width: 130px;*/
    /*}*/
    /*.AIvu-select > .AIvu-input {*/
        /*display: block;*/
    /*}*/
</style>
