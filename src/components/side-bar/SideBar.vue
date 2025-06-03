<template>
  <div
    ref="sideBarWrapper"
    :class="['h-full overflow-clip', isInitiallyCollapsed ? 'w-15' : 'w-65']"
  >
    <aside
      :class="[
        'h-full',
        'flex flex-col',
        'overflow-y-auto overflow-x-clip scrollbar-thin',
        isCollapsed ? 'w-15' : 'w-65',
      ]"
    >
      <SideBarLogo
        ref="sideBarLogo"
        :is-initially-collapsed="isInitiallyCollapsed"
        :is-collapsed="isCollapsed"
        class="w-65"
      />
      <div
        ref="sideBarMenuContainer"
        :class="['grow bg-darkBlue-2', 'flex flex-col', 'px-2', isInitiallyCollapsed ? 'pt-13' : 'pt-8']"
      >
        <SideBarMenu
          ref="sideBarMenu"
          :is-collapsed="isCollapsed"
          :links="links"
        />
        <SideBarCollapseButton
          ref="sideBarCollapseButton"
          :is-collapsed="isCollapsed"
          :is-initially-collapsed="isInitiallyCollapsed"
          class="mt-auto w-fit"
          @click:collapse="onCollapseClickHandler"
        />
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',
});
</script>

<script setup lang="ts">
import { onMounted, ref, useCssModule } from 'vue';
import SideBarMenu from '@/components/side-bar/SideBarMenu.vue';
import SideBarCollapseButton from '@/components/side-bar/SideBarCollapseButton.vue';
import SideBarLogo from '@/components/side-bar/SideBarLogo.vue';
import { SIDE_BAR_ANIMATION_DURATION_MS } from '@/components/side-bar/utils/models';
import { changeCollapse } from './utils';
import type { PortalLink } from '@/router/types';

const props = withDefaults(
  defineProps<{
    isInitiallyCollapsed?: boolean;
    links: PortalLink[];
  }>(),
  {
    isInitiallyCollapsed: true,
  },
);

const isCollapsed = ref<boolean>(props.isInitiallyCollapsed);
const styles = useCssModule();
const sideBarWrapper = ref<HTMLElement | undefined>();
const sideBarMenuContainer = ref<HTMLElement | undefined>();
const sideBarMenu = ref();
const sideBarCollapseButton = ref();
const sideBarLogo = ref();

const onCollapseClickHandler = () => {
  sideBarMenu.value?.collapse();
  sideBarCollapseButton.value?.collapse();
  sideBarLogo.value?.collapse();

  changeCollapse(
    sideBarMenuContainer.value,
    'collapse_menu_container',
    props.isInitiallyCollapsed,
    isCollapsed.value,
    styles,
  );

  changeCollapse(
    sideBarWrapper.value,
    'collapse',
    props.isInitiallyCollapsed,
    isCollapsed.value,
    styles,
    (isCollapsedLocal) => (isCollapsed.value = isCollapsedLocal),
  );
};

onMounted(() => {
  sideBarWrapper.value?.addEventListener('transitionend', (e) => {
    if (e.target === sideBarWrapper.value) {
      isCollapsed.value = sideBarWrapper.value?.classList.contains(styles.collapse) ?? false;
    }
  });
});
</script>

<style module lang="scss">
.collapse {
  transition: all v-bind('`${SIDE_BAR_ANIMATION_DURATION_MS}ms`');
  @apply w-15;
}

.collapse_back {
  transition: all v-bind('`${SIDE_BAR_ANIMATION_DURATION_MS}ms`');
  @apply w-65;
}

.collapse_menu_container {
  transition: all v-bind('`${SIDE_BAR_ANIMATION_DURATION_MS}ms`');
  @apply pt-13;
}

.collapse_menu_container_back {
  transition: all v-bind('`${SIDE_BAR_ANIMATION_DURATION_MS}ms`');
  @apply pt-8;
}
</style>
