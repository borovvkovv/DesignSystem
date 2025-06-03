<template>
  <div class="relative">
    <BaseSimpleDropDown
      v-if="isLinkContainsTabs && !isCollapsed"
      ref="baseSimpleDropDown"
    >
      <template #title="{ isDropDownShown }">
        <SideBarMenuLinkTitle
          :link="link"
          :is-drop-down-shown="isDropDownShown"
          :is-current-link="isCurrentLink"
          :is-collapsed="isCollapsed"
        />
      </template>
      <template #dropDown>
        <SideBarMenuLinkDropDown
          :tabs="link.tabs ?? []"
          :is-current-tab="isCurrentTab"
        />
      </template>
    </BaseSimpleDropDown>
    <SideBarMenuLinkTitle
      v-else
      :link="link"
      :is-drop-down-shown="false"
      :is-current-link="isCurrentLink"
      :is-collapsed="isCollapsed"
    />
    <AppIcon
      :icon="link.icon ?? IconName.IconNone"
      :class="['pointer-events-none absolute top-2.5 text-white', isCollapsed ? 'left-1/2 -translate-x-1/2' : 'left-3']"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBarMenuLink',
});
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import router from '@/router';
import type { RouteLocationMatched } from 'vue-router';
import type { HeaderTab, PortalLink } from '@/router/types';
import BaseSimpleDropDown from '@/components/selects/BaseSimpleDropDown.vue';
import SideBarMenuLinkDropDown from '@/components/side-bar/SideBarMenuLinkDropDown.vue';
import SideBarMenuLinkTitle from '@/components/side-bar/SideBarMenuLinkTitle.vue';
import { IconName } from '@/components/icons/models';
import AppIcon from '@/components/AppIcon.vue';

const props = defineProps<{
  link: PortalLink;
  isCollapsed: boolean;
}>();

const isLinkContainsTabs = computed(() => props.link.tabs?.length);
const matchedRouteLocation = computed<RouteLocationMatched[]>(() => router.currentRoute.value.matched);
const currentRouteName = computed(() => matchedRouteLocation.value.at(1)?.name);
const currentTabName = computed(() => matchedRouteLocation.value.at(2)?.name);
const isCurrentLink = computed(() => currentRouteName.value === props.link.to.name);
const isCurrentTab = (tab: HeaderTab) => isCurrentLink.value && currentTabName.value === tab.to.name;
const baseSimpleDropDown = ref();

const collapse = () => {
  baseSimpleDropDown.value?.setDropDownVisibility(false);
};

defineExpose({
  collapse,
});
</script>
