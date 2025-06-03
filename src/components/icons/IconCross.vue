<template>
  <IconCross20
    v-if="size <= 20"
    :size="size"
  />
  <IconCross24
    v-else
    :size="size"
  />
</template>

<script lang="ts">
export default {
  name: 'IconCross',
};
</script>

<script setup lang="ts">
import IconCross20 from '@/components/icons/IconCross20.vue';
import IconCross24 from '@/components/icons/IconCross24.vue';

defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});
</script>
