<template>
  <SideBarMenuLink
    v-for="(link, index) in links"
    ref="sideBarMenuLinks"
    :key="index"
    :link="link"
    :is-collapsed="isCollapsed"
    :class="index > 0 ? 'mt-1.5' : undefined"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBarMenu',
});
</script>

<script setup lang="ts">
import { ref } from 'vue';
import SideBarMenuLink from '@/components/side-bar/SideBarMenuLink.vue';
import type { PortalLink } from '@/router/types';

defineProps<{
  isCollapsed: boolean;
  links: PortalLink[];
}>();

const sideBarMenuLinks = ref();

const collapse = () => {
  sideBarMenuLinks.value?.forEach((link: any) => link.collapse());
};

defineExpose({
  collapse,
});
</script>
