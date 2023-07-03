<template>
  <div>
    <NavbarNovo />
    <FormularioNovo v-if="exibirFormularioNovo" @adicionar="adicionarItem" />

    <div class="novo-container" v-if="!adicionandoItem">
      <button class="novo-btn" @click="mostrarFormularioNovo">Novo</button>
    </div>

    <table
      class="table"
      v-if="exibirTabela"
      style="max-width: 1400px; margin: 0 auto"
    >
      <thead>
        <tr>
          <th class="header" @click="ordenarPor('aluno')">Aluno</th>
          <th class="header" @click="ordenarPor('titulo')">Título</th>
          <th class="header" @click="ordenarPor('atividade')">Atividade</th>
          <th class="header" @click="ordenarPor('ch')">CH</th>
          <th class="header" @click="ordenarPor('status')">Status</th>
          <th class="header" @click="ordenarPor('data')">Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itensOrdenados" :key="index">
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
          aluno: "RAFAEL LARILORAN",
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
      colunaOrdenada: null,
      ordemAscendente: true,
    };
  },
  computed: {
    itensOrdenados() {
      return this.ordenarItens();
    },
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
    ordenarPor(coluna) {
      if (this.colunaOrdenada === coluna) {
        this.ordemAscendente = !this.ordemAscendente;
      } else {
        this.colunaOrdenada = coluna;
        this.ordemAscendente = true;
      }
    },
    ordenarItens() {
      const itensOrdenados = [...this.itens];
      const coluna = this.colunaOrdenada;

      if (coluna) {
        itensOrdenados.sort((a, b) => {
          const campoA = a[coluna];
          const campoB = b[coluna];

          if (campoA < campoB) {
            return this.ordemAscendente ? -1 : 1;
          }
          if (campoA > campoB) {
            return this.ordemAscendente ? 1 : -1;
          }
          return 0;
        });
      }

      return itensOrdenados;
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
  border: 1px solid #278236;
  cursor: pointer;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #278236;
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
