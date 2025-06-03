<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProps.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      :x="svgProps.rect1.x"
      :y="svgProps.rect1.y"
      width="4"
      :height="svgProps.rect1.height"
      fill="#C4EAFF"
    />
    <rect
      :x="svgProps.rect2.x"
      :y="svgProps.rect2.y"
      width="4"
      :height="svgProps.rect2.height"
      fill="#C4EAFF"
    />
    <path
      :d="svgProps.path.d1"
      stroke="#0079C2"
      stroke-width="2"
    />
    <line
      :x1="svgProps.line.x1"
      :y1="svgProps.line.y1"
      :x2="svgProps.line.x2"
      :y2="svgProps.line.y2"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      :d="svgProps.path.d2"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      :d="svgProps.path.d3"
      fill="#C4EAFF"
    />
    <path
      :d="svgProps.path.d4"
      stroke="#0079C2"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconSupportMessageColor',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 48,
  },
});

const svgProps = computed(() => {
  if (props.size <= 48) {
    return {
      viewBox: '0 0 48 48',
      rect1: {
        x: 30,
        y: 4,
        height: 14,
      },
      rect2: {
        x: 30,
        y: 32,
        height: 12,
      },
      path: {
        d1: 'M34 18V6C34 4.34315 32.6569 3 31 3H11C9.34315 3 8 4.34315 8 6V42C8 43.6569 9.34315 45 11 45H31C32.6569 45 34 43.6569 34 42V30',
        d2: 'M17 4C17 3.44772 17.4477 3 18 3H25C25.5523 3 26 3.44772 26 4V5C26 5.55228 25.5523 6 25 6H18C17.4477 6 17 5.55228 17 5V4Z',
        d3: 'M37 19L21.5 19C20.6716 19 20 19.6716 20 20.5C20 21.3284 20.6716 22 21.5 22L35 22C36.1046 22 37 22.8954 37 24L37 29C37 30.1046 37.8954 31 39 31C40.1046 31 41 30.1046 41 29L41 22L41 21C41 19.8954 40.1046 19 39 19L37 19Z',
        d4: 'M21 20C21 18.8954 21.8954 18 23 18H39C40.1046 18 41 18.8954 41 20V23.3631V28.1429C41 29.2474 40.1046 30.1429 39 30.1429H33.8L27.4 35V30.1429H23C21.8954 30.1429 21 29.2474 21 28.1429V23.3631V20Z',
      },
      line: {
        x1: 19,
        y1: 41,
        x2: 24,
        y2: 41,
      },
    };
  }

  return {
    viewBox: '0 0 64 64',
    rect1: {
      x: 42,
      y: 3.99997,
      height: 19,
    },
    rect2: {
      x: 42,
      y: 39,
      height: 20,
    },
    path: {
      d1: 'M46 24V7C46 5.34315 44.6569 4 43 4H15C13.3431 4 12 5.34314 12 7V57C12 58.6569 13.3431 60 15 60H43C44.6569 60 46 58.6569 46 57V37.5',
      d2: 'M23 5C23 4.44772 23.4477 4 24 4H34C34.5523 4 35 4.44772 35 5V6C35 6.55228 34.5523 7 34 7H24C23.4477 7 23 6.55228 23 6V5Z',
      d3: 'M49 24L28.5 24C27.6716 24 27 24.6715 27 25.5C27 26.3284 27.6716 27 28.5 27L47 27C48.1046 27 49 27.8954 49 29L49 37C49 38.1045 49.8954 39 51 39C52.1046 39 53 38.1045 53 37L53 27L53 26C53 24.8954 52.1046 24 51 24L49 24Z',
      d4: 'M28 25C28 23.8954 28.8954 23 30 23H51C52.1046 23 53 23.8954 53 25V29.625V36C53 37.1045 52.1046 38 51 38H44L36 44V38H30C28.8954 38 28 37.1045 28 36V29.625V25Z',
    },
    line: {
      x1: 26,
      y1: 56,
      x2: 32,
      y2: 56,
    },
  };
});
</script>