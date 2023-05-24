import { createRouter, defineNuxtMiddleware } from '@nuxtjs/composition-api';
import EPK from '~/pages/epk.vue';

export default createRouter({
  routes: [
    {
      path: '/epk',
      component: EPK,
    },
  ],
});
