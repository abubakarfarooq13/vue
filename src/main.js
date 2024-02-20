import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/components/routes/Routes.js";
import './assets/tailwind.css'
createApp(App).use(router).mount("#app");
