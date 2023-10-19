
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from '@/locales';
import App from './App.vue';
import router from './router';
import '../main.css';
const app = createApp(App);

app.use(createPinia());
app.use(router).use(i18n);

app.mount('#app');
