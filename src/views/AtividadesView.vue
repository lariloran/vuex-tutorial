<template>
  <div>
    <NavbarNovo />
    <FormularioNovo v-if="exibirFormularioNovo" @adicionar="adicionarItem" />

    <div class="novo-container" v-if="!adicionandoItem">
      <button class="novo-btn" @click="mostrarFormularioNovo">Novo</button>
    </div>

    <table class="table" v-if="exibirTabela">
      <thead>
        <tr>
          <th class="header">Aluno</th>
          <th class="header">Título</th>
          <th class="header">Atividade</th>
          <th class="header">CH</th>
          <th class="header">Status</th>
          <th class="header">Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itens" :key="index">
          <td>{{ item.aluno }}</td>
          <td>{{ item.titulo }}</td>
          <td>{{ item.atividade }}</td>
          <td>{{ item.ch }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.data }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavbarNovo from "../components/NavbarNovo.vue";
import FormularioNovo from "../components/FormularioNovo.vue";

export default {
  components: {
    NavbarNovo,
    FormularioNovo,
  },
  data() {
    return {
      itens: [
        {
          aluno: "RAFAEL LARILORAN",
          titulo: "Curso Udemy",
          atividade: "Participação em evento",
          ch: "12",
          status: "Em análise",
          data: "02/07/2023",
        },
        {
          aluno: "EDUARDO DOVIGI",
          titulo: "Curso Alura",
          atividade: "Estágio",
          ch: "130",
          status: "Em análise",
          data: "02/07/2023",
        },
      ],
      exibirFormularioNovo: false,
      exibirTabela: true,
      adicionandoItem: false,
    };
  },
  methods: {
    mostrarFormularioNovo() {
      this.exibirFormularioNovo = true;
      this.exibirTabela = false;
      this.adicionandoItem = true;
    },
    adicionarItem(novoItem) {
      this.itens.push(novoItem);

      this.exibirFormularioNovo = false;
      this.exibirTabela = true;
      this.adicionandoItem = false;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center;
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #555;
}

.novo-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.novo-btn {
  margin-right: 10px;
}

.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
