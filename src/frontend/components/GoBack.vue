<template>
  <div>
    <a @click="goBack" class="back-button">Go Back</a>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>

a.back-button {
  cursor: pointer;
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  background-color:#4eb5f1;
  text-align:center;
  transition: all 0.2s;
}
a.back-button:hover {
  background-color:#4095c6;
}

@media all and (max-width: 30em) {
  a.back-button {
    display: block;
    margin: 0.2em auto;
  }
}
</style>