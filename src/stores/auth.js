import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  id: "user",
  state: () => ({
    authUser: null,
    authContacts: null,
    authErrors: [],
    authStatus: null,
    currentUserS: null,
  }),
  getters: {
    getCurrentUser() {
      return this.currentUserS;
    },
    getUserRole() {
      return this.currentUserS ? this.currentUserS.role : null;
    },
    currentUser: (state) => state.currentUser,
    user: (state) => state.authUser,
    contacts: (state) => state.authContacts,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus,
  },
  actions: {
    setCurrentUser(user) {
      this.currentUserS = user;
    },
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async fetchUser() {
      await this.getToken();
      try {
        const response = await axios.get("/api/user");
        this.currentUserS = response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    },

    async handleLogin(data) {
      this.authErrors = [];
      await this.getToken();

      try {
        await axios.post("/login", {
          email: data.email,
          password: data.password,
        });
        this.router.push("/");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleSuperAdminRegister(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/registerSuperAdmin", {
          name: data.name,
          email: data.email,
          phone_number: data.phone_number,
          password: data.password,
          password_confirmation: data.password,
        });
        this.router.push("/manage");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleCompanyRegister(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/registerAdmin", {
          name: data.name,
          email: data.email,
          phone_number: data.phone_number,
          password: data.password,
          password_confirmation: data.password,
        });
        this.router.push("/manage");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleContactPersonRegister(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await axios.post("/registerContactUser", {
          name: data.name,
          email: data.email,
          phone_number: data.phone_number,
          password: data.password,
          password_confirmation: data.password,
        });
        this.router.push("/manage");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleForgotPassword(email) {
      this.authErrors = [];
      try {
        const response = await axios.post("/forgot-password", {
          email: email,
        });
        this.authStatus = response.data.status;
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleLogout() {
      await axios.post("/logout");
      this.router.push("/login");
      this.authUser = null;
      this.setCurrentUser = null;
      window.location.reload();
    },
    async handleResetPassword(resetData) {
      this.authErrors = [];
      try {
        await axios.post("/reset-password", resetData);
        this.router.push("/login");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async getUser() {
      await this.getToken();
      const data = await axios.get("/api/user");
      this.authUser = data.data;
    },
    // async handleRegister(data) {
    //   console.log("Hi");
    //   this.authErrors = [];
    //   await this.getToken();
    //   try {
    //     await axios.post("/register", {
    //       name: data.name,
    //       email: data.email,
    //       phone_number: data.phone_number,
    //       password: data.password,
    //       password_confirmation: data.password_confirmation,
    //       role: 1,
    //     });
    //     this.router.push("/manage");
    //   } catch (error) {
    //     if (error.response.status === 422) {
    //       this.authErrors = error.response.data.errors;
    //     }
    //   }
    // },
  },
});
