<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import FooterDefaultForEmailLessThanAndEqualToOne from "../../../examples/footers/FooterDefaultForEmailListLessThanAndEqualToOne.vue";
import bg0 from "@/assets/img/bg9.jpg";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import { useAuthStore } from "../../../stores/auth";

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});
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
              <a class="text-light" href="/">Help</a> /
              <a class="text-light" href="" onclick="return false;">Email</a>
            </div>
            <h1 class="text-white pt-4">Contact Information</h1>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body" style="height: 335px">
    <section class="py-lg-">
      <div class="container">
        <div class="card-header px-4 py-3 text-dark">
          <table class="crud-table">
            <thead>
              <tr>
                <th>Contact Person</th>
                <th>Email</th>
                <th>Company Name</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class=""
                v-for="(email, index) in this.emails"
                :key="index"
                style="height=1px"
              >
                <td class="text-center">{{ email.ContactPersonName }}</td>
                <td class="text-center">{{ email.Email }}</td>
                <td class="text-center">{{ email.CompanyName }}</td>
                <td class="text-center">{{ email.PhoneNumber }}</td>
                <td class="text-center">
                  <router-link
                    :to="{ path: '/pages/emails/' + email.id + '/edit' }"
                    class="btn btn-dark mr-1"
                    style="border-radius: 3px"
                    >Edit</router-link
                  >
                  <button
                    type="button"
                    @click="deleteEmail(email.id)"
                    class="btn btn-primary ml-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <router-link
            to="/pages/emails/create"
            class="btn btn-dark mr-1 mt-3"
            style="border-radius: 4px"
          >
            Add Email
          </router-link>
        </div>
      </div>
    </section>
    <Profile />
  </div>
  <div v-if="totalEmails > 0">
    <DefaultFooter />
  </div>
  <div v-else>
    <FooterDefaultForEmailLessThanAndEqualToOne />
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "emails",
  data() {
    return {
      emails: [],
    };
  },
  mounted() {
    this.getEmails();
  },
  methods: {
    getEmails() {
      axios.get("http://127.0.0.1:8000/api/emails").then((res) => {
        this.emails = res.data.emails;
      });
    },

    deleteEmail(emailId) {
      if (confirm("Are you sure to delete this data?")) {
        axios
          .delete(`http://127.0.0.1:8000/api/emails/${emailId}/delete`)
          .then((res) => {
            alert(res.data.message);
            this.getEmails();
            this.$router.push("/");
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status === 404) {
                alert(error.response.data.message);
              }
            }
          });
      }
    },
  },
  computed: {
    totalEmails() {
      return this.emails.length;
    },
  },
};
</script>

<style scoped>
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
</style>
