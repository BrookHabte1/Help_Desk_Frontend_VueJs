<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
import useFeaturedTopics from "../../../composables/featuredTopic";

//image
import bg0 from "@/assets/img/bg9.jpg";
//dep
import Typed from "typed.js";

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

const { featuredTopics, getFeaturedTopics } = useFeaturedTopics();

onMounted(() => getFeaturedTopics());
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
      <span class="mask bg-gradient-dark opacity-2"></span>
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
    <section class="py-3">
      <div class="container">
        {{ authStore }}
        <h1 class="text-center mb-2">Browse all topics</h1>
        <div class="container">
          <div class="row">
            <div
              class="col-lg-9 z-index-1 border-radius-xl mx-auto mx-aut py-2"
            >
              <div class="row">
                <div class="col-md-4 position-relative">
                  <DefaultCounterCard
                    color="success"
                    title="FAQs"
                    description="We have a list of asked questions that are answered by our team."
                    divider="vertical"
                  />
                </div>
                <div class="col-md-4 position-relative">
                  <DefaultCounterCard
                    color="success"
                    title="Contact Us"
                    description="We are always with you have any kind of difficulties."
                    :count="15"
                    suffix="+"
                    :duration="3000"
                    divider="vertical"
                  />
                </div>
                <div class="col-md-4 position-relative">
                  <DefaultCounterCard
                    color="success"
                    title="Troublehooting"
                    description="Answer to most common configration issues."
                    :count="4"
                    :duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-bottom mt-5"></div>
        <h2 class="mt-4 ml-5">Featured Topics</h2>
        <div class="container w-80 mt-3">
          <div class="row">
            <div class="accordion accordion-flush" id="accordionFlushExample">
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
                    :data-bs-target="'#flush-collapse' + featuredTopic.id + '2'"
                    aria-expanded="false"
                    :aria-controls="'flush-collapse' + featuredTopic.id + '2'"
                  >
                    {{ featuredTopic.title }}
                  </button>
                </h2>
                <div
                  :id="'flush-collapse' + featuredTopic.id + '2'"
                  class="accordion-collapse collapse pl-5"
                  :aria-labelledby="'flush-heading' + featuredTopic.id + '2'"
                  :data-bs-parent="'#accordionFlushExample'"
                >
                  <div class="accordion-body text-dark">
                    {{ featuredTopic.description }}<br /><br />
                    <i
                      class="this_i fa fa-file-pdf text-lg opacity-8"
                      style="color: red"
                    ></i>
                    &nbsp;
                    <a
                      class="a_tag"
                      :href="featuredTopic.url"
                      target="_blank"
                      >{{ featuredTopic.name }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="mt-6 text-center">
          Didn't find an answer to your question?
        </h3>
        <div class="text-center text-dark mb-4">
          Feel free to contact us for more information on our additional
          services and custom work. Our team is here to assist you and provide
          detailed insights based on your specific needs. Reach out to us today
          and discover how we can help you achieve your goals.
        </div>
        <div class="text-center">
          <a
            href="/contact-us"
            class="btn bg-dark text-white px-5 py-3"
            style="border-radius: 4px"
            >Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
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

.a_tag {
  color: lightcoral;
  text-decoration: underline;
}
.a_tag:hover {
  color: red;
}
this_i {
  color: red;
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
.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
