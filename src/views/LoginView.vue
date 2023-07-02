<template>
  <div class="login">
    <div class="login-form">
      <form @submit.prevent="login">
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Email ou Usuário"
        />

        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Senha"
          required
        />

        <button type="submit" @click="validaUsuario">Login</button>
      </form>
    </div>
    <div class="divider"></div>
    <div class="logo">
      <img src="../assets/logo_sistrac.png" alt="Logo do sistema" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    function validaUsuario() {
      if (this.username === "rafael" && this.password === "123") {
        store.dispatch("usuario/logar", true);
        router.push("/");
      } else {
        return false;
      }
    }
    return {
      username: "",
      password: "",
      validaUsuario,
    };
  },
};
</script>

<style scoped>
.login {
  background: #ffffe0;
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
