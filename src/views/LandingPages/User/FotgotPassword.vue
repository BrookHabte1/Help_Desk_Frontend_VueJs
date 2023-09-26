<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useAuthStore } from "../../../stores/auth";

const authStore = useAuthStore();
const email = ref("");

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-5 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="bg-gradient-info shadow-success border-radius py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Forgot Password
                </h4>
              </div>
              <div class="card-body">
                <form
                  @submit.prevent="authStore.handleForgotPassword(email)"
                  role="form"
                  class="text-start"
                >
                  <div class="col">
                    <div
                      class="text-white text-center font-semibold bg-success rounded mr-3 mb-3"
                      v-if="authStore.status"
                    >
                      {{ authStore.status }}
                    </div>
                    <div class="mb-3">
                      <label class="text-dark" for="">Email</label>
                      <input
                        type="email"
                        v-model="email"
                        class="form-control shadow"
                      />
                      <div v-if="authStore.errors.email">
                        <span class="text-danger text-sm m2 p-2">{{
                          authStore.errors.email[0]
                        }}</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="full-width-button btn btn-dark"
                      style="border-radius: 2px"
                    >
                      Submit
                    </button>
                    <div v-if="authStore.status" class="text-sm text-center">
                      Don't have an account?
                      <a
                        href="/login"
                        class="text-success text-gradient font-weight-bold"
                        >Login</a
                      >
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
