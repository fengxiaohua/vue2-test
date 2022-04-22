<!--
 * @Description: 首页
 * @Date: 2022-04-08 16:50:01
-->
<template>
  <div class="home">
    <h1>hello Vue 项目测试</h1>
    <div class="body">
      <a-button type="primary">aaa</a-button>
      <Login></Login>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Login from '@/pages/login'

export default {
  name: 'Home',
  components: {Login}
}
</script>
