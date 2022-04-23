<template>
  <div class="lmw">
    <div>
      <router-link to="/info">信息</router-link>| |<router-link to="/about"
        >关于</router-link
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import About from '@/views/info/info.vue'
export default {
  name: 'App',
  components: {
    About,
  },
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
