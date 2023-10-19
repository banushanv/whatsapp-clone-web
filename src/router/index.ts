import { createRouter, createWebHistory } from 'vue-router';
import WhatsAppView from '@/views/WhatsAppView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WhatsAppView
    }
  ]
});

export default router;
