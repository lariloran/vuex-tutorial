<script setup>
</script>

<template>
    <footer>
        <div class="rodape-infos">
            <strong>Canais oficiais do IFRS</strong>
            <div class="sites">
                <a href="https://ifrs.edu.br/" target="_blank">
                    <font-awesome-icon :icon="['fas', 'earth-americas']" />
                </a>
                <a href="https://www.facebook.com/IFRSOficial?locale=pt_BR" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
                <a href="https://www.instagram.com/ifrsoficial/?hl=pt-br" target="_blank">
                    <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
            </div>
            
            
        </div>
        <div class="divider"></div>
        <div class="rodape-logo">
            <img src="../assets/logo_ifrs.png" alt="Logo IFRS">
        </div>
    </footer>
</template>

<style scoped>
footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 80px;
    margin-top: 0;
    border-top: solid 0.5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 7px 0  rgba(255, 0, 0, 0.4);
    display: flex;
    justify-content: space-evenly;
    background: #FFF;
    color: #2c3e50;
}
footer img {
    margin: 0 auto;
    width: 200px;
    display: block;
    padding: 5px;
    border-radius: 5px;
}
.rodape-infos {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.sites {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
}
.sites a {
    color: #2c3e50;
}
.sites a:hover {
    color: rgba(44, 62, 80, 0.25);
    transition: 0.25s;
}
.divider {
  width: 1px;
  height: 100px;
  background-color: #ccc;
  margin: 0 20px;
}
.rodape-logo img {
    margin-top: 10px;
}

</style>
