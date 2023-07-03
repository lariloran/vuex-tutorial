import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NavbarNovo from './components/NavbarNovo.vue';
import Rodape from './components/Rodape.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(faEarthAmericas);
library.add(faFacebook);
library.add(faInstagram);

const app = createApp(App);

app.use(router);
app.use(store);
app.component("NavbarNovo", NavbarNovo);
app.component("Rodape", Rodape);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");
