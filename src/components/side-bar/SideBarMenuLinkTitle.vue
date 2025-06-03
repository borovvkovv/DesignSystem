<template>
  <div>
    <AppLink
      :to="getLink(link)"
      :class="[
        'group relative rounded',
        'px-3 py-2',
        'flex w-full items-center gap-x-4',
        'border border-transparent',
        isCurrentLink ? 'bg-blue-2' : 'hover:border-black-1/10 hover:bg-grey-5/10',
      ]"
      @mouseenter="(evt: MouseEvent) => sideBarMenuLinkTitlePopup?.showPopup(evt)"
      @mouseleave="() => sideBarMenuLinkTitlePopup?.closePopup()"
    >
      <div class="min-h-5.5 grow">
        <h5
          v-if="!isCollapsed"
          ref="linkTitle"
          class="ml-9 text-left text-white"
        >
          {{ link.title }}
        </h5>
      </div>
      <AppIcon
        v-if="isLinkContainsTabs && !isCollapsed"
        :icon="isDropDownShown ? IconName.IconArrowUpTriangle : IconName.IconArrowDownTriangle"
        :size="16"
        :class="['shrink-0 group-hover:text-white', isDropDownShown ? 'text-blue-5' : 'text-blueGrey-1']"
      />
    </AppLink>
    <SideBarMenuLinkTitlePopup
      v-if="isCollapsed"
      ref="sideBarMenuLinkTitlePopup"
      :text="link.title"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBarMenuLinkTitle',
});
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PortalLink } from '@/router/types';
import AppIcon from '@/components/AppIcon.vue';
import AppLink from '@/components/app-link/AppLink.vue';
import { IconName } from '@/components/icons/models';
import type { RouteLocationNamedRaw } from 'vue-router';
import SideBarMenuLinkTitlePopup from '@/components/popup/SideBarMenuLinkTitlePopup.vue';

const props = defineProps<{
  link: PortalLink;
  isCurrentLink: boolean;
  isDropDownShown: boolean;
  isCollapsed?: boolean;
}>();

const linkTitle = ref<HTMLElement | undefined>();
const isLinkContainsTabs = computed(() => props.link.tabs?.length);
const sideBarMenuLinkTitlePopup = ref();

const getLink = (link: PortalLink): RouteLocationNamedRaw | undefined => {
  if (isLinkContainsTabs.value) {
    if (props.isCollapsed) {
      return link.tabs?.at(0).to;
    }

    return undefined;
  }
  return link.to;
};
</script>
