<template>
  <h1>Layout User</h1>
  <CompNavbar/>
  <slot></slot>
</template>

<script>
import CompNavbar from '@/components/CompNavbar.vue'

export default {
  name: 'LayoutUser',
  components: {
    CompNavbar
  }
}
</script>

<style>

</style>