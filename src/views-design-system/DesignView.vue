<template>
  <div :class="['h-dvh w-dvw', 'flex']">
    <SideBar
      :links="designSystemLinks"
      :is-initially-collapsed="false"
      class="shrink-0"
    />
    <div class="grow overflow-auto p-8">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DesignView',
});
</script>

<script setup lang="ts">
import SideBar from '@/components/side-bar/SideBar.vue';
import { designSystemLinks } from '@/router/links';
</script>
