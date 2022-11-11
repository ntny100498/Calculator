<template>
  <nav>
    <router-link class="nav-link" to="/">
      <p class="item-menu">
        Calculator
      </p>
    </router-link>
    <router-link class="nav-link" to="/product">
      <p class="item-menu">
        Product
      </p>
    </router-link>
    <router-link class="nav-link" to="/slot">
      <p class="item-menu">
        Slot
      </p>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'CompNav'
}
</script>

<style scoped>
nav {
  margin-top: 10px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
nav .nav-link {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
}
nav .nav-link:hover {
  color: orange;
}
</style>