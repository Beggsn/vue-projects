import { createApp } from "vue";
import App from "./App.vue";
import "./assets/reset.css";
import MySecondComponent from "@/components/MySecondComponent.vue";

const app = createApp(App);

app.component("MySecondComponent", MySecondComponent);
app.mount("#app");
