<template>
  <div id="vue-frontend-app">
    <h2>xLeague Admin Dashboard</h2>

    <!-- <router-link to="/">Home</router-link> -->
    <!-- <router-link to="/game-detail">Game Detail</router-link> -->

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
button#ab {
  background-color: transparent;
  border: 2px solid black;
}
</style>
