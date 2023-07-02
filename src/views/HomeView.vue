<template>
  <nav class="navbar" v-if="isLogado()">
    <ul class="navbar-menu">
      <li><a href="#">HOME</a></li>
      <li><a href="#">MATRÍCULAS</a></li>
      <li><a href="#">REQUISIÇÕES</a></li>
      <li><a href="#">RELATÓRIOS</a></li>
    </ul>
    <div class="logout-icon" @click="logout">
      <i class="fa fa-sign-out"></i>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    function isLogado() {
      return store.getters["usuario/isLogado"];
    }
    return { isLogado };
  },
  methods: {
    logout() {
      // Implemente sua lógica de logout aqui
      // Redirecione para a página de login ou execute outras ações necessárias
    },
  },
};
</script>

<style scoped>
.navbar {
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.navbar-menu {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin-right: 10px;
}

.navbar-menu li a {
  color: #fff;
  text-decoration: none;
  padding: 5px;
}

.logout-icon {
  cursor: pointer;
}
</style>
