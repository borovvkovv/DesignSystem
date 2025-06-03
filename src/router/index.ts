import { createRouter, createWebHistory } from 'vue-router';
import type { StrongRoutes } from '@/router/types';
import designSystemRoutes from '@/router/designSystemRoutes';

const routes: StrongRoutes = [designSystemRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
