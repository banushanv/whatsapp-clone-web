
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from '@/locales';
import App from './App.vue';
import router from './router';
import '../main.css';
import vue3GoogleLogin  from 'vue3-google-login';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app: any = createApp(App);
app.use(createPinia()).use(router).use(i18n);
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_APP_WHATS_APP_CLIENT_ID
});
app.mount('#app');
