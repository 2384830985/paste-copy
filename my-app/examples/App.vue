<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

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
<style lang="less">
@import "../packages/styles/index";
</style>
