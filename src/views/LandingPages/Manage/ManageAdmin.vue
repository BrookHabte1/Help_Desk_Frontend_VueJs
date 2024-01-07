<script setup>
import DefaultNavbar from "@/examples/navbars/NavbarDefaultLight.vue";
import FooterDefault from "../../../examples/footers/FooterDefault.vue";
// import axios from "axios";

import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import useUsers from "../../../composables/allUsers";

const { contactAdmins, getContactUsersAdmins, destroyContactUser } = useUsers();

onMounted(() => getContactUsersAdmins());
</script>
<template>
  <DefaultNavbar light />
  <div class="mt-5">
    <div class="card-body border-bottom">
      <section>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-2 mx-auto mt-md-0 mt-3">
              <div class="position-sticky" style="top: 100px !important">
                <h3 class="mt-4">Users</h3>
              </div>
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="card-header px-4 py-3 text-dark">
                  <h3>Contact Persons</h3>
                  <table class="crud-table">
                    <thead>
                      <tr>
                        <th>Contact Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class=""
                        v-for="useradmin in contactAdmins"
                        :key="useradmin.id"
                        style="height=1px"
                      >
                        <td class="text-center">
                          {{ useradmin.name }}
                        </td>
                        <td class="text-center">{{ useradmin.email }}</td>
                        <td class="text-center">
                          {{ useradmin.phone_number }}
                        </td>
                        <td class="text-center">
                          <router-link
                            :to="{
                              path:
                                '/manage/contact_person/' +
                                useradmin.id +
                                '/edit',
                            }"
                            class="btn btn-dark mr-1"
                            style="border-radius: 3px"
                            >Edit</router-link
                          >
                          <button
                            @click="destroyContactUser(useradmin.id)"
                            class="btn btn-primary"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <router-link
                    to="/manage/contact_person/create"
                    class="btn btn-dark mr-1 mt-3"
                    style="border-radius: 4px"
                  >
                    Add Contact Person
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Profile />
    </div>
    <Profile />
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
