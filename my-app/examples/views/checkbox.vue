<template>
    <div style="margin: 20px">
        <div style="margin: 20px">
            <t-checkbox-group v-model="checkBoxList"
                              type="button"
                              entity>
                <t-checkbox :label="1"></t-checkbox>
                <t-checkbox :label="2"></t-checkbox>
                <t-checkbox :label="3"></t-checkbox>
                <t-checkbox :label="4"></t-checkbox>
            </t-checkbox-group>
            <t-button @click="xxx">123</t-button>
        </div>
        <div style="margin: 20px">
            <t-checkbox-group v-model="checkBoxList"
                              type="button"
                              entity>
                <t-checkbox :label="1" disabled></t-checkbox>
                <t-checkbox :label="2"></t-checkbox>
                <t-checkbox :label="3" disabled></t-checkbox>
                <t-checkbox :label="4"></t-checkbox>
            </t-checkbox-group>
        </div>
        <div style="margin: 20px">
            <t-checkbox-group v-model="checkBoxList" type="button" size="small">
                <t-checkbox :label="1"></t-checkbox>
                <t-checkbox :label="2" disabled></t-checkbox>
                <t-checkbox :label="3" disabled></t-checkbox>
                <t-checkbox :label="4"></t-checkbox>
            </t-checkbox-group>
        </div>
        <div style="margin: 20px">
            <t-checkbox-group v-model="checkBoxList" type="button">
                <t-checkbox :label="1" disabled></t-checkbox>
                <t-checkbox :label="2" ></t-checkbox>
                <t-checkbox :label="3"></t-checkbox>
                <t-checkbox :label="4"></t-checkbox>
            </t-checkbox-group>
        </div>
        <div style="margin: 20px">
            <t-checkbox-group v-model="checkBoxList" type="button" size="large">
                <t-checkbox :label="1"></t-checkbox>
                <t-checkbox :label="2"></t-checkbox>
                <t-checkbox :label="3"></t-checkbox>
                <t-checkbox :label="4"></t-checkbox>
            </t-checkbox-group>
        </div>
        <div style="margin: 20px">
            <t-checkbox-group v-model="checkBoxList">
                <t-checkbox :label="1"></t-checkbox>
                <t-checkbox :label="2"></t-checkbox>
                <t-checkbox :label="3"></t-checkbox>
                <t-checkbox :label="4"></t-checkbox>
            </t-checkbox-group>
        </div>
        <div style="margin: 20px">
            <t-checkbox v-model="xx" size="small" disabled indeterminate>
                123
            </t-checkbox>
            <t-checkbox v-model="xx" size="large" disabled indeterminate>
                123
            </t-checkbox>
            <t-checkbox v-model="xx" size="default" disabled indeterminate>
                123
            </t-checkbox>
            <t-checkbox v-model="xx" size="default" disabled>
                123
            </t-checkbox>
        </div>
        <div style="margin: 20px">
            <t-checkbox v-model="xx" size="small" indeterminate>
                123
            </t-checkbox>
            <t-checkbox v-model="xx" size="large" indeterminate>
                123
            </t-checkbox>
            <t-checkbox v-model="xx" size="default" indeterminate>
                123
            </t-checkbox>
            <t-checkbox v-model="xx" size="default">
                123
            </t-checkbox>
        </div>
        <div style="margin: 20px">
            <t-checkbox v-model="xx" size="small">
                123
            </t-checkbox>
            <t-checkbox v-model="xx" size="large">
                123
            </t-checkbox>
            <t-checkbox v-model="xx" size="default">
                123
            </t-checkbox>
        </div>
        <div style="margin: 20px">
            <t-checkbox v-model="xx" indeterminate>
                123
            </t-checkbox>
            <t-checkbox v-model="xx" disabled>
                123
            </t-checkbox>
            <t-checkbox v-model="xx1" disabled>
                123
            </t-checkbox>
            <t-checkbox v-model="xx">
                123
            </t-checkbox>
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
