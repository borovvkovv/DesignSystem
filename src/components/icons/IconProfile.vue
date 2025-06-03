<template>
  <IconProfile20
    v-if="size <= 20"
    :size="size"
  />
  <IconProfile24
    v-else
    :size="size"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconProfile',
});
</script>

<script setup lang="ts">
import IconProfile20 from '@/components/icons/IconProfile20.vue';
import IconProfile24 from '@/components/icons/IconProfile24.vue';

defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});
</script>