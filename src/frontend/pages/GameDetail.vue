<template>
  <div id="app">
    <div id="div">
      <ul>
        <li v-for="user of users" v-bind:key="user['.key']">
          <div v-if="user.DisplayName">
            <p>{{ user.DisplayName }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from "../config/db";
export default {
  data() {
    return {
      users: []
    };
  },
  firebase: {
    users: db.ref("v2/users")
  },
  methods: {
    editBook(key) {

    },
    saveEdit(book) {
      const key = book[".key"];
    }
  }
};
</script>

<style scoped>
button#ab {
  background-color: transparent;
  border: 2px solid black;
}
</style>
