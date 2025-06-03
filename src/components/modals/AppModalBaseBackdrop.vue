<template>
  <TransitionChild
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div class="fixed inset-0 bg-black-1 bg-opacity-50" />
  </TransitionChild>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppModalBaseBackdrop',
});
</script>

<script setup lang="ts">
import { TransitionChild } from '@headlessui/vue';
</script>
