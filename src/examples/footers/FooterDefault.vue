<script setup>
import { RouterLink } from "vue-router";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "SES",
      route: "/",
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-facebook text-lg opacity-8 text-light"></i>',
        link: "https://www.facebook.com/SES.Satellites",
      },
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8 text-light"></i>',
        link: "https://twitter.com/SES_Satellites",
      },
      {
        icon: '<i class="fab fa-linkedin text-lg opacity-8 text-light"></i>',
        link: "https://www.linkedin.com/company/9157?trk=tyah",
      },
      {
        icon: '<i class="fab fa-instagram text-lg opacity-8 text-light"></i>',
        link: "https://www.instagram.com/ses_satellites/",
      },
      {
        icon: '<i class="fab fa-youtube text-lg opacity-8 text-light"></i>',
        link: "https://www.youtube.com/ses",
      },
    ],
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => [
      {
        items: [
          {
            name: "Help & Support",
            href: "/",
          },
        ],
      },
      {
        items: [
          {
            name: "FAQs",
            href: "",
          },
        ],
      },
      {
        items: [
          {
            name: "Contact Us",
            href: "/",
          },
        ],
      },
      {},
    ],
  },
});
</script>
<template>
  <!-- <div class="pt-1 pb-1" style="background-color:#242424;">
    <div class="row pb-4 pt-4" style="background-color:#242424; width:100%">
      <div class="col-7">
        <div class="text-white text-center pl-5" style="text:center; width:600px; font-family: Gravitas one; font-weight: bold; font-size: 45px; line-height:0.9; word-spacing: -0.2rem;:1; text-shadow: 0.5px 0.5px, 0.5px 0.5px, 0.5px 0.5px;">TAKE YOUR STORY ANYWHERE</div>
      </div>
      <div class="col-4">
          <h6 class="text-white pl-4 pt-4" style="font-size: 17px">Get ready to take it anywhere you choose with SES.</h6>
      </div>
    </div>
  </div>
  <footer class="footer pt-4" style="background-color:#0C0C0C; color:white;">
    <div class="container">
      <div class="row">
        <div class="col-md-3 ms-auto">
          <div>
            <a class="pl-5" :href="brand.route">
              <svg width="100" height="44.5" viewBox="0 0 194 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.5457 23.7803V71.5163C53.5457 82.1701 59.0908 87.7978 69.5797 87.7978H99.2001V74.6731H76.1142C72.2795 74.6731 70.0808 72.3518 70.0808 68.3042V61.7955V61.5906H70.2845H95.4398V48.7325H70.2845H70.0808V48.5244V37.0155V36.8075H70.2845H98.007V23.7803H53.5457Z" fill="#fff"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.559364 87.9597C6.00104 88.6099 13.1628 89.0001 19.7653 89.0001C28.9479 89.0001 33.9466 88.067 38.2049 85.5702C44.0119 82.163 46.9542 76.2135 46.9542 67.8841C46.9542 56.8271 42.004 51.2027 29.8629 48.4783C28.9059 48.2637 28.0005 48.0654 27.1566 47.8833C20.0401 46.3423 16.7906 45.6401 16.7906 41.108C16.7906 35.9648 22.1094 35.5389 28.0393 35.5389C33.7364 35.5389 39.0455 36.4525 43.9375 37.0799L43.8664 23.9877C42.3435 23.7861 34.4025 22.4402 26.2416 22.4402C21.8669 22.4402 16.7938 22.5767 11.9471 24.2088C4.13218 26.8389 0 33.2924 0 42.8636C0 53.4785 4.79501 58.5892 17.6959 61.7298C27.5414 64.1259 30.1151 64.9354 30.1151 69.3959C30.1151 75.0983 24.4956 75.5503 17.1495 75.5503C11.8889 75.5503 6.31144 75.1049 0.559364 74.2271V87.9597Z" fill="#fff"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M106.489 87.9597C111.931 88.6099 119.096 89.0001 125.702 89.0001C134.878 89.0001 139.88 88.067 144.141 85.5702C149.945 82.163 152.887 76.2135 152.887 67.8841C152.887 56.8271 147.937 51.2027 135.796 48.4783C134.836 48.2637 133.937 48.0654 133.09 47.8833C125.97 46.3423 122.724 45.6401 122.724 41.108C122.724 35.9648 128.046 35.5389 133.972 35.5389C139.67 35.5389 144.975 36.4525 149.867 37.0799L149.796 23.9877C148.277 23.7861 140.336 22.4402 132.175 22.4402C127.8 22.4402 122.727 22.5767 117.88 24.2088C110.062 26.8422 105.93 33.2924 105.93 42.8636C105.93 53.4785 110.728 58.5892 123.629 61.7298C133.471 64.1259 136.048 64.9354 136.048 69.3959C136.048 75.0983 130.429 75.5503 123.083 75.5503C117.825 75.5503 112.241 75.1049 106.489 74.2271V87.9597Z" fill="#fff"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M175.783 0L194 37.7128C188.306 35.6646 182.169 34.5462 175.777 34.5462C169.388 34.5462 163.258 35.6614 157.57 37.7096L175.783 0Z" fill="#ffff"></path>
              </svg>
            </a>
            <h6 class="font-weight-bolder mb-4"></h6>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-2 col-sm-6 col-6 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 mt-4 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a class="nav-link text-light" :href="item.href" target="_blank">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-light mb-4 text-sm font-weight-normal">
              © 2023 SES SA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer> -->
  <footer class="footer" style="margin-top: auto; bottom: 0; width: 100%; background-color:#0C0C0C; color:white; margin-top: auto; padding: 20px;">
    <div class="container z-index-1 position-relative">
      <div class="row">
        <div class="col-lg-4 mb-lg-0 text-lg-start text-center">
          <div class="mb-3 ml-5 mt-4">
            <a class="pl-5" :href="brand.route">
              <svg width="100" height="44.5" viewBox="0 0 194 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M53.5457 23.7803V71.5163C53.5457 82.1701 59.0908 87.7978 69.5797 87.7978H99.2001V74.6731H76.1142C72.2795 74.6731 70.0808 72.3518 70.0808 68.3042V61.7955V61.5906H70.2845H95.4398V48.7325H70.2845H70.0808V48.5244V37.0155V36.8075H70.2845H98.007V23.7803H53.5457Z" fill="#fff"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.559364 87.9597C6.00104 88.6099 13.1628 89.0001 19.7653 89.0001C28.9479 89.0001 33.9466 88.067 38.2049 85.5702C44.0119 82.163 46.9542 76.2135 46.9542 67.8841C46.9542 56.8271 42.004 51.2027 29.8629 48.4783C28.9059 48.2637 28.0005 48.0654 27.1566 47.8833C20.0401 46.3423 16.7906 45.6401 16.7906 41.108C16.7906 35.9648 22.1094 35.5389 28.0393 35.5389C33.7364 35.5389 39.0455 36.4525 43.9375 37.0799L43.8664 23.9877C42.3435 23.7861 34.4025 22.4402 26.2416 22.4402C21.8669 22.4402 16.7938 22.5767 11.9471 24.2088C4.13218 26.8389 0 33.2924 0 42.8636C0 53.4785 4.79501 58.5892 17.6959 61.7298C27.5414 64.1259 30.1151 64.9354 30.1151 69.3959C30.1151 75.0983 24.4956 75.5503 17.1495 75.5503C11.8889 75.5503 6.31144 75.1049 0.559364 74.2271V87.9597Z" fill="#fff"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M106.489 87.9597C111.931 88.6099 119.096 89.0001 125.702 89.0001C134.878 89.0001 139.88 88.067 144.141 85.5702C149.945 82.163 152.887 76.2135 152.887 67.8841C152.887 56.8271 147.937 51.2027 135.796 48.4783C134.836 48.2637 133.937 48.0654 133.09 47.8833C125.97 46.3423 122.724 45.6401 122.724 41.108C122.724 35.9648 128.046 35.5389 133.972 35.5389C139.67 35.5389 144.975 36.4525 149.867 37.0799L149.796 23.9877C148.277 23.7861 140.336 22.4402 132.175 22.4402C127.8 22.4402 122.727 22.5767 117.88 24.2088C110.062 26.8422 105.93 33.2924 105.93 42.8636C105.93 53.4785 110.728 58.5892 123.629 61.7298C133.471 64.1259 136.048 64.9354 136.048 69.3959C136.048 75.0983 130.429 75.5503 123.083 75.5503C117.825 75.5503 112.241 75.1049 106.489 74.2271V87.9597Z" fill="#fff"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M175.783 0L194 37.7128C188.306 35.6646 182.169 34.5462 175.777 34.5462C169.388 34.5462 163.258 35.6614 157.57 37.7096L175.783 0Z" fill="#ffff"></path>
              </svg>
            </a>
          </div>
          <ul
            class="nav justify-content-lg-start justify-content-center mb-2 ml-5 mt-sm-0"
          >
            <li class="nav-item mr-4">
              <RouterLink
                :to="{ name: 'about' }"
                class="hover-link border-radius-md"
              >
                <span class="font-weight-bolder">Help</span>
              </RouterLink>
            </li>
            <li class="nav-item mr-4">
              <RouterLink
                class="hover-link border-radius-md"
                :to="{ name: 'FAQ' }"
              >
                <span class="font-weight-bolder">FAQs</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                class="hover-link border-radius-md"
                :to="{ name: 'contact' }"
              >
                <span class="font-weight-bolder">Contact Us</span>
              </RouterLink>
            </li>
          </ul>
          <p class="text-sm text-white opacity-8 ml-4 mt-3">
            Copyright © {{ new Date().getFullYear() }} SES SA. All rights
            reserved.
          </p>
        </div>
        <div class="col-lg-6 my-4 ms-auto text-center">
          <div class="text-white ms-auto text-center pl-5" style="font-family: Gravitas one; font-weight: bold; font-size: 45px; line-height:0.9; word-spacing: -0.2rem;:1; text-shadow: 0.5px 0.5px, 0.5px 0.5px, 0.5px 0.5px;">TAKE YOUR STORY ANYWHERE</div>

          <div class="mt-3"
            style="display: flex;
            justify-content: center;
            align-items: center;">
            <ul class="d-flex flex-row ms-n3 nav mt-sm-0">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-2 mt-2 "
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hover-link {
  color: white;
  transition: color 0.2s; /* Add a smooth transition effect */
}

.hover-link:hover {
  color: #9DB2BF;
}

.hover-line {
  color: white;
  display: inline-block;
  position: relative;
}

.hover-line:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px; /* Adjust the height of the line here */
  width: 100%;
  height: 0.5px; /* Adjust the thickness of the line here */
  background-color: white;
}


svg path {
  transition: fill 0.2s; /* Add transition effect */
}

svg:hover path {
  fill: #9DB2BF; /* Change the fill color when hovered */
}
.nav-link {
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;
  height: 0.5px;
  background-color: #fff; /* Change this to the desired color */
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}
</style>
