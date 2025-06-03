<template>
  <IconIndicatorColor48
    v-if="size <= 48"
    :size="size"
  />
  <IconIndicatorColor64
    v-else
    :size="size"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconIndicatorColor',
});
</script>

<script setup lang="ts">
import IconIndicatorColor48 from '@/components/icons/IconIndicatorColor48.vue';
import IconIndicatorColor64 from '@/components/icons/IconIndicatorColor64.vue';

defineProps({
  size: {
    type: Number,
    required: false,
    default: 48,
  },
});
</script>