<template>
  <div>
    <nav class="navbar" v-if="isLogado()">
      <div class="navbar-content">
        <ul class="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Matrículas</a></li>
          <li><a href="#">Requisições</a></li>
          <li><a href="#">Relatórios</a></li>
        </ul>
      </div>
      <div class="logout-icon" @click="logout">
        <svg
          class="logout-icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M18 16v-2h-5v-2h5V8l5 4-5 4zm-6-12c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-2-8h4v2h-4v-2z"
          />
        </svg>
      </div>
    </nav>
  </div>
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
  background: #278236;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  font-family: Arial, sans-serif;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.navbar-menu {
  list-style-type: none;
  display: flex;
  justify-content: center;
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
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}

.logout-icon {
  cursor: pointer;
  margin-left: 10px;
}

.logout-icon-svg {
  fill: #fff;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
