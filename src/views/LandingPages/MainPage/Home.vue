<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";
//dep
import Typed from "typed.js";

//sections
import Information from "./Sections/FeaturedTopics.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar transparent />
  <header class="bg-gradient-dark">
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
            <h1 class="text-white text-center pt-5">HOW CAN WE HELP?</h1>
            <p
              class="lead text-center text-white opacity-7"
              style="font-size: 17px"
            >
              If you want to discover how SES can help you do not hesitate to
              contact our team of industry experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body">
    <Information />
    <!-- <AboutTeam /> -->
    <Featuring />
    <!-- <Newsletter /> -->
  </div>
  <DefaultFooter />
</template>
