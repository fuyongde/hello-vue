<template>
  <div>
    <router-link class="a-style" to="/a">转向A组件</router-link>|
    <router-link class="a-style" to="/b">转向B组件</router-link>
    <router-view />
  </div>
</template>

<script>
</script>

<style>
@import url('../assets/css/a-style.css');
</style>