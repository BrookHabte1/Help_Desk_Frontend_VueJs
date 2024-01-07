<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useAuthStore } from "../../../stores/auth";

const authStore = useAuthStore();

const form = ref({
  email: null,
  password: null,
});

//image
import login_background from "@/assets/img/Barb_GroupWatching_07.jpg";

// example components
import DefaultNavbarLogin from "@/examples/navbars/NavbarDefaultLogin.vue";
import Header from "@/examples/Header.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <DefaultNavbarLogin transparent />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage: `url(${login_background})`,
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-5 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="bg-gradient-success shadow-success border-radius py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Log in
                </h4>
              </div>
              <div class="card-body">
                <form
                  @submit.prevent="authStore.handleLogin(form)"
                  role="form"
                  class="text-start"
                >
                  <div class="col">
                    <div class="mb-2">
                      <label class="text-dark" for="">Email</label>
                      <input
                        type="email"
                        v-model="form.email"
                        class="form-control shadow"
                      />
                      <div v-if="authStore.errors.email">
                        <span class="text-danger text-sm m2 p-2">{{
                          authStore.errors.email[0]
                        }}</span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="text-dark" for="">Password</label>
                      <input
                        type="password"
                        v-model="form.password"
                        class="form-control shadow"
                      />
                      <div v-if="authStore.errors.password">
                        <span class="text-danger text-sm m2 p-2">{{
                          authStore.errors.password[0]
                        }}</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="full-width-button btn btn-dark"
                      style="border-radius: 2px"
                    >
                      Sign In
                    </button>
                    <div class="text-sm text-center mb-2">
                      <RouterLink
                        class="hover-link border-radius-md"
                        :to="{ name: 'ForgotPassword' }"
                      >
                        <span class="font-weight-bolder">Forgot Password?</span>
                      </RouterLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>

<style scoped>
.hover-link {
  transition: color 0.2s; /* Add a smooth transition effect */
}
.hover-link:hover {
  color: #9db2bf;
}

p {
  margin-right: -200px; /* Adjust the value as needed */
}
input.form-control {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  transition: box-shadow 0.3s ease;
}

input.form-control:focus {
  outline: none;
  border-color: #007bff; /* Updated border color on focus */
  box-shadow: 0 0 8px rgba(0, 74, 153, 0.5);
}

/* Error state */
.is-invalid input.form-control {
  border-color: #dc3545;
  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.1);
}

.invalid-feedback {
  color: #dc3545;
}

textarea.form-control {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  transition: box-shadow 0.3s ease;
}

textarea.form-control:focus {
  outline: none;
  border-color: #007bff; /* Updated border color on focus */
  box-shadow: 0 0 8px rgba(0, 74, 153, 0.5);
}

/* Error state */
.is-invalid textarea.form-control {
  border-color: #dc3545;
  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.1);
}
</style>
