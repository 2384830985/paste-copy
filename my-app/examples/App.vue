<style lang="less">
  @import "../packages/styles/index";
  nav {
    margin-bottom: 40px;

    ul { display: flex; flex-wrap: wrap; }
    li { display: inline-block; }
    li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
  }
  .container{ padding: 10px 40px 0; }
  .v-link-active { color: #bbb; }
</style>
<template>
  <div id="app">
    <div class="container">
      <nav>
        <ul>
          <li><router-link to="/button">button</router-link></li>
          <li><router-link to="/icon">icon</router-link></li>
          <li><router-link to="/layout">layout</router-link></li>
          <li><router-link to="/radio">radio</router-link></li>
        </ul>
      </nav>
    </div>
    <router-view/>
  </div>
</template>
