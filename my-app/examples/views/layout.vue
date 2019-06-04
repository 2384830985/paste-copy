<template>
    <div class="xx">
        <div>
            <h1>flex center</h1>
            <pc-row  style="margin-bottom: 20px" type="flex" justify="center">
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </pc-col>
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </pc-col>
                <pc-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </pc-col>
            </pc-row>
            <h1>flex start</h1>
            <pc-row  style="margin-bottom: 20px" type="flex" justify="start">
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </pc-col>
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </pc-col>
                <pc-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </pc-col>
            </pc-row>
            <h1>flex end</h1>
            <pc-row  style="margin-bottom: 20px" type="flex" justify="end">
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </pc-col>
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </pc-col>
                <pc-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </pc-col>
            </pc-row>
            <h1>flex space-around</h1>
            <pc-row  style="margin-bottom: 20px" type="flex" justify="space-around">
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </pc-col>
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </pc-col>
                <pc-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </pc-col>
            </pc-row>
            <h1>flex space-between</h1>
            <pc-row  style="margin-bottom: 20px" type="flex" justify="space-between">
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </pc-col>
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </pc-col>
                <pc-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </pc-col>
            </pc-row>
            <h1>flex align top</h1>
            <pc-row  style="margin: 20px 0;padding: 0;background: #515a6e;height: 200px"
                    type="flex"
                    align="top" justify="center">
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </pc-col>
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </pc-col>
                <pc-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </pc-col>
            </pc-row>
            <h1>flex align middle</h1>
            <pc-row  style="margin: 20px 0;padding: 0;background: #515a6e;height: 200px"
                    type="flex"
                    align="middle" justify="center">
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </pc-col>
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </pc-col>
                <pc-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </pc-col>
            </pc-row>
            <h1>flex align bottom</h1>
            <pc-row  style="margin: 20px 0;padding: 0;background: #515a6e;height: 200px"
                    type="flex"
                    align="bottom" justify="center">
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </pc-col>
                <pc-col :span="4">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </pc-col>
                <pc-col  :span="4">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </pc-col>
            </pc-row>
        </div>
        <div>
            <h1>gutter</h1>
            <pc-row :gutter="20" style="margin-bottom: 20px">
                <pc-col :xs="2" :sm="4" :md="6" :lg="8">
                    <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
                </pc-col>
                <pc-col :xs="20" :sm="16" :md="12" :lg="8">
                    <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
                </pc-col>
                <pc-col  :xs="2" :sm="4" :md="6" :lg="8">
                    <div style="width: 100%;height: 100px;background: #ffab9f"></div>
                </pc-col>
            </pc-row>
        </div>
        <pc-row>
            <pc-col span="2" order="3">
                <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
            </pc-col>
            <pc-col span="3" push="2" order="1">
                <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
            </pc-col>
            <pc-col span="3" push="3" order="2">
                <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
            </pc-col>
            <pc-col span="7" offset="5" order="1">
                <div style="width: 100%;height: 100px;background: #ffab9f"></div>
            </pc-col>
        </pc-row>
        <div style="margin-top: 20px">
            <pc-col :xs="2" :sm="4" :md="6" :lg="8">
                <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
            </pc-col>
            <pc-col :xs="20" :sm="16" :md="12" :lg="8">
                <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
            </pc-col>
            <pc-col  :xs="2" :sm="4" :md="6" :lg="8">
                <div style="width: 100%;height: 100px;background: #ffab9f"></div>
            </pc-col>
        </div>
        <div style="margin-top: 20px">
            <pc-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div style="width: 100%;height: 100px;background: #ffab9f"></div>
            </pc-col>
            <pc-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div style="width: 100%;height: 100px;background: #9a6e3a"></div>
            </pc-col>
            <pc-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
                <div style="width: 100%;height: 100px;background: #2d8cf0"></div>
            </pc-col>
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
