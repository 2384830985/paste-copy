<template>
    <div class="xx">
        <div>
            <h1>flex center</h1>
            <t-row  style="margin-bottom: 20px" type="flex" justify="center">
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </t-col>
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </t-col>
                <t-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </t-col>
            </t-row>
            <h1>flex start</h1>
            <t-row  style="margin-bottom: 20px" type="flex" justify="start">
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </t-col>
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </t-col>
                <t-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </t-col>
            </t-row>
            <h1>flex end</h1>
            <t-row  style="margin-bottom: 20px" type="flex" justify="end">
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </t-col>
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </t-col>
                <t-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </t-col>
            </t-row>
            <h1>flex space-around</h1>
            <t-row  style="margin-bottom: 20px" type="flex" justify="space-around">
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </t-col>
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </t-col>
                <t-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </t-col>
            </t-row>
            <h1>flex space-between</h1>
            <t-row  style="margin-bottom: 20px" type="flex" justify="space-between">
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </t-col>
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </t-col>
                <t-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </t-col>
            </t-row>
            <h1>flex align top</h1>
            <t-row  style="margin: 20px 0;padding: 0;background: #515a6e;height: 200px"
                    type="flex"
                    align="top" justify="center">
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </t-col>
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </t-col>
                <t-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </t-col>
            </t-row>
            <h1>flex align middle</h1>
            <t-row  style="margin: 20px 0;padding: 0;background: #515a6e;height: 200px"
                    type="flex"
                    align="middle" justify="center">
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </t-col>
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </t-col>
                <t-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </t-col>
            </t-row>
            <h1>flex align bottom</h1>
            <t-row  style="margin: 20px 0;padding: 0;background: #515a6e;height: 200px"
                    type="flex"
                    align="bottom" justify="center">
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </t-col>
                <t-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </t-col>
                <t-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </t-col>
            </t-row>
        </div>
        <div>
            <h1>gutter</h1>
            <t-row :gutter="20" style="margin-bottom: 20px">
                <t-col :xs="2" :sm="4" :md="6" :lg="8">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </t-col>
                <t-col :xs="20" :sm="16" :md="12" :lg="8">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </t-col>
                <t-col  :xs="2" :sm="4" :md="6" :lg="8">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </t-col>
            </t-row>
        </div>
        <t-row>
            <t-col span="2" order="3">
                <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
            </t-col>
            <t-col span="3" push="2" order="1">
                <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
            </t-col>
            <t-col span="3" push="3" order="2">
                <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
            </t-col>
            <t-col span="7" offset="5" order="1">
                <div style="width: 100%;height: 100px;background: #ffab9f"></div>
            </t-col>
        </t-row>
        <div style="margin-top: 20px">
            <t-col :xs="2" :sm="4" :md="6" :lg="8">
                <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
            </t-col>
            <t-col :xs="20" :sm="16" :md="12" :lg="8">
                <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
            </t-col>
            <t-col  :xs="2" :sm="4" :md="6" :lg="8">
                <div style="width: 100%;height: 100px;background: #ffab9f"></div>
            </t-col>
        </div>
        <div style="margin-top: 20px">
            <t-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div style="width: 100%;height: 100px;background: #ffab9f"></div>
            </t-col>
            <t-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
            </t-col>
            <t-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
            </t-col>
        </div>

    </div>
</template>

<script>
    export default {
        name: "layout",
    }
</script>

<style scoped>
    .xx :before,
    :after {
         content: "";
         display: table;
     }
    .xx :after {
        clear: both;
        visibility: hidden;
        font-size: 0;
        height: 0;
    }
    .xx{
        zoom: 1;
    }
</style>
