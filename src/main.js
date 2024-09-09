import "bootstrap/dist/css/bootstrap.css";

// Chỉ import một phiên bản của Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-ui-kit/css/mdb.min.css";
// ... other imports
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/css/reset.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
