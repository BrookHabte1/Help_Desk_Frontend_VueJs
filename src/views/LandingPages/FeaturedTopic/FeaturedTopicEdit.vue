<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import bg0 from "@/assets/img/bg9.jpg";
import { onMounted } from "vue";
import useFeaturedTopics from "../../../composables/featuredTopic";

const { featuredTopic, getFeaturedTopic, updateFeaturedTopic, errors } =
  useFeaturedTopics();
const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

onMounted(() => getFeaturedTopic(props.id));
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
              <a class="text-light" href="http://localhost:3000/manage"
                >Manage</a
              >
              /
              <a class="text-light" href="" onclick="return false;"
                >Edit Featured Topic Info</a
              >
            </div>
            <h1 class="text-white pt-4">User Resources</h1>
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
                    <h3>Edit Featured Topic</h3>
                    <p>
                      Please Fill the Featured Topic information that you want
                      to update below.
                    </p>
                    <div class="container">
                      <form
                        class="text-start"
                        @submit.prevent="updateFeaturedTopic($route.params.id)"
                      >
                        <div class="row">
                          <div class="col">
                            <div class="mb-2">
                              <label class="text-dark" for="ContactPersonName"
                                >Featured Topic</label
                              >
                              <input
                                id="ContactPersonName"
                                type="t ext"
                                v-model="featuredTopic.title"
                                class="form-control"
                              />
                              <div v-if="errors.title">
                                <span class="text-danger text-sm m2 p-2"
                                  >{{ errors.title[0] }}
                                </span>
                              </div>
                            </div>
                            <div class="mb-2">
                              <label class="text-dark" for="Email"
                                >Description</label
                              >
                              <textarea
                                type="text"
                                v-model="featuredTopic.description"
                                class="form-control"
                                style="resize: none; height: 100px"
                              />
                              <div v-if="errors.description">
                                <span class="text-danger text-sm m2 p-2"
                                  >{{ errors.description[0] }}
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
                            Edit Featured Topic
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
    </section>
  </div>
  <DefaultFooter />
</template>

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
