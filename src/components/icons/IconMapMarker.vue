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
  name: 'IconMapMarker',
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
      path: 'M15 7.01165C15 8.36464 14.2589 9.98223 13.0571 11.995C12.6695 12.6442 12.2331 13.3354 11.7775 14.057C11.1958 14.9783 10.5828 15.9492 10 16.9456C9.41722 15.9492 8.80422 14.9783 8.22255 14.057C7.76691 13.3354 7.3305 12.6442 6.9429 11.995C5.74109 9.98223 5 8.36464 5 7.01165C5 4.24196 7.2404 2 10 2C12.7596 2 15 4.24196 15 7.01165Z',
      circle: {
        cx: 10,
        cy: 7,
        r: 2,
      },
    };
  }

  return {
    viewBox: '0 0 32 32',
    path: 'M24 11.3515C24 13.637 22.8045 16.2798 21.0069 19.4019C20.4115 20.436 19.7493 21.5234 19.062 22.6522C18.0516 24.3114 16.9869 26.0598 16 27.8595C15.0131 26.0598 13.9484 24.3114 12.938 22.6522C12.2507 21.5234 11.5885 20.436 10.9931 19.4019C9.19553 16.2798 8 13.637 8 11.3515C8 6.70262 11.6175 3 16 3C20.3825 3 24 6.70262 24 11.3515Z',
    circle: {
      cx: 16,
      cy: 11,
      r: 4,
    },
  };
});
</script>