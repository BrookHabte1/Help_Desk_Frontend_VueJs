import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/LandingPages/MainPage/Home.vue";
import EmailView from "../views/LandingPages/Email/EmailList.vue";
import EmailCreate from "../views/LandingPages/Email/EmailCreate.vue";
import EmailEdit from "../views/LandingPages/Email/EmailEdit.vue";
import CONTACT from "../views/LandingPages/ContactUs/ContactUs.vue";
import FAQ from "../views/LandingPages/FAQ/faq.vue";
import Login from "../views/LandingPages/User/Login.vue";
import Dashboard from "../views/LandingPages/User/Dashboard.vue";
import Register from "../views/LandingPages/User/Register.vue";
import ForgotPassword from "../views/LandingPages/User/FotgotPassword.vue";
import ResetPassword from "../views/LandingPages/User/ResetPassword.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/password-reset/:token",
      name: "ResetPassword",
      component: ResetPassword,
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "presentation",
      component: HomePage,
    },
    {
      path: "/",
      name: "about",
      component: HomePage,
    },
    {
      path: "/pages/emails",
      name: "emails",
      component: EmailView,
    },
    {
      path: "/pages/emails/create",
      name: "emailsCreate",
      component: EmailCreate,
    },
    {
      path: "/pages/emails/:id/edit",
      name: "emailsEdit",
      component: EmailEdit,
    },
    {
      path: "/pages/FAQ",
      name: "FAQ",
      component: FAQ,
    },
    {
      path: "/pages/contact",
      name: "contact",
      component: CONTACT,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
