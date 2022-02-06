import { createApp } from 'vue'
import App from './App.vue'

import Primevue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Checkbox from 'primevue/checkbox';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Checkbox", Checkbox);

app.use(Primevue);

app.mount('#app');
