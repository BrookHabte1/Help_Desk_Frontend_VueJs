<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useAuthStore } from "../../../stores/auth";
import { useRoute } from "vue-router";

const route = useRoute();
const authStore = useAuthStore();

const form = ref({
  password: "",
  password_confirmation: "",
  email: route.query.email,
  token: route.params.token,
});
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
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    Forgot Password
                  </h4>
                  <div class="row mt-3">
                    <div class="col-2 text-center ms-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-facebook text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center px-1">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-github text-white text-lg"></i>
                      </a>
                    </div>
                    <div class="col-2 text-center me-auto">
                      <a class="btn btn-link px-3" href="javascript:;">
                        <i class="fa fa-google text-white text-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form
                  @submit.prevent="authStore.handleResetPassword(form)"
                  role="form"
                  class="text-start"
                >
                  <div class="col">
                    <div class="mb-2">
                      <label class="text-dark" for="">New Password</label>
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
                    <div class="mb-2">
                      <label class="text-dark" for="">Confirm password</label>
                      <input
                        type="password"
                        v-model="form.password_confirmation"
                        class="form-control"
                      />
                    </div>
                    <button
                      type="submit"
                      class="full-width-button btn btn-dark"
                      style="border-radius: 2px"
                    >
                      Reset Password
                    </button>
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
