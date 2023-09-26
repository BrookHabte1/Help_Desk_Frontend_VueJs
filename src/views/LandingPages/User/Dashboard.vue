<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../../../stores/auth";

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});
</script>

<template>
  <div v-if="authStore.user">
    <h1>{{ authStore.user.name }}</h1>
    <h2>{{ authStore.user.email }}</h2>
  </div>
  <div v-else>
    <h4>Go and login</h4>
  </div>
  <template v-if="authStore.user">
    <button
      @click="authStore.handleLogout"
      class="btn bg-dark text-white px-5 py-3"
    >
      Logout
    </button>
  </template>
  <template v-else>
    <div class="text-center">
      <a
        href="/login"
        class="btn bg-dark text-white px-5 py-3"
        style="border-radius: 4px"
        >Log in
      </a>
    </div>
    <div class="text-center">
      <a
        href="/register"
        class="btn bg-dark text-white px-5 py-3"
        style="border-radius: 4px"
        >Register
      </a>
    </div>
  </template>
</template>
