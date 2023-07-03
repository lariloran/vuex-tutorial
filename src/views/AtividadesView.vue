<template>
  <table class="table">
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
      <tr>
        <td>RAFAEL LARILORAN</td>
        <td>Curso Udemy</td>
        <td>Participação em evento</td>
        <td>12</td>
        <td>Em análise</td>
        <td>02/07/2023</td>
      </tr>
      <tr>
        <td>EDUARDO DOVIGI</td>
        <td>Curso Alura</td>
        <td>Estágio</td>
        <td>130</td>
        <td>Em análise</td>
        <td>02/07/2023</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style scoped>
.table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  text-align: center; /* Centraliza o conteúdo da tabela */
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
  color: #555; /* Define a mesma cor de letra dos itens do navbar */
}

.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
