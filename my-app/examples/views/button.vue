<style>
  .home{
    margin: 20px;
    padding: 20px;
  }
  .home .AIvu-btn{
    margin: 10px;
  }
</style>
<template>
  <div class="home">
    <t-button type="success" :disabled="disabled" :loading="disabled" @click="disabled = true">
      <span v-if="!disabled">Click me!</span>
      <span v-else>Loading...</span>
    </t-button>
    <t-button :disabled="disabled" :loading="disabled" @click="disabled = true" size="large">
      <span v-if="!disabled">Click me!</span>
      <span v-else>Loading...</span>
    </t-button>
    <t-button :disabled="disabled" :loading="disabled" @click="disabled = true" size="small">
      <span v-if="!disabled">Click me!</span>
      <span v-else>Loading...</span>
    </t-button>
    <button-group circle>
      <t-button>1234535436456fdsdfsd</t-button>
      <t-button >1234535436456fdsdfsd</t-button>
    </button-group>
    <button-group size="small" circle>
      <t-button dashedtype="primary">1234535436456fdsdfsd</t-button>
      <t-button>1234535436456fdsdfsd</t-button>
    </button-group>
    <button-group size="large" circle>
      <t-button>1234535436456fdsdfsd</t-button>
      <t-button type="primary">1234535436456fdsdfsd</t-button>
    </button-group>
    <button-group>
      <t-button>1234535436456fdsdfsd</t-button>
      <t-button dashed>1234535436456fdsdfsd</t-button>
    </button-group>
    <button-group size="small">
      <t-button>1234535436456fdsdfsd</t-button>
      <t-button>1234535436456fdsdfsd</t-button>
    </button-group>
    <button-group size="large" >
      <t-button type="success">1234535436456fdsdfsd</t-button>
      <t-button>1234535436456fdsdfsd</t-button>
    </button-group>
    <br/>
    <div>
      默认

      <t-button>1234535436456fdsdfsd</t-button>
      <t-button @click="xxx" type="primary">1234535436456fdsdfsd</t-button>
      <t-button type="success">1234535436456fdsdfsd</t-button>
      <t-button type="warning">1234535436456fdsdfsd</t-button>
      <t-button type="info">1234535436456fdsdfsd</t-button>
      <t-button type="error">1234535436456fdsdfsd</t-button>
    </div>
    <br/>
    <div>
      click open
      <t-button  to="/components/icon-en" type="primary">1234535436456fdsdfsd</t-button>
      <t-button to="/components/icon-en" replace type="success">1234535436456fdsdfsd</t-button>
      <t-button to="//iviewui.com" target="_blank" type="warning">1234535436456fdsdfsd</t-button>
    </div>
    <br/>
    <div>
      朴素
      <t-button  plain>1234535436456fdsdfsd</t-button>
      <t-button plain type="primary">1234535436456fdsdfsd</t-button>
      <t-button  plain type="success">1234535436456fdsdfsd</t-button>
      <t-button  plain type="warning">1234535436456fdsdfsd</t-button>
      <t-button  plain type="info">1234535436456fdsdfsd</t-button>
      <t-button  plain type="error">1234535436456fdsdfsd</t-button>
    </div>
    <br/>
    <div>
      朴素
      <t-button disabled plain>1234535436456fdsdfsd</t-button>
      <t-button plain disabled type="primary">1234535436456fdsdfsd</t-button>
      <t-button disabled plain type="success">1234535436456fdsdfsd</t-button>
      <t-button disabled plain type="warning">1234535436456fdsdfsd</t-button>
      <t-button disabled plain type="info">1234535436456fdsdfsd</t-button>
      <t-button plain disabled type="error">1234535436456fdsdfsd</t-button>
    </div>
    <br/>
    <div>
      text
      <t-button disabled text>1234535436456fdsdfsd</t-button>
      <t-button disabled type="success" text>1234535436456fdsdfsd</t-button>
      <t-button disabled type="warning" text>1234535436456fdsdfsd</t-button>
      <t-button disabled type="info" text>1234535436456fdsdfsd</t-button>
      <t-button disabled type="error" text>1234535436456fdsdfsd</t-button>
    </div>
    <br/>
    <div>
      大小
      <t-button size="large">1234535436456fdsdfsd</t-button>
      <t-button>1234535436456fdsdfsd</t-button>
      <t-button size="small">1234535436456fdsdfsd</t-button>
      <t-button size="small">1234535436456fdsdfsd</t-button>
    </div>
    <br/>
    <!--<div>-->
      <!--圆形-->
      <!--<t-button plain  circle size="large">1234535436456fdsdfsd</t-button>-->
      <!--<t-button plain  circle size="default">1234535436456fdsdfsd</t-button>-->
      <!--<t-button plain  circle size="small">1234535436456fdsdfsd</t-button>-->
    <!--</div>-->
    <!--<br/>-->
    <div>
      圆形
      <t-button  circle size="large">1234535436456fdsdfsd</t-button>
      <t-button  circle size="default">1234535436456fdsdfsd</t-button>
      <t-button  circle size="small">1234535436456fdsdfsd</t-button>
    </div>
    <br/>
    <div>
      虚线
      <t-button dashed size="large">1234535436456fdsdfsd</t-button>
      <t-button dashed>1234535436456fdsdfsd</t-button>
      <t-button dashed size="small">1234535436456fdsdfsd</t-button>
      <t-button dashed ghost circle>1234535436456fdsdfsd</t-button>
    </div>
    <br/>
    <div>
      <t-button circle dashed size="large" icon="time-circle"></t-button>
      <t-button circle size="small" icon="time-circle"></t-button>
      <t-button circle icon="time-circle"></t-button>
      <t-button circle dashed size="small" icon="time-circle"></t-button>
      <t-button circle dashed size="large" icon="time-circle"></t-button>
    </div>
    <br/>
    <div>
      <t-button circle type="success" dashed size="large" icon="time-circle"></t-button>
      <t-button circle type="warning" size="small" icon="time-circle"></t-button>
      <t-button circle type="info" icon="time-circle"></t-button>
      <t-button circle type="error" dashed size="small" icon="time-circle"></t-button>
      <t-button circle type="error" dashed size="large" icon="time-circle"></t-button>
      <t-button circle loading dashed size="large" icon="time-circle"></t-button>
    </div>
    <div>
      <t-button loading circle type="success" dashed size="large" icon="time-circle"></t-button>
      <t-button loading circle type="warning" size="small" icon="time-circle"></t-button>
      <t-button loading circle type="info" icon="time-circle"></t-button>
      <t-button loading circle type="error" dashed size="small" icon="time-circle"></t-button>
      <t-button loading circle type="error" dashed size="large" icon="time-circle"></t-button>
    </div>
    <div>
      <t-button disabled >123</t-button>
      <t-button disabled circle type="success" size="large" icon="time-circle"></t-button>
      <t-button disabled circle type="warning" size="small" icon="time-circle"></t-button>
      <t-button disabled circle type="info" icon="time-circle"></t-button>
      <t-button disabled circle type="error"  size="small" icon="time-circle"></t-button>
      <t-button loading disabled circle type="error"  size="large" icon="time-circle"></t-button>
    </div>
    <div>
      <t-icon class="aiv-loading" type="loading1"></t-icon>
      <t-icon class="aiv-loading" type="loading2"></t-icon>
      <t-icon class="aiv-loading" type="loading3"></t-icon>
      <t-icon class="aiv-loading" type="loading4"></t-icon>
      <t-icon class="aiv-loading" type="Loading"></t-icon>
      <t-icon class="aiv-loading" type="loading5"></t-icon>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    data(){
        return{
            disabled: false
        }
    },
    name: 'button1',
    components: {
    },
    methods:{
        xxx(e){
            console.log(e)
        }
    }
}
</script>
