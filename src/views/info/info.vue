<template>
  <div class="about">
    <div>
      <div>依赖</div>
      <div>vue: {{ dependencies.vue }}</div>
      <div>vue-router: {{ dependencies.vueRouter }}</div>
      <div>vuex: {{ dependencies.vuex }}</div>
    </div>
    <br />
    <div>
      <div>开发环境依赖</div>
      <div>less: {{ devDependencies.less }}</div>
    </div>
  </div>
</template>

<script>
import { dependencies, devDependencies } from './getinfo'
import { ref } from 'vue'
export default {
  name: '',
  setup() {
    return { dependencies, devDependencies }
  },
  components: {},
}
</script>

<style scoped></style>
