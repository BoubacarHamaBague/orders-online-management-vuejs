import { createRouter, createWebHistory } from 'vue-router';
import LayoutView from '../views/LayoutView.vue';
import ProductsView from '@/views/ProductsView.vue';
import OrdersView from '@/views/OrdersView.vue';
import UsersView from '@/views/UsersView.vue';
import UserProfilView from '@/views/UserProfilView.vue';
import LoginView from '@/views/LoginView.vue';
import RegistrationView from '@/views/RegistrationView.vue';
import DashboardView from '@/views/DashboardView.vue';

const routes = [
  {
    redirect: '/login', // Redirige vers la page de login au démarrage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/home',
    name: 'Layout',
    component: LayoutView,
    children: [
      {
        path:'/home/dashboard',
        name: 'Dashboard',
        component:DashboardView,
        meta: { title: 'Tableau de bord' }
      },
      {
        path:'/home/products',
        name: 'Products',
        component: ProductsView,
        meta: { title: 'Produits' }
      }
      ,{
        path:'/home/orders',
        name: 'Orders',
        component: OrdersView,
        meta: { title: 'Commandes' }
      }
      ,{
        path:'/home/users',
        name: 'Users',
        component: UsersView,
        meta: { title: 'Utilisateurs' }
      }
      ,{
        path:'/home/profil',
        name: 'Profil',
        component: UserProfilView,
        meta: { title: 'Mon profile' }
      }
    ]
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;