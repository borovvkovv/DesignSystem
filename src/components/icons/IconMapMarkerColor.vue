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
      fill="#0079C2"
      stroke="#0079C2"
      stroke-width="2"
    />
    <circle
      :cx="svgProp.circle.cx"
      :cy="svgProp.circle.cy"
      :r="svgProp.circle.r"
      fill="white"
      stroke="white"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconMapMarkerColor',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const prop = defineProps({
  size: {
    type: Number,
    required: false,
    default: 40,
  },
});

const svgProp = computed(() => {
  if (prop.size <= 40) {
    return {
      viewBox: '0 0 40 40',
      path: 'M33 14.3246C33 17.4822 31.1124 20.9606 28.3119 25.0452C27.4633 26.2828 26.5338 27.5721 25.5693 28.9097C23.7331 31.4566 21.7705 34.1787 20 37.0532C18.2295 34.1787 16.2669 31.4566 14.4307 28.9097C13.4662 27.5721 12.5367 26.2828 11.6881 25.0452C8.88762 20.9606 7 17.4822 7 14.3246C7 7.89713 12.7904 2 20 2C27.2096 2 33 7.89713 33 14.3246Z',
      circle: {
        cx: 20,
        cy: 15,
        r: 7,
      },
    };
  }

  return {
    viewBox: '0 0 64 64',
    path: 'M53 23.0388C53 28.2269 49.9247 33.8571 45.5315 40.2953C44.183 42.2715 42.7134 44.3195 41.1929 46.4384C38.1443 50.6868 34.8913 55.2201 32 60.031C29.1087 55.2201 25.8557 50.6868 22.8071 46.4384C21.2866 44.3195 19.817 42.2715 18.4685 40.2953C14.0753 33.8571 11 28.2269 11 23.0388C11 12.549 20.3767 3 32 3C43.6233 3 53 12.549 53 23.0388Z',
    circle: {
      cx: 32,
      cy: 24,
      r: 14,
    },
  };
});
</script>