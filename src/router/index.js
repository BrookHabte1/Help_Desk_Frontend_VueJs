import axios from "axios";
import { useAuthStore } from "../stores/auth";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/LandingPages/MainPage/Home.vue";
import Login from "../views/LandingPages/User/Login.vue";
import ResetPassword from "../views/LandingPages/User/ResetPassword.vue";
import ForgotPassword from "../views/LandingPages/User/ForgotPassword.vue";
import Profile from "../views/LandingPages/User/Profile.vue";
import ManageSuperAdmin from "../views/LandingPages/Manage/ManageSuperAdmin.vue";
import ManageAdmin from "../views/LandingPages/Manage/ManageAdmin.vue";
import SuperAdminCreate from "../views/LandingPages/User/SuperAdminCreate.vue";
import SuperAdminEdit from "../views/LandingPages/User/SuperAdminUpdate.vue";
import CompanyCreate from "../views/LandingPages/User/CompanyCreate.vue";
import CompanyEdit from "../views/LandingPages/User/CompanyUpdate.vue";
import ContactPersonCreate from "../views/LandingPages/User/ContactUserCreate.vue";
import ContactPersonEdit from "../views/LandingPages/User/ContactUserUpdate.vue";
import CONTACT from "../views/LandingPages/ContactUs/ContactUs.vue";
import FaqCreate from "../views/LandingPages/FAQ/FaqCreate.vue";
import FaqEdit from "../views/LandingPages/FAQ/FaqEdit.vue";
import FeaturedTopicCreate from "../views/LandingPages/FeaturedTopic/FeaturedTopicCreate.vue";
import FeaturedTopicEdit from "../views/LandingPages/FeaturedTopic/FeaturedTopicEdit.vue";
import faq from "../views/LandingPages/FAQ/faq.vue";

const isAuthenticated = async () => {
  try {
    await axios.get("/api/user"); // Make a request to a protected route to check if the user is authenticated
    return true;
  } catch (error) {
    return false;
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/password-reset/:token",
      name: "ResetPassword",
      component: ResetPassword,
      meta: { requiresAuth: true },
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/",
      name: "about",
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: "/manage",
      name: "manage",
      component: ManageSuperAdmin,
      meta: { requiresAuth: true, roles: ["super_admin"] },
    },
    {
      path: "/manage_contact_users",
      name: "manage_contact_users",
      component: ManageAdmin,
      meta: { requiresAuth: true, roles: ["admin"] },
    },
    {
      path: "/manage/support_team/create",
      name: "SuperAdminCreate",
      component: SuperAdminCreate,
      meta: { requiresAuth: true, roles: ["super_admin"] },
    },
    {
      path: "/manage/support_team/:id/edit",
      name: "superAdminEdit",
      component: SuperAdminEdit,
      props: true,
      meta: { requiresAuth: true, roles: ["super_admin"] },
    },
    {
      path: "/manage/company/create",
      name: "CompanyCreate",
      component: CompanyCreate,
      meta: { requiresAuth: true, roles: ["super_admin"] },
    },
    {
      path: "/manage/company/:id/edit",
      name: "CompanyEdit",
      component: CompanyEdit,
      props: true,
      meta: { requiresAuth: true, roles: ["super_admin"] },
    },
    {
      path: "/manage/contact_person/create",
      name: "contactPersonCreate",
      component: ContactPersonCreate,
      meta: { requiresAuth: true, roles: ["admin"] },
    },
    {
      path: "/manage/contact_person/:id/edit",
      name: "contactPersonEdit",
      component: ContactPersonEdit,
      props: true,
      meta: { requiresAuth: true, roles: ["admin"] },
    },
    {
      path: "/featured_topic/create",
      name: "featuredTopicCreate",
      component: FeaturedTopicCreate,
      meta: { requiresAuth: true, roles: ["super_admin"] },
    },
    {
      path: "/featured_topic/:id/edit",
      name: "featuredTopicEdit",
      component: FeaturedTopicEdit,
      props: true,
      meta: { requiresAuth: true, roles: ["super_admin"] },
    },
    {
      path: "/faq",
      name: "faq",
      component: faq,
      meta: { requiresAuth: true },
    },
    {
      path: "/faq/create",
      name: "FaqCreate",
      component: FaqCreate,
      meta: { requiresAuth: true, roles: ["super_admin"] },
    },
    {
      path: "/faq/:id/edit",
      name: "FaqEdit",
      component: FaqEdit,
      meta: { requiresAuth: true, roles: ["super_admin"] },
      props: true,
    },
    {
      path: "/contact-us",
      name: "contact",
      component: CONTACT,
      meta: { requiresAuth: true, roles: ["contact_user"] },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);
  const authenticated = await isAuthenticated();

  let userRole; // Declare a variable to store the user role

  try {
    const response = await axios.get("/api/user");
    const user = response.data.data;
    const userStore = useAuthStore();
    userStore.setCurrentUser(user);
    userRole = user.role; // Assign the user role value
  } catch (error) {
    console.log("User logged out.");
  }

  if (requiresAuth && !authenticated) {
    next("/login");
  } else if (requiresAuth && authenticated) {
    // Check if the user has the appropriate role to access the route
    if (to.meta.roles && !to.meta.roles.includes(userRole[0])) {
      next("/"); // Redirect to an "Unauthorized" page or display a message
    } else {
      next(); // Allow the user to proceed to the requested route
    }
  } else {
    next(); // Allow the user to proceed to the requested route (no authentication required)
  }
});

export default router;
