<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
// sections
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
// image
import bg0 from "@/assets/img/bg9.jpg";
import { onMounted } from "vue";
//Vue Material Kit 2 components

// tooltip
import setTooltip from "@/assets/js/tooltip";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>
<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header"
      :style="{ backgroundImage: `url(${bg0})` }"
      style="
        height: 280px;
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
              <a class="text-light" href="" onclick="return false;"
                >Contact Us</a
              >
            </div>
            <h1 class="text-white pt-4">CONTACT US</h1>
            <p class="lead text-white opacity-7" style="font-size: 17px">
              If you want to discover how SES can help you develop your business
              do not hesitate to contact our team of industry experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <div
    class="card card-body"
    style="display: flex; flex-direction: column; min-height: 100%"
  >
    <Profile />
    <Posts />
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="overflow-hidden mb-5">
            <div class="row">
              <div class="col-lg-8">
                <div class="card-body">
                  <h3>Get in touch</h3>
                  <p>
                    If you have any questions or need help, please fill out the
                    form below. We do our best to respond as soon as possible.
                  </p>
                  <div class="container">
                    <form @submit.prevent="submitForm" class="text-start">
                      <div class="row">
                        <div class="col">
                          <div class="mb-2">
                            <label class="text-dark" for="ContactName"
                              >Contact Name</label
                            >
                            <input
                              type="text shadow"
                              class="form-control"
                              v-model="contactName"
                            />
                            <div v-if="errors.contactName">
                              <span class="text-danger text-sm m2 p-2"
                                >{{ errors.contactName[0] }}
                              </span>
                            </div>
                          </div>
                          <div class="mb-2">
                            <label class="text-dark" for="CompanyName"
                              >Company Name</label
                            >
                            <input
                              type="text"
                              class="form-control shadow"
                              v-model="companyName"
                            />
                            <div v-if="errors.companyName">
                              <span class="text-danger text-sm m2 p-2"
                                >{{ errors.companyName[0] }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="mb-2">
                            <label class="text-dark" for="ContactPersonEmail"
                              >Contact Person Email</label
                            >
                            <input
                              type="text"
                              class="form-control shadow"
                              v-model="contactEmail"
                            />
                            <div v-if="errors.contactEmail">
                              <span class="text-danger text-sm m2 p-2"
                                >{{ errors.contactEmail[0] }}
                              </span>
                            </div>
                          </div>
                          <div class="mb-2">
                            <label class="text-dark" for="phoneNumber"
                              >Telephone Number</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="phoneNumber"
                            />
                            <div v-if="errors.phoneNumber">
                              <span class="text-danger text-sm m2 p-2"
                                >{{ errors.phoneNumber[0] }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="text-dark" for="Message">Message</label>
                          <textarea
                            type="text"
                            class="form-control"
                            style="resize: none; height: 100px"
                            v-model="message"
                          />
                          <div v-if="errors.message">
                            <span class="text-danger text-sm m2 p-2"
                              >{{ errors.message[0] }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="pt-3 pb-3">
                        Please select this box if the information you have
                        provided is amharic.
                        <label>
                          <input type="checkbox" v-model="isAmharic" /> Amharic
                        </label>
                      </div>
                      <div>
                        <button
                          type="submit"
                          class="full-width-button btn btn-dark"
                          style="border-radius: 2px"
                        >
                          Send Message
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
  <DefaultFooter />
</template>

<script>
import axios from "axios";
// import { translate } from "@vitalets/google-translate-api";

export default {
  data() {
    return {
      isAmharic: false,
      contactName: "",
      contactEmail: "",
      companyName: "",
      phoneNumber: "",
      message: "",
      errors: {},
    };
  },
  methods: {
    submitForm() {
      const formData = {
        amharic: this.isAmharic,
        contactName: this.contactName,
        companyName: this.companyName,
        contactEmail: this.contactEmail,
        phoneNumber: this.phoneNumber,
        message: this.message,
      };

      this.sendEmail(formData);
    },
    sendEmail(formData) {
      axios
        .post("/api/sendEmail", formData)
        .then((response) => {
          console.log(response.data.amharic);
          (this.contactName = ""),
            (this.contactEmail = ""),
            (this.companyName = ""),
            (this.phoneNumber = ""),
            (this.message = "");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
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
