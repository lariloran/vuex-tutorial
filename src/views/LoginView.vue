<template>
  <div class="login">
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
    <div class="divider"></div>
    <div class="logo">
      <img src="../assets/logo_sistrac.png" alt="Logo do sistema" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Implemente sua lógica de autenticação aqui
      console.log("Usuário:", this.username);
      console.log("Senha:", this.password);

      // Redirecione para a página principal após o login bem-sucedido
      // this.$router.push('/pagina-principal');
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-form {
  width: 300px;
  padding: 0 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  padding: 5px;
  margin-top: 5px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
}

.divider {
  width: 1px;
  height: 100px;
  background-color: #ccc;
  margin: 0 20px;
}

.logo {
  max-width: 300px;
  padding: 0 20px;
  text-align: center;
  margin-left: 20px;
}

.logo img {
  max-width: 100%;
  height: auto;
}
</style>
