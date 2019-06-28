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
        <pc-breadcrumb>
          <pc-breadcrumb-item :to='{path: "/"+item}' v-for='(item, index) in list' :key='index'>{{item}}</pc-breadcrumb-item>
        </pc-breadcrumb>
      </nav>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ['button', 'icon', 'layout', 'radio', 'checkbox', 'input', 'select', 'alert', 'form', 'table', 'breadcrumb', 'tag', 'pagination', 'loading', 'upload', 'cascader']
    }
  }
}
</script>

