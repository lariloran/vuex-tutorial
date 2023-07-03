import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NavbarNovo from './components/NavbarNovo.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.component("NavbarNovo", NavbarNovo);
app.mount("#app");
