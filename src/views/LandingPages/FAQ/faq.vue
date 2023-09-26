<script setup>
// example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import bg0 from "@/assets/img/bg9.jpg";
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
      <div class="w-75 mb-5">
        <p class="mt-4 text-dark font-weight-bold">
          Now that you're familiar with our organization, you may be interested
          in discovering the latest inquiries raised by our customers. Here are
          the most frequently asked questions we receive.
        </p>
      </div>
      <div class="container w-75">
        <div class="accordion ml-1" id="accordionPanelsStayOpenExample">
          <div class="accordion-item border-top border-bottom">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button collapsed text-dark text-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                1. Selected Item #1
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
          <div
            class="accordion-item border-bottom border-black"
            style="border: "
          >
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed text-dark text-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                2. Selected Item #2
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
                3. Selected Item #3
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
                4. Selected Item #4
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
                5. Selected Item #5
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
          <div class="accordion-item border-bottom">
            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
              <button
                class="accordion-button collapsed text-dark text-bold"
                style=""
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix"
              >
                6. Selected Item #6
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSix"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingSix"
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
            <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
              <button
                class="accordion-button collapsed text-dark text-bold"
                style=""
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSeven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSeven"
              >
                7. Selected Item #7
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSeven"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingSeven"
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
            <h2 class="accordion-header" id="panelsStayOpen-headingEight">
              <button
                class="accordion-button collapsed text-dark text-bold"
                style=""
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseEight"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseEight"
              >
                8. Selected Item #8
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseEight"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingEight"
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
            <h2 class="accordion-header" id="panelsStayOpen-headingNine">
              <button
                class="accordion-button collapsed text-dark text-bold"
                style=""
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseNine"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseNine"
              >
                9. Selected Item #9
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseNine"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingNine"
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
            <h2 class="accordion-header" id="panelsStayOpen-headingTen">
              <button
                class="accordion-button collapsed text-dark text-bold"
                style=""
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTen"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTen"
              >
                10. Selected Item #10
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTen"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingTen"
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
            <h2 class="accordion-header" id="panelsStayOpen-headingEleven">
              <button
                class="accordion-button collapsed text-dark text-bold"
                style=""
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseEleven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseEleven"
              >
                11. Selected Item #11
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseEleven"
              class="accordion-collapse collapse text-dark"
              aria-labelledby="panelsStayOpen-headingEleven"
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
      <div class="text-center mb-3">
        <a
          href="/pages/contact"
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
