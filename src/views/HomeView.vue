<template>
  <div>
    <NavbarNovo />
    <div class="container">
      <div class="welcome-message">
        <h1>Bem-vindo ao Sistema de Registro de Atividades Complementares</h1>
      </div>
      <div class="content">
        <div class="info">
          <p>
            <span class="label">Aluno:</span> RAFAEL LARILORAN COSTA RODRIGUES
          </p>
          <p><span class="label">Matrícula:</span> 2022005526</p>
          <p><span class="label">E-mail:</span> lariloran2@gmail.com</p>
          <p>
            <span class="label">Curso:</span> Tecnologia em Sistemas para
            Internet (SI-2019)
          </p>
        </div>
        <div class="photo-container">
          <img
            src="../assets/perfil.jpg"
            alt="Foto do aluno"
            class="student-photo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #278236;
}

.welcome-message {
  text-align: center;
  margin-bottom: 20px;
  color: #278236;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
}

.photo-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.student-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.info {
  display: grid;
  gap: 10px;
}

.label {
  font-weight: bold;
}

.info p {
  margin: 0;
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
