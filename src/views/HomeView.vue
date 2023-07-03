<template>
  <div>
    <nav class="navbar" v-if="isLogado()">
      <div class="navbar-content">
        <span class="logo">
          <span class="s">S</span>
          <span class="i">I</span>
          <span class="s2">S</span>
          <span class="t">T</span>
          <span class="r">R</span>
          <span class="a">A</span>
          <span class="c">C</span>
        </span>
        <div class="navbar-menu-logout">
          <ul class="navbar-menu">
            <li><router-link to="/" class="navbar-menu-link">Início</router-link></li>
            <li><router-link to="/atividades" class="navbar-menu-link">Atividades Complementares</router-link></li>
            <li><router-link to="/requerimentos" class="navbar-menu-link">Requerimentos</router-link></li>
            <li><router-link to="/relatorios" class="navbar-menu-link">Relatórios</router-link></li>
          </ul>
          <div class="logout-icon" @click="logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="logout-icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M10 17l5-5-5-5"></path>
              <path d="M15 12h-9"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  setup() {
    const store = useStore();

    function isLogado() {
      return store.getters["usuario/isLogado"];
    }

    function logout() {
      // Implemente sua lógica de logout aqui
      // Redirecione para a página de login ou execute outras ações necessárias
    }

    return { isLogado, logout };
  },
};
</script>

<style scoped>
.navbar {
  background: #fff;
  color: #555;
  display: flex;
  align-items: center;
  padding: 10px;
  font-family: Arial, sans-serif;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
}

.logo {
  margin-right: 10px;
  font-weight: bold;
  font-size: 30px;
  color: #333;
}

.logo .s {
  color: green;
}

.logo .s2 {
  color: blue;
}
.logo .i {
  color: orange;
}

.logo .t {
  color: red;
}

.logo .r {
  color: orange;
}

.logo .a {
  color: green;
}

.logo .c {
  color: blue;
}

.navbar-menu-logout {
  display: flex;
  align-items: center;
}

.navbar-menu {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  margin-right: 30px;
}

.navbar-menu li {
  margin-right: 10px;
}

.navbar-menu li .navbar-menu-link {
  color: #555;
  text-decoration: none;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s;
}

.navbar-menu li .navbar-menu-link:hover {
  color: #333;
}

.logout-icon {
  cursor: pointer;
  margin-left: 20px;
  margin-right: 30px;
}

.logout-icon-svg {
  fill: #555;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center; /* Centraliza o conteúdo da tabela */
}

.table th.header {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #555; /* Define a mesma cor de letra dos itens do navbar */
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
