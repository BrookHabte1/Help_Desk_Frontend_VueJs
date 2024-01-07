<script setup>
import DefaultNavbar from "@/examples/navbars/NavbarDefaultLight.vue";
import FooterDefault from "../../../examples/footers/FooterDefault.vue";
// import axios from "axios";

import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import useFaqs from "../../../composables/faq";
import useFeaturedTopics from "../../../composables/featuredTopic";
import useUsers from "../../../composables/allUsers";
import { useAuthStore } from "../../../stores/auth";

const authStore = useAuthStore();

const fetchData = async () => {
  try {
    await authStore.getUser();
  } catch (error) {
    return false;
  }
};

fetchData(); // Call the fetchData function

const {
  SuperAdmins,
  getSuperAdmins,
  Admins,
  getAdmins,
  ContactUsers,
  getContactUsers,
  destroySuperAdminUser,
  destroyAdminUser,
} = useUsers();
const { faqs, getFaqs, destroyFaq } = useFaqs();
const { featuredTopics, getFeaturedTopics, destroyFeaturedTopic } =
  useFeaturedTopics();

onMounted(() => getSuperAdmins());
onMounted(() => getAdmins());
onMounted(() => getContactUsers());
onMounted(() => getFaqs());
onMounted(() => getFeaturedTopics());
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      featuredTopics: [],
      pdfSrc: "",
    };
  },
  methods: {
    async fetchPDF(topicId) {
      try {
        const response = await axios.get(`/api/featured_topic/${topicId}/pdf`, {
          responseType: "arraybuffer",
        });
        const blob = new Blob([response.data], { type: "application/pdf" });
        this.pdfSrc = URL.createObjectURL(blob);
      } catch (error) {
        console.error("Failed to fetch PDF:", error);
      }
    },
    async getFeaturedTopics() {
      try {
        const response = await axios.get("/api/featured_topic");
        this.featuredTopics = response.data.data;
      } catch (error) {
        console.error("Failed to fetch featured topics:", error);
      }
    },
  },
  mounted() {
    this.getFeaturedTopics();
  },
};
</script>
<template>
  <DefaultNavbar light />
  <div class="mt-5">
    <div class="card-body border-bottom">
      <section>
        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-2 mx-auto mt-md-0 mt-3">
              <div class="position-sticky" style="top: 100px !important">
                <h3 class="mt-4">Users</h3>
              </div>
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="card-header px-4 py-3 text-dark">
                  <h3>Support Team</h3>
                  <table class="crud-table">
                    <thead>
                      <tr>
                        <th>Support Team Member</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class=""
                        v-for="user in SuperAdmins"
                        :key="user.id"
                        style="height=1px"
                      >
                        <td class="text-center">
                          {{ user.name }}
                        </td>
                        <td class="text-center">{{ user.email }}</td>
                        <td class="text-center">{{ user.phone_number }}</td>
                        <td class="text-center">
                          <router-link
                            :to="{
                              path: '/manage/support_team/' + user.id + '/edit',
                            }"
                            class="btn btn-dark mr-1"
                            style="border-radius: 3px"
                            >Edit</router-link
                          >
                          <button
                            @click="destroySuperAdminUser(user.id)"
                            class="btn btn-primary"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <router-link
                    to="/manage/support_team/create"
                    class="btn btn-dark mr-1 mt-3"
                    style="border-radius: 4px"
                  >
                    Add Admin
                  </router-link>
                </div>
              </div>
              <div class="row">
                <div class="card-header px-4 py-3 text-dark">
                  <h3>Company Names</h3>
                  <table class="crud-table">
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class=""
                        v-for="user in Admins"
                        :key="user.id"
                        style="height=1px"
                      >
                        <td class="text-center">{{ user.name }}</td>
                        <td class="text-center">{{ user.email }}</td>
                        <td class="text-center">{{ user.phone_number }}</td>
                        <td class="text-center">
                          <router-link
                            :to="{
                              path: '/manage/company/' + user.id + '/edit',
                            }"
                            class="btn btn-dark mr-1"
                            style="border-radius: 3px"
                            >Edit</router-link
                          >
                          <button
                            @click="destroyAdminUser(user.id)"
                            class="btn btn-primary"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <router-link
                    to="/manage/company/create"
                    class="btn btn-dark mr-1 mt-3"
                    style="border-radius: 4px"
                  >
                    Add Company
                  </router-link>
                </div>
              </div>
              <div class="row">
                <div class="card-header px-4 py-3 text-dark">
                  <h3>Contact Persons</h3>
                  <table class="crud-table">
                    <thead>
                      <tr>
                        <th>Contact Name</th>
                        <th>Email</th>
                        <th>Company Name</th>
                        <th>Phone Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class=""
                        v-for="user in ContactUsers"
                        :key="user.id"
                        style="height=1px"
                      >
                        <td class="text-center">
                          {{ user.name }}
                        </td>
                        <td class="text-center">{{ user.email }}</td>
                        <td class="text-center">{{ user.company }}</td>
                        <td class="text-center">{{ user.phone_number }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Profile />
    </div>
    <div class="card-body">
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-2 mt-md-0 mt-3">
              <div class="position-sticky" style="top: 100px !important">
                <h3 class="mt-4">User Resources</h3>
              </div>
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="card-header py-3 text-dark">
                  <div class="container ml-0 mt-4">
                    <h3>FAQ</h3>
                    <div class="container">
                      <div class="row">
                        <div
                          class="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div
                            class="accordion-item"
                            v-for="faq in faqs"
                            :key="faq.id"
                          >
                            <h2
                              class="accordion-header d-flex justify-content-between align-items-center"
                              :id="'flush-heading' + faq.id + '1'"
                            >
                              <button
                                class="accordion-button collapsed text-dark text-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="
                                  '#flush-collapse' + faq.id + '1'
                                "
                                aria-expanded="false"
                                :aria-controls="'flush-collapse' + faq.id + '1'"
                              >
                                {{ faq.question }}
                              </button>
                              <div class="d-flex align-items-center">
                                <router-link
                                  :to="{
                                    path: '/faq/' + faq.id + '/edit',
                                  }"
                                  class="btnnewa btn-dark mr-1"
                                  style="border-radius: 3px"
                                  >Edit</router-link
                                >
                                <button
                                  @click="destroyFaq(faq.id)"
                                  class="btnnewb btn-primary"
                                >
                                  Delete
                                </button>
                              </div>
                            </h2>
                            <div
                              :id="'flush-collapse' + faq.id + '1'"
                              class="accordion-collapse collapse"
                              :aria-labelledby="'flush-heading' + faq.id + '1'"
                              :data-bs-parent="'#accordionFlushExample'"
                            >
                              <div class="accordion-body text-dark">
                                {{ faq.answer }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="/faq/create" class="btnnewa mt-3"> Add FAQ </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="card-header py-3 text-dark">
                  <div class="container mb-5 mt-4">
                    <h3>Featured Topic</h3>
                    <div class="container">
                      <div class="row">
                        <div
                          class="accordion accordion-flush"
                          id="accordionFlushExample"
                        >
                          <div
                            class="accordion-item"
                            v-for="featuredTopic in featuredTopics"
                            :key="featuredTopic.id"
                          >
                            <h2
                              class="accordion-header d-flex justify-content-between align-items-center"
                              :id="'flush-heading' + featuredTopic.id + '2'"
                            >
                              <button
                                class="accordion-button collapsed text-dark text-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                :data-bs-target="
                                  '#flush-collapse' + featuredTopic.id + '2'
                                "
                                aria-expanded="false"
                                :aria-controls="
                                  'flush-collapse' + featuredTopic.id + '2'
                                "
                              >
                                {{ featuredTopic.title }}
                              </button>
                              <div class="d-flex align-items-center">
                                <router-link
                                  :to="{
                                    path:
                                      '/featured_topic/' +
                                      featuredTopic.id +
                                      '/edit',
                                  }"
                                  class="btnnewa btn-dark mr-1"
                                  style="border-radius: 3px"
                                  >Edit</router-link
                                >
                                <button
                                  @click="
                                    destroyFeaturedTopic(featuredTopic.id)
                                  "
                                  class="btnnewb btn-primary"
                                >
                                  Delete
                                </button>
                              </div>
                            </h2>
                            <div
                              :id="'flush-collapse' + featuredTopic.id + '2'"
                              class="accordion-collapse collapse"
                              :aria-labelledby="
                                'flush-heading' + featuredTopic.id + '2'
                              "
                              :data-bs-parent="'#accordionFlushExample'"
                            >
                              <div class="accordion-body text-dark">
                                {{ featuredTopic.description }}
                                {{ featuredTopics.file_data }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="/featured_topic/create" class="btnnewa mt-3">
                      Add Featured Topic
                    </a>
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
