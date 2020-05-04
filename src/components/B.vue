<template>
  <div>
    这是组件B
    <router-link to="/router_demo">返回</router-link>
    <div>count : {{ count }}</div>
  </div>
</template>

<script>
export default {
  name: 'A',
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
</script>