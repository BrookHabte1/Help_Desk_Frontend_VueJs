<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import bg0 from "@/assets/img/bg9.jpg";

import { onMounted } from "vue";
import useFaqs from "../../../composables/faq";

const { faqs, getFaqs } = useFaqs();

onMounted(() => getFaqs());
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
              <a class="text-light" href="" onclick="return false;">FAQ</a>
            </div>
            <h1 class="text-white pt-4">FAQ</h1>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <secton class="py-5">
    <div class="container">
      <div class="w-75 mb-2">
        <p class="mt-4 text-dark font-weight-bold">
          Now that you're familiar with our organization, you may be interested
          in discovering the latest inquiries raised by our customers. Here are
          the most frequently asked questions we receive.
        </p>
      </div>
      <div class="container w-90 ml-4 mt-4">
        <div class="container">
          <div class="row">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item" v-for="faq in faqs" :key="faq.id">
                <h2
                  class="accordion-header d-flex justify-content-between align-items-center"
                  :id="'flush-heading' + faq.id + '1'"
                >
                  <button
                    class="accordion-button collapsed text-dark text-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#flush-collapse' + faq.id + '1'"
                    aria-expanded="false"
                    :aria-controls="'flush-collapse' + faq.id + '1'"
                  >
                    {{ faq.question }}
                  </button>
                </h2>
                <div
                  :id="'flush-collapse' + faq.id + '1'"
                  class="accordion-collapse collapse pl-5"
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
      </div>
      <h3 class="mt-6 text-center">Didn't find an answer to your question?</h3>
      <div class="text-center text-dark mb-4">
        Feel free to contact us for more information on our additional services
        and custom work. Our team is here to assist you and provide detailed
        insights based on your specific needs. Reach out to us today and
        discover how we can help you achieve your goals.
      </div>
      <div class="text-center mb-3">
        <a
          href="/contact-us"
          class="btn bg-dark text-white px-5 py-3"
          style="border-radius: 4px"
          >Contact Us
        </a>
      </div>
    </div>
  </secton>
  <DefaultFooter />
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
