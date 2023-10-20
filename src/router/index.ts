import { createRouter, createWebHistory } from 'vue-router';
import WhatsAppView from '@/views/WhatsAppView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WhatsAppView
    },
    {
      path: "/login",
      name: 'login',
      component: LoginView
    }
  ]
});

export default router;
