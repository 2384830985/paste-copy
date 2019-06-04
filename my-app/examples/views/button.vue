<style>
  .home{
    margin: 20px;
    padding: 20px;
  }
  .home .pc-btn{
    margin: 10px 5px;
  }
  .home .pc-btn-group .pc-btn{
    margin: 10px 0;
  }
</style>
<template>
  <div class="home">
    api
    <div>
      <span>type:'default', 'primary', 'info', 'success', 'warning', 'error'</span>
    </div>
    <div>
      <span>loading:Boolean</span>
    </div>
    <div>
      <span>loadingType:String (loading样式)</span>
    </div>
    <div>
      <span>customIcon:String (icon 新增的class)</span>
    </div>
    <div>
      <span>noMoreClickTime:Number (点击间隔时间)</span>
    </div>
    <div>
      <span>icon:String</span>
    </div>
    <div>
      <span>disabled:Boolean</span>
    </div>
    <div>
      <span>plain:Boolean</span>
    </div>
    <div>
      <span>long:Boolean（是否100%）</span>
    </div>
    <div>
      <span>dashed:Boolean（是否虚线）</span>
    </div>
    <div>
      <span>circle:Boolean（是否圆形）</span>
    </div>
    <div>
      <span>text:Boolean（是否是文本）</span>
    </div>
    <div>
      <span>ghost:Boolean（是否幽灵模式）</span>
    </div>
    <div>
      <span>size:String（'small', 'large', 'default'）</span>
    </div>
    <div>
      <span>htmlButton:'button', 'submit', 'reset'（默认的button 的值）</span>
    </div>
    <div>
      <span>animationType:（是否动画效果 1开启 0关闭 默认1）</span>
    </div>
    <pc-button type="success" :disabled="disabled" :loading="disabled" @click="disabled = true">
      <span v-if="!disabled">Click me!</span>
      <span v-else>Loading...</span>
    </pc-button>
    <pc-button :disabled="disabled" :loading="disabled" @click="disabled = true" size="large">
      <span v-if="!disabled">Click me!</span>
      <span v-else>Loading...</span>
    </pc-button>
    <pc-button :disabled="disabled" :loading="disabled" @click="disabled = true" size="small">
      <span v-if="!disabled">Click me!</span>
      <span v-else>Loading...</span>
    </pc-button>
    <pc-button-group circle>
      <pc-button>1234535436456fdsdfsd</pc-button>
      <pc-button >1234535436456fdsdfsd</pc-button>
    </pc-button-group>
    <pc-button-group size="small" circle>
      <pc-button dashedtype="primary">1234535436456fdsdfsd</pc-button>
      <pc-button>1234535436456fdsdfsd</pc-button>
    </pc-button-group>
    <pc-button-group size="large" circle>
      <pc-button>1234535436456fdsdfsd</pc-button>
      <pc-button type="primary">1234535436456fdsdfsd</pc-button>
    </pc-button-group>
    <pc-button-group>
      <pc-button>1234535436456fdsdfsd</pc-button>
      <pc-button dashed>1234535436456fdsdfsd</pc-button>
    </pc-button-group>
    <pc-button-group size="small">
      <pc-button>1234535436456fdsdfsd</pc-button>
      <pc-button>1234535436456fdsdfsd</pc-button>
    </pc-button-group>
    <pc-button-group size="large" >
      <pc-button type="success">1234535436456fdsdfsd</pc-button>
      <pc-button>1234535436456fdsdfsd</pc-button>
    </pc-button-group>
    <br/>
    <div>
      默认

      <pc-button>1234535436456fdsdfsd</pc-button>
      <pc-button @click="xxx" type="primary">1234535436456fdsdfsd</pc-button>
      <pc-button type="success">1234535436456fdsdfsd</pc-button>
      <pc-button type="warning">1234535436456fdsdfsd</pc-button>
      <pc-button type="info">1234535436456fdsdfsd</pc-button>
      <pc-button type="error">1234535436456fdsdfsd</pc-button>
    </div>
    <br/>
    <div>
      click open
      <pc-button  to="/components/icon-en" type="primary">1234535436456fdsdfsd</pc-button>
      <pc-button to="/components/icon-en" replace type="success">1234535436456fdsdfsd</pc-button>
      <pc-button to="//iviewui.com" target="_blank" type="warning">1234535436456fdsdfsd</pc-button>
    </div>
    <br/>
    <div>
      朴素
      <pc-button  plain>1234535436456fdsdfsd</pc-button>
      <pc-button plain type="primary">1234535436456fdsdfsd</pc-button>
      <pc-button  plain type="success">1234535436456fdsdfsd</pc-button>
      <pc-button  plain type="warning">1234535436456fdsdfsd</pc-button>
      <pc-button  plain type="info">1234535436456fdsdfsd</pc-button>
      <pc-button  plain type="error">1234535436456fdsdfsd</pc-button>
    </div>
    <br/>
    <div>
      朴素
      <pc-button disabled plain>1234535436456fdsdfsd</pc-button>
      <pc-button plain disabled type="primary">1234535436456fdsdfsd</pc-button>
      <pc-button disabled plain type="success">1234535436456fdsdfsd</pc-button>
      <pc-button disabled plain type="warning">1234535436456fdsdfsd</pc-button>
      <pc-button disabled plain type="info">1234535436456fdsdfsd</pc-button>
      <pc-button plain disabled type="error">1234535436456fdsdfsd</pc-button>
    </div>
    <br/>
    <div>
      text
      <pc-button disabled text>1234535436456fdsdfsd</pc-button>
      <pc-button disabled type="success" text>1234535436456fdsdfsd</pc-button>
      <pc-button disabled type="warning" text>1234535436456fdsdfsd</pc-button>
      <pc-button disabled type="info" text>1234535436456fdsdfsd</pc-button>
      <pc-button disabled type="error" text>1234535436456fdsdfsd</pc-button>
    </div>
    <br/>
    <div>
      大小
      <pc-button size="large">1234535436456fdsdfsd</pc-button>
      <pc-button>1234535436456fdsdfsd</pc-button>
      <pc-button size="small">1234535436456fdsdfsd</pc-button>
      <pc-button size="small">1234535436456fdsdfsd</pc-button>
    </div>
    <br/>
    <!--<div>-->
      <!--圆形-->
      <!--<pc-button plain  circle size="large">1234535436456fdsdfsd</pc-button>-->
      <!--<pc-button plain  circle size="default">1234535436456fdsdfsd</pc-button>-->
      <!--<pc-button plain  circle size="small">1234535436456fdsdfsd</pc-button>-->
    <!--</div>-->
    <!--<br/>-->
    <div>
      圆形
      <pc-button  circle size="large">1234535436456fdsdfsd</pc-button>
      <pc-button  circle size="default">1234535436456fdsdfsd</pc-button>
      <pc-button  circle size="small">1234535436456fdsdfsd</pc-button>
    </div>
    <br/>
    <div>
      虚线
      <pc-button dashed size="large">1234535436456fdsdfsd</pc-button>
      <pc-button dashed>1234535436456fdsdfsd</pc-button>
      <pc-button dashed size="small">1234535436456fdsdfsd</pc-button>
      <pc-button dashed ghost circle>1234535436456fdsdfsd</pc-button>
    </div>
    <br/>
    <div>
      <pc-button circle dashed size="large" icon="time-circle"></pc-button>
      <pc-button circle size="small" icon="time-circle"></pc-button>
      <pc-button circle icon="time-circle"></pc-button>
      <pc-button circle dashed size="small" icon="time-circle"></pc-button>
      <pc-button circle dashed size="large" icon="time-circle"></pc-button>
    </div>
    <br/>
    <div>
      <pc-button circle type="success" dashed size="large" icon="time-circle"></pc-button>
      <pc-button circle type="warning" size="small" icon="time-circle"></pc-button>
      <pc-button circle type="info" icon="time-circle"></pc-button>
      <pc-button circle type="error" dashed size="small" icon="time-circle"></pc-button>
      <pc-button circle type="error" dashed size="large" icon="time-circle"></pc-button>
      <pc-button circle loading dashed size="large" icon="time-circle"></pc-button>
    </div>
    <div>
      <pc-button loading circle type="success" dashed size="large" icon="time-circle"></pc-button>
      <pc-button loading circle type="warning" size="small" icon="time-circle"></pc-button>
      <pc-button loading circle type="info" icon="time-circle"></pc-button>
      <pc-button loading circle type="error" dashed size="small" icon="time-circle"></pc-button>
      <pc-button loading circle type="error" dashed size="large" icon="time-circle"></pc-button>
    </div>
    <div>
      <pc-button disabled >123</pc-button>
      <pc-button disabled circle type="success" size="large" icon="time-circle"></pc-button>
      <pc-button disabled circle type="warning" size="small" icon="time-circle"></pc-button>
      <pc-button disabled circle type="info" icon="time-circle"></pc-button>
      <pc-button disabled circle type="error"  size="small" icon="time-circle"></pc-button>
      <pc-button loading disabled circle type="error"  size="large" icon="time-circle"></pc-button>
    </div>
    <div>
      <pc-icon class="pc-icon-loading" type="loading1"></pc-icon>
      <pc-icon class="pc-icon-loading" type="loading2"></pc-icon>
      <pc-icon class="pc-icon-loading" type="loading3"></pc-icon>
      <pc-icon class="pc-icon-loading" type="loading4"></pc-icon>
      <pc-icon class="pc-icon-loading" type="Loading"></pc-icon>
      <pc-icon class="pc-icon-loading" type="loading5"></pc-icon>
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
