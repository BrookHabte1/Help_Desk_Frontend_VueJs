<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
// sections
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Contact from "./Sections/ContactForm.vue";
// image
import bg0 from "@/assets/img/bg9.jpg";
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
    <Contact />
  </div>
  <DefaultFooter />
</template>
