<template>
    <div style="margin: 20px">
        <div style="margin: 20px">
            <pc-checkbox-group v-model="checkBoxList"
                              type="button"
                              entity>
                <pc-checkbox :label="1"></pc-checkbox>
                <pc-checkbox :label="2"></pc-checkbox>
                <pc-checkbox :label="3"></pc-checkbox>
                <pc-checkbox :label="4"></pc-checkbox>
            </pc-checkbox-group>
            <pc-button @click="xxx">123</pc-button>
        </div>
        <div style="margin: 20px">
            <pc-checkbox-group v-model="checkBoxList"
                              type="button"
                              entity>
                <pc-checkbox :label="1" disabled></pc-checkbox>
                <pc-checkbox :label="2"></pc-checkbox>
                <pc-checkbox :label="3" disabled></pc-checkbox>
                <pc-checkbox :label="4"></pc-checkbox>
            </pc-checkbox-group>
        </div>
        <div style="margin: 20px">
            <pc-checkbox-group v-model="checkBoxList" type="button" size="small">
                <pc-checkbox :label="1"></pc-checkbox>
                <pc-checkbox :label="2" disabled></pc-checkbox>
                <pc-checkbox :label="3" disabled></pc-checkbox>
                <pc-checkbox :label="4"></pc-checkbox>
            </pc-checkbox-group>
        </div>
        <div style="margin: 20px">
            <pc-checkbox-group v-model="checkBoxList" type="button">
                <pc-checkbox :label="1" disabled></pc-checkbox>
                <pc-checkbox :label="2" ></pc-checkbox>
                <pc-checkbox :label="3"></pc-checkbox>
                <pc-checkbox :label="4"></pc-checkbox>
            </pc-checkbox-group>
        </div>
        <div style="margin: 20px">
            <pc-checkbox-group v-model="checkBoxList" type="button" size="large">
                <pc-checkbox :label="1"></pc-checkbox>
                <pc-checkbox :label="2"></pc-checkbox>
                <pc-checkbox :label="3"></pc-checkbox>
                <pc-checkbox :label="4"></pc-checkbox>
            </pc-checkbox-group>
        </div>
        <div style="margin: 20px">
            <pc-checkbox-group v-model="checkBoxList">
                <pc-checkbox :label="1"></pc-checkbox>
                <pc-checkbox :label="2"></pc-checkbox>
                <pc-checkbox :label="3"></pc-checkbox>
                <pc-checkbox :label="4"></pc-checkbox>
            </pc-checkbox-group>
        </div>
        <div style="margin: 20px">
            <pc-checkbox v-model="xx" size="small" disabled indeterminate>
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx" size="large" disabled indeterminate>
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx" size="default" disabled indeterminate>
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx" size="default" disabled>
                123
            </pc-checkbox>
        </div>
        <div style="margin: 20px">
            <pc-checkbox v-model="xx" size="small" indeterminate>
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx" size="large" indeterminate>
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx" size="default" indeterminate>
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx" size="default">
                123
            </pc-checkbox>
        </div>
        <div style="margin: 20px">
            <pc-checkbox v-model="xx" size="small">
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx" size="large">
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx" size="default">
                123
            </pc-checkbox>
        </div>
        <div style="margin: 20px">
            <pc-checkbox v-model="xx" indeterminate>
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx" disabled>
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx1" disabled>
                123
            </pc-checkbox>
            <pc-checkbox v-model="xx">
                123
            </pc-checkbox>
        </div>
    </div>

</template>

<script>

    export default {
        name: "checkbox",
        data(){
            return{
                xx: true,
                xx1: false,
                checkBoxList: [1,2]
            }
        },
        methods:{
            xxx(){
                console.log(this.checkBoxList)
            }
        }
    }
</script>

<style scoped>

</style>
