<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5189 2.46326C10.6618 1.92979 10.3452 1.38146 9.81175 1.23851C9.27829 1.09557 8.72995 1.41215 8.58701 1.94562L7.29291 6.77525L2.46328 5.48115C1.92982 5.33821 1.38148 5.65479 1.23854 6.18826C1.0956 6.72173 1.41218 7.27006 1.94565 7.41301L6.77528 8.7071L5.48118 13.5367C5.33824 14.0702 5.65482 14.6185 6.18829 14.7615C6.72175 14.9044 7.27009 14.5878 7.41303 14.0544L8.70713 9.22474L13.5368 10.5188C14.0702 10.6618 14.6186 10.3452 14.7615 9.81173C14.9044 9.27826 14.5879 8.72992 14.0544 8.58698L9.22476 7.29289L10.5189 2.46326Z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconPlusRotate',
});
</script>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    required: false,
    default: 16,
  },
});
</script>