<template>
  <div>
    这是组件A
    <router-link to="/router_demo">返回</router-link>
    <br />
    <div>count : {{ count }}</div>
    <button @click="countIncrease">点我自增</button>
  </div>
</template>

<script>
export default {
  name: 'A',
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    countIncrease() {
      this.$store.commit('countIncrease');
    }
  }
}
</script>