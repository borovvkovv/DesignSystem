<template>
  <component
    :is="onIconClick ? AppLink : 'span'"
    :class="['min-h-5 min-w-5', 'flex items-center justify-center', 'shrink-0', !onIconClick && 'text-grey-2']"
    :link-style="LinksStyles.Style6"
    :is-disabled="disabled"
    @click="
      (event: Event) => {
        if (onIconClick) {
          event.preventDefault();
          onIconClick();
        }
      }
    "
  >
    <AppIcon
      :icon="iconName"
      :size="size"
    />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseInputIcon',
});
</script>

<script setup lang="ts">
import AppLink from '@/components/app-link/AppLink.vue';
import AppIcon from '@/components/AppIcon.vue';
import type { IBaseInputIconProps } from '@/components/inputs/models';
import { LinksStyles } from '@/components/app-link/utils/models';

withDefaults(defineProps<IBaseInputIconProps>(), {
  size: 20,
});
</script>
