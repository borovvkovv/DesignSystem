<template>
  <AppLink
    class="group relative flex items-center gap-x-4 px-3 py-3"
    @click="() => emit('click:collapse')"
  >
    <AppIcon
      :icon="isCollapsed ? IconName.IconArrowRight : IconName.IconArrowLeft"
      :size="16"
      class="absolute shrink-0 text-white group-hover:text-blueGrey-4"
    />
    <span
      ref="collapseButtonText"
      :class="['text-size-6 text-left text-white group-hover:text-blueGrey-4', isInitiallyCollapsed ? 'ml-10' : 'ml-8']"
    >
      Свернуть
    </span>
  </AppLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBarCollapseButton',
});
</script>

<script setup lang="ts">
import { ref, useCssModule } from 'vue';
import AppIcon from '@/components/AppIcon.vue';
import { IconName } from '@/components/icons/models';
import AppLink from '@/components/app-link/AppLink.vue';
import { changeCollapse } from '@/components/side-bar/utils';
import { SIDE_BAR_ANIMATION_DURATION_MS } from '@/components/side-bar/utils/models';

const props = defineProps<{
  isInitiallyCollapsed: boolean;
  isCollapsed: boolean;
}>();

const emit = defineEmits<{
  (eventName: 'click:collapse'): void;
}>();

const collapseButtonText = ref<HTMLElement | undefined>();
const styles = useCssModule();

defineExpose({
  collapse: () =>
    changeCollapse(collapseButtonText.value, 'collapse', props.isInitiallyCollapsed, props.isCollapsed, styles),
});
</script>

<style module lang="scss">
.collapse {
  transition: all v-bind('`${SIDE_BAR_ANIMATION_DURATION_MS}ms`');
  @apply ml-10;
}

.collapse_back {
  transition: all v-bind('`${SIDE_BAR_ANIMATION_DURATION_MS}ms`');
  @apply ml-8;
}
</style>
