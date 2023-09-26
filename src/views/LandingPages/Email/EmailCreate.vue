<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import bg0 from "@/assets/img/bg9.jpg";
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header"
      :style="{ backgroundImage: `url(${bg0})` }"
      style="
        height: 230px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      "
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="ml-5">
            <div class="text-light mt-5">
              <a class="text-light fs-" href="/">Help</a> /
              <a class="text-light" href="http://localhost:3000/pages/emails"
                >Email</a
              >
              /
              <a class="text-light" href="" onclick="return false;"
                >Add Contact Info</a
              >
            </div>
            <h1 class="text-white pt-4">Contact Information</h1>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body">
    <section class="py-lg-">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="overflow-hidden mb-5">
              <div class="row">
                <div class="col-lg-8">
                  <div class="card-body">
                    <h3>Add Contact Information</h3>
                    <p>
                      Please provide the contact information of the customer
                      below.
                    </p>
                    <div class="container">
                      <ul
                        class="alert alert-warning"
                        v-if="Object.keys(this.errorList).length > 0"
                      >
                        <li
                          class="mb-0 ms-3 text-dark"
                          v-for="(error, index) in this.errorList"
                          :key="index"
                        >
                          {{ error[0] }}
                        </li>
                      </ul>
                      <div class="row">
                        <div class="col">
                          <div class="mb-2">
                            <label class="text-dark" for=""
                              >Contact Person Name</label
                            >
                            <input
                              type="text shadow"
                              v-model="model.email.ContactPersonName"
                              class="form-control"
                            />
                          </div>
                          <div class="mb-2">
                            <label class="text-dark" for="">Email</label>
                            <input
                              type="text shadow"
                              v-model="model.email.Email"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col">
                          <div class="mb-2">
                            <label class="text-dark" for="">Company Name</label>
                            <input
                              type="text"
                              v-model="model.email.CompanyName"
                              class="form-control"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="text-dark" for="">Phone Number</label>
                            <input
                              type="text"
                              v-model="model.email.PhoneNumber"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-3">
                        <button
                          type="button"
                          @click="saveEmail"
                          class="btn btn-dark"
                          style="border-radius: 3px"
                        >
                          Add Contact
                        </button>
                      </div>
                    </div>
                    <Profile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <DefaultFooter />
</template>
<script>
import axios from "axios";
export default {
  name: "emailCreate",
  data() {
    return {
      errorList: "",
      model: {
        email: {
          ContactPersonName: "",
          Email: "",
          CompanyName: "",
          PhoneNumber: "",
        },
      },
    };
  },
  methods: {
    saveEmail() {
      var mythis = this;
      axios
        .post("http://127.0.0.1:8000/api/emails", this.model.email)
        .then((res) => {
          alert(res.data.message);
          this.model.email = {
            ContactPersonName: "",
            Email: "",
            CompanyName: "",
            PhoneNumber: "",
          };
          this.errorList = "";
          this.$router.push("/pages/emails");
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              mythis.errorList = error.response.data.errors;
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
  },
};
</script>

<style scoped>
p {
  margin-right: -200px; /* Adjust the value as needed */
}
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
</style>
