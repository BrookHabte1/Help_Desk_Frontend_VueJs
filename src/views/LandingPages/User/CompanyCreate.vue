<script setup>
import DefaultNavbar from "@/examples/navbars/NavbarDefaultLight.vue";
import FooterDefault from "../../../examples/footers/FooterDefault.vue";
import { useAuthStore } from "../../../stores/auth";
import { ref } from "vue";

const authStore = useAuthStore();
const form = ref({
  name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
});
</script>

<template>
  <DefaultNavbar light />
  <div class="mt-5">
    <div class="card-body border-bottom">
      <section>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-2 mx-auto mt-md-0 d-flex align-items-center">
              <div class="position-sticky" style="top: 100px !important">
                <h3 class="mt-4 mr-4">Add Company</h3>
              </div>
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="card-header px-4 py-3 text-dark">
                  {{ roles }}
                  <div class="overflow-hidden mb-5">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="card-body">
                          <div class="container">
                            <h6>
                              Please provide the Company details that you want
                              to add below.
                            </h6>
                            <form
                              class="text-start"
                              @submit.prevent="
                                authStore.handleCompanyRegister(form)
                              "
                            >
                              <div class="row">
                                <div class="col">
                                  <div class="mb-2">
                                    <label
                                      class="text-dark"
                                      for="ContactPersonName"
                                      >User Name</label
                                    >
                                    <input
                                      id="name"
                                      type="text"
                                      v-model="form.name"
                                      class="form-control"
                                    />
                                    <div v-if="authStore.errors.name">
                                      <span class="text-danger text-sm m2 p-2"
                                        >{{ authStore.errors.name[0] }}
                                      </span>
                                    </div>
                                  </div>
                                  <div class="mb-2">
                                    <label class="text-dark" for="email"
                                      >Email</label
                                    >
                                    <input
                                      type="text"
                                      v-model="form.email"
                                      class="form-control"
                                    />
                                    <div v-if="authStore.errors.email">
                                      <span class="text-danger text-sm m2 p-2"
                                        >{{ authStore.errors.email[0] }}
                                      </span>
                                    </div>
                                  </div>
                                  <div class="mb-2">
                                    <label class="text-dark" for="email"
                                      >Phone Number</label
                                    >
                                    <input
                                      type="text"
                                      v-model="form.phone_number"
                                      class="form-control"
                                    />
                                    <div v-if="authStore.errors.phone_number">
                                      <span class="text-danger text-sm m2 p-2"
                                        >{{ authStore.errors.phone_number[0] }}
                                      </span>
                                    </div>
                                  </div>
                                  <div class="mb-2">
                                    <label class="text-dark" for="password"
                                      >Password</label
                                    >
                                    <input
                                      id="name"
                                      type="text"
                                      v-model="form.password"
                                      class="form-control"
                                    />
                                    <div v-if="authStore.errors.password">
                                      <span class="text-danger text-sm m2 p-2"
                                        >{{ authStore.errors.password[0] }}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="mb-3">
                                <button
                                  type="submit"
                                  class="btn btn-dark"
                                  style="border-radius: 3px"
                                >
                                  Add Company
                                </button>
                              </div>
                            </form>
                          </div>
                          <Profile />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Profile />
    </div>
  </div>
  <Profile />
  <FooterDefault />
</template>

<style scoped>
input.form-control {
  background-color: #f8f9fa;
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
  background-color: #f8f9fa;
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
.btnnewa {
  color: white;
  border-radius: 3px;
  display: inline-block;
  margin-left: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #344767;
  transition: background-color 0.2s ease;
}

.btnnewa:hover {
  background-color: #243047;
}

.btnnewa:focus {
  outline: none;
}

.btnnewa:active {
  transform: translateY(1px);
}

.btnnewb {
  color: white;
  border-radius: 3px;
  display: inline-block;
  margin-left: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #ff0000;
  transition: background-color 0.2s ease;
}

.btnnewb:hover {
  background-color: #bb0000;
}

.btnnewb:focus {
  outline: none;
}

.btnnewb:active {
  transform: translateY(1px);
}
.crud-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

.crud-table th,
.crud-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.crud-table th {
  background-color: #343a40;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-align: center !important;
}

.crud-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.crud-table tbody tr:hover {
  background-color: #f5f5f5;
}

.crud-table button {
  padding: 9.3px 14px;
  border: none;
  background-color: #ff0000;
  color: white;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.3s ease;
  border-radius: 4px;
}

.crud-table button:hover {
  background-color: #cc0000;
}

.text-darks {
  color: black;
}
.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
