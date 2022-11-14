<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import LayoutUser from '@/layout/LayoutUser.vue'
import LayoutBlank from '@/layout/LayoutBlank.vue'
const default_layout = 'User'

export default {
  name: 'App',
  components: {
    LayoutUser,
    LayoutBlank
  },
  computed: {
    layout() {
      return 'Layout' + (this.$route.meta.layout || default_layout)
    },
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