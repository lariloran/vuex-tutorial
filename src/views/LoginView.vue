<template>
  <div class="login" @submit.prevent="validaUsuario()">
    <div class="login-form">
      <form>
        <label for="username"></label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Email ou Usuário"
        />
        <label for="password"></label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Senha"
          required
        />

        <button type="submit" class="login-button" @click="validaUsuario()">
          Entrar
        </button>
        <button type="button" @click="forgotPassword" class="forgot-password">
          Esqueceu a senha?
        </button>
      </form>
    </div>
    <div class="divider"></div>
    <div class="logo">
      <img src="../assets/logo_sistrac.png" alt="Logo do sistema" />
    </div>
  </div>
</template>

<script>
//import { useStore } from "vuex";

export default {
  setup() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    validaUsuario() {
      //const store = useStore();
      this.$router.push("/home");
    },
    forgotPassword() {
      console.log(
        "Em breve, entraremos em contato para ajudá-lo a recuperar sua senha."
      );
    },
  },
};
</script>

<style scoped>
.login {
  background: whitesmoke;
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
  color: ForestGreen;
}

input {
  padding: 8px 16px;
  margin-top: 0px;
  border: 1px solid #278236;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
}

button[type="submit"].login-button {
  background-color: #278236;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

button[type="button"] {
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 5;
  color: #278236;
  text-decoration: none;
  cursor: pointer;
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
