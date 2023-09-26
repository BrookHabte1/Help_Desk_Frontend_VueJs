<script setup>
// example components

import ExampleCard from "../../components/ExampleCard.vue";

// images
import imgSigninCover from "@/assets/img/signin-cover.png";
import DefaultCounterCard from "../../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>
<template>
  <section class="py-3">
    <div class="container">
      <h1 class="text-center mb-2">Browse all topics</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-9 z-index-1 border-radius-xl mx-auto mx-aut py-2">
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
        <div class="accordion ml-5" id="accordionPanelsStayOpenExample">
          <div class="accordion-item border-bottom">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button collapsed text-dark text-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Selected Item #1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item border-bottom">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed text-dark text-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Selected Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item border-bottom">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed text-dark text-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Selected Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item border-bottom">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button
                class="accordion-button collapsed text-dark text-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Selected Item #4
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item border-bottom">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button
                class="accordion-button collapsed text-dark text-bold"
                style=""
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Selected Item #5
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
      <div class="text-center">
        <a
          href="/pages/contact"
          class="btn bg-dark text-white px-5 py-3"
          style="border-radius: 4px"
          >Contact Us
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
