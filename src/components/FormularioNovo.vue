<template>
  <div class="container">
    <div class="centered-content">
      <div class="panel left-panel">
        <div class="form-wrapper">
          <form @submit.prevent="adicionar" class="form">
            <h1>Cadastro de Atividade Complementar</h1>
            <div class="form-group">
              <label for="titulo">Título:</label>
              <input
                id="titulo"
                v-model="titulo"
                required
                placeholder="Título"
              />
            </div>
            <div class="form-group">
              <label for="grupo">Grupo:</label>
              <select id="grupo" v-model="grupo" required>
                <option value="" disabled selected>Selecione</option>
                <option value="atividades">Atividades</option>
              </select>
            </div>
            <div class="form-group">
              <label for="atividade">Atividade:</label>
              <select id="atividade" v-model="atividade" required>
                <!-- Opções da atividade aqui -->
              </select>
            </div>
            <div class="form-group">
              <label for="arquivo">Arquivo:</label>
              <input type="file" id="arquivo" required />
            </div>
            <button type="submit" class="form-button">Salvar</button>
          </form>
        </div>
      </div>
      <div class="panel right-panel">
        <div class="user-info">
          <div class="user-icon">
            <i class="fa fa-user"></i>
          </div>
          <div class="user-details">
            <div class="user-name">
              <i class="fa fa-user"></i> Aluno: Rafael
            </div>
            <div class="user-phone">Telefone: 1234567890</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "",
      grupo: "",
      atividade: "",
      arquivo: null,
      aluno: "",
    };
  },
  methods: {
    adicionar() {
      const novoItem = {
        titulo: this.titulo,
        grupo: this.grupo,
        atividade: this.atividade,
        arquivo: this.arquivo,
        aluno: this.aluno,
      };

      this.$emit("adicionar", novoItem);

      this.titulo = "";
      this.grupo = "";
      this.atividade = "";
      this.arquivo = null;
      this.aluno = "";
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alterado para flex-start para alinhar o conteúdo no topo */
  min-height: 100vh; /* Alterado para min-height para permitir o crescimento das divs */
}

.centered-content {
  display: flex;
  flex-wrap: wrap; /* Adicionado flex-wrap para quebrar a linha se necessário */
  justify-content: center;
  gap: 10px; /* Adicionado gap para criar espaço entre as divs */
  max-width: 800px; /* Defina a largura máxima desejada */
}

.panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
}

.left-panel {
  margin-right: 10px; /* Adicionado margem direita para criar espaço entre as divs */
}

.right-panel {
  background-color: green;
  color: white;
}

.form-group {
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
  color: ForestGreen;
}

input,
select {
  width: 100%;
  padding: 8px 10px;
  margin-top: 0px;
  border: 1px solid #278236;
  box-sizing: border-box;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
}

button[type="submit"] {
  background-color: #278236;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.user-info {
  display: flex;
  align-items: flex-start;
}

.user-icon {
  font-size: 24px;
  margin-right: 10px;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: bold;
}

.user-phone {
  font-size: 14px;
}
</style>
