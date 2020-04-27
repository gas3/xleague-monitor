<template>
  <div id="vue-frontend-app">
    <h2>xLeague Admin Dashboard</h2>

    <!-- <router-link :to="{
      name: 'Home'
    }">Home</router-link>
    <router-link :to="{
      name: 'GameDetail',
      params: { games: 'list of games' }
      }">Game Detail</router-link> -->

    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}

</style>
