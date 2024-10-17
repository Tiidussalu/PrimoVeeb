import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Menu from '../components/Menu.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';
import Map from '../components/Map.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },
  { path: '/map', component: Map },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
