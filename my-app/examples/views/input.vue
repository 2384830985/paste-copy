<template>
    <div>
        <div>
            <div style="margin: 20px">
                <pc-input placeholder="123"
                         type="textarea"
                         disabled
                         rows="5"
                         >
                </pc-input>
                <pc-input placeholder="123"
                         style="margin-bottom: 20px"
                         >
                    <pc-select slot="prepend">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                    <pc-select slot="append">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                </pc-input>
                <pc-input placeholder="123"
                         style="margin-bottom: 20px"
                         >
                    <pc-select slot="prepend">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                </pc-input>
                <pc-input placeholder="123"
                         style="margin-bottom: 20px"
                         >
                    <pc-select slot="append">
                        <pc-option-group label="水果">
                            <pc-option label="西瓜" value="0"></pc-option>
                            <pc-option label="西瓜苹果" value="1" disabled></pc-option>
                            <pc-option label="西瓜香蕉" value="2"></pc-option>
                            <pc-option label="西草莓" value="3"></pc-option>
                        </pc-option-group>
                    </pc-select>
                </pc-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <pc-input placeholder="123"
                         type="textarea"
                         v-model="xxxxxxxx"
                         rows="5"
                         blankSpace
                         showWordLimit
                         :maxlength="100"
                         >
                </pc-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <pc-input placeholder="123"
                         @onAppend="onAppend"
                         @onPrepend="onPrepend"
                         type="password"
                         clearable
                         show-password
                         search
                         icon-left="avi-warning-circle">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </pc-input>
            </div>
            <div style="margin: 20px">
                <pc-input placeholder="123" search clearable  icon-left="avi-warning-circle" size="small"></pc-input>
            </div>
            <div style="margin: 20px">
                <pc-input placeholder="123" search  clearable  icon-left="avi-warning-circle" size="large"></pc-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <pc-input placeholder="123"
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
                </pc-input>
            </div>
            <div style="margin: 20px">
                <pc-input placeholder="123" search clearable  :searchButton="1" icon-left="avi-warning-circle" size="small"></pc-input>
            </div>
            <div style="margin: 20px">
                <pc-input placeholder="123" search  clearable  :searchButton="123" icon-left="avi-warning-circle" size="large"></pc-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <pc-input placeholder="123"
                         @onAppend="onAppend"
                         @onPrepend="onPrepend"
                         clearable
                         icon-left="avi-warning-circle">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </pc-input>
            </div>
            <div style="margin: 20px">
                <pc-input placeholder="123" icon-left="avi-warning-circle" clearable size="small"></pc-input>
            </div>
            <div style="margin: 20px">
                <pc-input placeholder="123" icon-left="avi-warning-circle" clearable size="large"></pc-input>
            </div>
        </div>
        <div>
            <div style="margin: 20px">
                <pc-input placeholder="123" icon="avi-warning-circle">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </pc-input>
            </div>
            <div style="margin: 20px">
                <pc-input placeholder="123" icon="avi-warning-circle" size="small"></pc-input>
            </div>
            <div style="margin: 20px">
                <pc-input placeholder="123" icon="avi-warning-circle" size="large"></pc-input>
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

</style>
