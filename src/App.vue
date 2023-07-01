<template>
  <LoginView />
</template>

<script>
import LoginView from "./views/LoginView.vue";
export default {
  components: {
    LoginView,
  },

  setup() {
    return {};
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

img {
  max-width: 100%;
}
</style>
