<template>
  <div>
    <NavbarNovo />
    <div class="main-container">
      <div class="left-panel">
        <div class="photo-container">
          <img
            src="../assets/open-book.png"
            alt="Foto do aluno"
            class="student-photo"
          />
        </div>
      </div>
      <div class="right-panel">
        <div class="welcome-message">
          <h1>Bem-vindo ao Sistema de Registro de Atividades Complementares</h1>
        </div>
        <div class="info">
          <p class="paragrafo">
            <span class="label">Aluno:</span> RAFAEL LARILORAN COSTA RODRIGUES
          </p>
          <p class="paragrafo">
            <span class="label">Matrícula:</span> 2022005526
          </p>
          <p class="paragrafo">
            <span class="label">E-mail:</span> lariloran2@gmail.com
          </p>
          <p class="paragrafo">
            <span class="label">Curso:</span> Tecnologia em Sistemas para
            Internet (SI-2019)
          </p>
        </div>
      </div>
    </div>
  </div>
  <Rodape />
</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-items: center;
  align-items: center;
  height: 80vh;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
}

.left-panel {
  background-color: white;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.right-panel {
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.photo-container {
  margin-bottom: 20px;
}

.student-photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.info {
  display: grid;
  gap: 10px;
  align-self: flex-start;
}

.label {
  font-weight: bold;
  color: #278236;
}

.paragrafo {
  color: #555;
}

.welcome-message {
  text-align: center;
  color: #278236;
}

/* Estilos adicionados */
.novo-btn {
  margin-right: 10px;
  margin-left: 59px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 8px 16px;
  background-color: #278236;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

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
  float: left;
  margin-bottom: 10px;
}

.table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
