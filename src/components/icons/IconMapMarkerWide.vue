<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProp.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :d="svgProp.path"
      stroke="currentColor"
      stroke-width="2"
    />
    <circle
      :cx="svgProp.circle.cx"
      :cy="svgProp.circle.cy"
      :r="svgProp.circle.r"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconMapMarkerWide',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const prop = defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});

const svgProp = computed(() => {
  if (prop.size <= 20) {
    return {
      viewBox: '0 0 20 20',
      path: 'M3 9C3 5.13401 6.13401 2 10 2C13.866 2 17 5.13401 17 9C17 11.6286 15.6969 13.6389 14.0429 15.2929C13.2146 16.1211 12.3189 16.8393 11.4798 17.4919C11.3674 17.5793 11.2548 17.6665 11.1426 17.7533C10.7445 18.0613 10.3525 18.3646 10 18.6577C9.64755 18.3646 9.2555 18.0613 8.85741 17.7533C8.74523 17.6665 8.63258 17.5793 8.52019 17.4919C7.68112 16.8393 6.78536 16.1211 5.95711 15.2929C4.30314 13.6389 3 11.6286 3 9Z',
      circle: {
        cx: 10,
        cy: 9,
        r: 3,
      },
    };
  }

  return {
    viewBox: '0 0 32 32',
    path: 'M5 13.7895C5 7.84722 9.90811 3 16 3C22.0919 3 27 7.84722 27 13.7895C27 17.8325 24.9536 20.9069 22.4242 23.3919C21.1588 24.6351 19.7945 25.709 18.5335 26.6725C18.3624 26.8033 18.1919 26.9329 18.023 27.0613C17.293 27.6163 16.5928 28.1487 16 28.6521C15.4072 28.1487 14.707 27.6163 13.977 27.0613C13.8081 26.9329 13.6376 26.8033 13.4665 26.6725C12.2055 25.709 10.8412 24.6351 9.57582 23.3919C7.04637 20.9069 5 17.8325 5 13.7895Z',
    circle: {
      cx: 16,
      cy: 14,
      r: 6,
    },
  };
});
</script>