<template>
  <div class="container">
    <div class="centered-content">
      <div class="panel left-panel">
        <div class="form-wrapper">
          <form @submit.prevent="adicionar" class="form">
            <h2 class="header">Cadastro de Atividade Complementar</h2>
            <div class="form-group">
              <label for="titulo">Título</label>
              <input
                id="titulo"
                v-model="titulo"
                required
                placeholder="Título"
              />
            </div>

            <div class="form-group">
              <label for="ch">Carga Horária</label>
              <input
                id="ch"
                v-model="ch"
                required
                placeholder="Carga Horária"
              />
            </div>

            <div class="form-group">
              <label for="grupo">Grupo</label>
              <select id="grupo" v-model="grupo" required>
                <option value="" disabled selected>Selecione um grupo</option>
                <option value="atividades">Atividades</option>
              </select>
            </div>
            <div class="form-group">
              <label for="atividade">Atividade</label>
              <select id="atividade" v-model="atividade" required>
                <option value="" disabled selected>
                  Selecione uma atividade
                </option>
                <!-- Opções da atividade aqui -->
              </select>
            </div>
            <div class="form-group">
              <label for="arquivo">Arquivo</label>
              <input type="file" id="arquivo" required />
              <p class="file-info">
                Caso o certificado/documento tenha informações frente e verso,
                observe que é necessário digitalizar ambos os lados e submetê-lo
                através de um único arquivo PDF.
              </p>
            </div>
            <div class="button-wrapper">
              <button type="submit" class="form-button">
                <i class="fas fa-save"></i> Salvar
              </button>
            </div>
          </form>
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
      ch: "",
      grupo: "",
      atividade: "",
      arquivo: null,
      aluno: {
        nome: "Rafael",
        telefone: "1234567890",
        matricula: "20210001",
      },
    };
  },
  methods: {
    adicionar() {
      const novoItem = {
        titulo: this.titulo,
        ch: this.ch,
        grupo: this.grupo,
        atividade: this.atividade,
        arquivo: this.arquivo,
        aluno: this.aluno,
      };

      this.$emit("adicionar", novoItem);

      this.titulo = "";
      this.ch = "";
      this.grupo = "";
      this.atividade = "";
      this.arquivo = null;
      this.aluno = {
        nome: "",
        telefone: "",
        matricula: "",
      };
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
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
}

.left-panel {
  margin-right: 10px; /* Adicionado margem direita para criar espaço entre as divs */
}

.form-group {
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
  color: #278236;
}

input,
select {
  width: 100%;
  padding: 8px 10px;
  margin-top: 0px;
  border: 1px solid #278236;
  box-sizing: border-box;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

.form-button {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: #278236;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.file-info {
  font-size: 14px;
  color: #666;
}

.header {
  font-size: 25px;
  color: #278236;
  margin-bottom: 40px;
  text-align: center;
}

.center-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
