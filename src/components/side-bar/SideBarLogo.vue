<template>
  <div class="relative bg-blue-2">
    <div
      ref="logoCollapsed"
      :class="['absolute inset-0 bg-darkBlue-2', isInitiallyCollapsed ? 'opacity-100' : 'opacity-0']"
      data-test="gazpromIconWrapper"
    >
      <AppIcon
        class="absolute left-3.5 top-6"
        :icon="IconName.IconGazpromSmall"
      />
    </div>
    <AppHeaderLogo class="mx-auto w-32.5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBarLogo',
});
</script>

<script setup lang="ts">
import { ref, useCssModule } from 'vue';
import AppHeaderLogo from '@/components/AppHeaderLogo.vue';
import AppIcon from '@/components/AppIcon.vue';
import { IconName } from '@/components/icons/models';
import { changeCollapse } from '@/components/side-bar/utils';
import { SIDE_BAR_ANIMATION_DURATION_MS } from '@/components/side-bar/utils/models';

const props = defineProps<{
  isInitiallyCollapsed: boolean;
  isCollapsed: boolean;
}>();

const logoCollapsed = ref<HTMLElement | undefined>();
const styles = useCssModule();

defineExpose({
  collapse: () =>
    changeCollapse(logoCollapsed.value, 'collapse', props.isInitiallyCollapsed, props.isCollapsed, styles),
});
</script>

<style module lang="scss">
.collapse {
  transition: all v-bind('`${SIDE_BAR_ANIMATION_DURATION_MS}ms`');
  @apply opacity-100;
}

.collapse_back {
  transition: all v-bind('`${SIDE_BAR_ANIMATION_DURATION_MS}ms`');
  @apply opacity-0;
}
</style>
