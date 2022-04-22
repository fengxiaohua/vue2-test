<!--
 * @Description: 主页面
 * @Date: 2022-04-08 13:54:28
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  width: 100%;
}
body {
  font-family: PingFangSC-Regular, PingFang SC !important;
}
</style>
