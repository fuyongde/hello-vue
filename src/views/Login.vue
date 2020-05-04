<template>
  <div id="login">
    用户名：
    <input type="text" v-model="user.username" />
    <br />密码：
    <input type="password" v-model="user.password" />
    <br />年龄：
    <input type="number" v-model="user.age" />
    <br />角色：
    <input type="text" v-model="user.role" />
    <br />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var user = {};
    return {
      user: user
    };
  },
  methods: {
    login() {
      console.log("User -> ", this.user);
      this.$store.commit("login", this.user);
    }
  }
};
</script>