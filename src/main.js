import "bootstrap/dist/js/bootstrap.js";
import "mdb-ui-kit/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/reset.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
