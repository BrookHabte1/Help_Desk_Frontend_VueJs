<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";
import { useAuthStore } from "../../stores/auth";

import ArrDark from "@/assets/img/down-arrow-dark.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

import bg1 from "../../assets/img/Top_Image.jpg";

const authStore = useAuthStore();

const fetchData = async () => {
  try {
    await authStore.getUser();
  } catch (error) {
    return false;
  }
};

fetchData(); // Call the fetchData function

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({}),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>

<template style="object-fit: cover">
  <div
    class="img-fluid"
    :style="{ backgroundImage: `url(${bg1})` }"
    style="height: 4px; width: 100%; background-size: cover"
  ></div>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3',
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        <svg
          width="100"
          height="44.5"
          viewBox="0 0 194 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.5457 23.7803V71.5163C53.5457 82.1701 59.0908 87.7978 69.5797 87.7978H99.2001V74.6731H76.1142C72.2795 74.6731 70.0808 72.3518 70.0808 68.3042V61.7955V61.5906H70.2845H95.4398V48.7325H70.2845H70.0808V48.5244V37.0155V36.8075H70.2845H98.007V23.7803H53.5457Z"
            fill="#fff"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.559364 87.9597C6.00104 88.6099 13.1628 89.0001 19.7653 89.0001C28.9479 89.0001 33.9466 88.067 38.2049 85.5702C44.0119 82.163 46.9542 76.2135 46.9542 67.8841C46.9542 56.8271 42.004 51.2027 29.8629 48.4783C28.9059 48.2637 28.0005 48.0654 27.1566 47.8833C20.0401 46.3423 16.7906 45.6401 16.7906 41.108C16.7906 35.9648 22.1094 35.5389 28.0393 35.5389C33.7364 35.5389 39.0455 36.4525 43.9375 37.0799L43.8664 23.9877C42.3435 23.7861 34.4025 22.4402 26.2416 22.4402C21.8669 22.4402 16.7938 22.5767 11.9471 24.2088C4.13218 26.8389 0 33.2924 0 42.8636C0 53.4785 4.79501 58.5892 17.6959 61.7298C27.5414 64.1259 30.1151 64.9354 30.1151 69.3959C30.1151 75.0983 24.4956 75.5503 17.1495 75.5503C11.8889 75.5503 6.31144 75.1049 0.559364 74.2271V87.9597Z"
            fill="#fff"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M106.489 87.9597C111.931 88.6099 119.096 89.0001 125.702 89.0001C134.878 89.0001 139.88 88.067 144.141 85.5702C149.945 82.163 152.887 76.2135 152.887 67.8841C152.887 56.8271 147.937 51.2027 135.796 48.4783C134.836 48.2637 133.937 48.0654 133.09 47.8833C125.97 46.3423 122.724 45.6401 122.724 41.108C122.724 35.9648 128.046 35.5389 133.972 35.5389C139.67 35.5389 144.975 36.4525 149.867 37.0799L149.796 23.9877C148.277 23.7861 140.336 22.4402 132.175 22.4402C127.8 22.4402 122.727 22.5767 117.88 24.2088C110.062 26.8422 105.93 33.2924 105.93 42.8636C105.93 53.4785 110.728 58.5892 123.629 61.7298C133.471 64.1259 136.048 64.9354 136.048 69.3959C136.048 75.0983 130.429 75.5503 123.083 75.5503C117.825 75.5503 112.241 75.1049 106.489 74.2271V87.9597Z"
            fill="#fff"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M175.783 0L194 37.7128C188.306 35.6646 182.169 34.5462 175.777 34.5462C169.388 34.5462 163.258 35.6614 157.57 37.7096L175.783 0Z"
            fill="#fff"
          ></path>
        </svg>
      </RouterLink>
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
        v-if="authStore.user"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item list-group-item mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
            >
              <RouterLink
                :to="{ name: 'about' }"
                class="border-radius-md hover-gray"
              >
                <span class="font-weight-bolder">Help</span>
              </RouterLink>
            </a>
          </li>
          <li class="nav-item list-group-item mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
            >
              <RouterLink
                class="hover-gray border-radius-md"
                :to="{ name: 'faq' }"
              >
                <span class="font-weight-bolder">FAQs</span>
              </RouterLink>
            </a>
          </li>
          <li
            class="nav-item list-group-item mx-2"
            v-if="authStore.authUser.data.role == 'contact_user'"
          >
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
            >
              <RouterLink
                class="hover-gray border-radius-md"
                :to="{ name: 'contact' }"
              >
                <span class="font-weight-bolder">Contact</span>
              </RouterLink>
            </a>
          </li>
          <li
            class="nav-item list-group-item"
            v-if="authStore.user.data.role == 'super_admin'"
          >
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
            >
              <RouterLink
                class="hover-gray border-radius-md"
                :to="{ name: 'manage' }"
              >
                <span class="font-weight-bolder">Manage</span>
              </RouterLink>
            </a>
          </li>
          <li
            class="nav-item list-group-item"
            v-if="authStore.user.data.role == 'admin'"
          >
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
            >
              <RouterLink
                class="hover-gray border-radius-md"
                :to="{ name: 'manage_contact_users' }"
              >
                <span class="font-weight-bolder">Manage</span>
              </RouterLink>
            </a>
          </li>
          <li class="nav-item dropdown dropdown-hover">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hi, {{ authStore.user.data.name }}
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-sm"
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      <a
                        class="dropdown-item py-2 ps-3 text-dark border-radius-sm text-bold"
                        href="/profile"
                        >Profile</a
                      >
                    </h6>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      <a
                        class="dropdown-item py-2 ps-3 border-radius-sm text-bold"
                        @click="authStore.handleLogout"
                        >Sign Out</a
                      >
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a
              :href="action.route"
              class="btn btn-sm mb-0"
              :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')"
              >{{ action.label }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.hover-gray {
  color: #fff;
  position: relative;
}

.hover-gray::after {
  content: "";
  position: absolute;
  bottom: -21px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff; /* Change this to the desired color */
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.hover-gray:hover::after {
  transform: scaleX(1);
}

svg path {
  transition: fill 0.3s; /* Add transition effect */
}

svg:hover path {
  fill: #eeeeee; /* Change the fill color when hovered */
}
</style>
