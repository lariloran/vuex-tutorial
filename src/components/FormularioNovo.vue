<template>
  <form @submit.prevent="adicionar">
    <label>Aluno:</label>
    <input v-model="aluno" required />
    <label>Título:</label>
    <input v-model="titulo" required />
    <label>Atividade:</label>
    <input v-model="atividade" required />
    <label>CH:</label>
    <input v-model="ch" required />
    <label>Status:</label>
    <input v-model="status" required />
    <label>Data:</label>
    <input v-model="data" required />
    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      aluno: "",
      titulo: "",
      atividade: "",
      ch: "",
      status: "",
      data: "",
    };
  },
  methods: {
    adicionar() {
      const novoItem = {
        aluno: this.aluno,
        titulo: this.titulo,
        atividade: this.atividade,
        ch: this.ch,
        status: this.status,
        data: this.data,
      };

      this.$emit("adicionar", novoItem);

      this.aluno = "";
      this.titulo = "";
      this.atividade = "";
      this.ch = "";
      this.status = "";
      this.data = "";
    },
  },
};
</script>
