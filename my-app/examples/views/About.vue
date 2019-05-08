<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div v-if="xxx">
      <div id="day">
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </div>
      <button  v-print="'#day'">打印</button>
    </div>
    <button @click="xxx=true">111</button>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                xxx: false
            }
        },
        methods:{
            click(){
            }
        }
    }
</script>
