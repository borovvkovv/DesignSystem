<template>
  <div :class="['flex flex-col gap-y-1.5', 'pb-3.5 pt-4.5']">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      class="flex items-center gap-x-4 px-3"
    >
      <AppIcon
        :icon="IconName.IconNone"
        class="shrink-0 text-white"
      />
      <AppLink :to="tab.to">
        <span
          :class="[
            'text-size-5 text-left text-white',
            isCurrentTab(tab) ? 'border-b-blue-2' : 'border-b-transparent',
            'inline-block border-b-2 hover:border-b-blue-2',
          ]"
        >
          {{ tab.title }}
        </span>
      </AppLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBarMenuLinkDropDown',
});
</script>

<script setup lang="ts">
import type { HeaderTab } from '@/router/types';
import AppIcon from '@/components/AppIcon.vue';
import AppLink from '@/components/app-link/AppLink.vue';
import { IconName } from '@/components/icons/models';

defineProps<{
  tabs: HeaderTab[];
  isCurrentTab: (tab: HeaderTab) => boolean;
}>();
</script>
