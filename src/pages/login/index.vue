<!--
 * @Description: 登录页面（输入账号和密码登录）
 * @Date: 2022-04-21 15:11:38
-->
<template>
  <div class="login">
    <a-form-model class="form" :model="loginForm">
      <a-form-model-item prop="userName" label="用户名">
        <a-input placeholder="请输入用户名" v-model="loginForm.userName">
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password" label="密码">
        <a-input-password
          placeholder="请输入密码"
          v-model="loginForm.password"
        ></a-input-password>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
function GET_LOGIN_FORM() {
  return {
    userName: '',
    password: ''
  }
}
export default {
  name: 'Login',
  data() {
    return {
      // 登录信息表单
      loginForm: GET_LOGIN_FORM()
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .form {
    padding: 20px;
    border: 1px solid #eee;
    transition: all 0.3s;

    &:focus-within {
      transform: translateY(-4px);
      box-shadow: 0 0 10px #ddd;
      border-color: hsl(199, 98%, 48%);
    }
  }
}
</style>
