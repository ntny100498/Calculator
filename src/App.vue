<template>
  <CompNav/>
  <router-view/>
</template>

<script>
import CompNav from './components/CompNav.vue'

export default {
  name: 'App',
  components: {
    CompNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
