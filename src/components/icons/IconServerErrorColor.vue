<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 56H34H46C47.1046 56 48 55.1046 48 54V36V10.5C48 9.39543 47.1046 8.5 46 8.5H3C1.89543 8.5 1 9.39543 1 10.5V54C1 55.1046 1.89543 56 3 56Z"
      fill="#FFF2F2"
      stroke="#F0535C"
      stroke-width="2"
    />
    <path
      d="M3 55H30.7872H43V37.3158V13H2V54C2 54.5523 2.44772 55 3 55Z"
      fill="white"
    />
    <path
      d="M1 20.5H48"
      stroke="#F0535C"
      stroke-width="2"
    />
    <path
      d="M45.2767 37.4875L33.6272 57.4857C32.4622 59.4857 33.9049 61.9958 36.2195 61.9958H59.3242C61.6291 61.9958 63.073 59.5046 61.9274 57.5047L50.4721 37.5064C49.3245 35.503 46.4388 35.4925 45.2767 37.4875Z"
      fill="#FFF2F2"
      stroke="#F0535C"
      stroke-width="2"
    />
    <path
      d="M43.7942 42.0504L34.4901 57.9919C33.7119 59.3252 34.6736 61 36.2174 61H54.4025C56.6897 61 58.1357 58.5431 57.0252 56.5435L49.0079 42.1062C47.879 40.0732 44.9663 40.0421 43.7942 42.0504Z"
      fill="white"
    />
    <path
      d="M48 44V53"
      stroke="#F0535C"
      stroke-width="2"
    />
    <circle
      cx="48"
      cy="56.5"
      r="1.5"
      fill="#F0535C"
    />
    <circle
      cx="29.5"
      cy="14.5"
      r="1.5"
      fill="#F0535C"
    />
    <circle
      cx="35.5"
      cy="14.5"
      r="1.5"
      fill="#F0535C"
    />
    <circle
      cx="41.5"
      cy="14.5"
      r="1.5"
      fill="#F0535C"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconServerErrorColor',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 64,
  },
});
</script>
