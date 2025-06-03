<template>
  <icon-none v-if="!iconComponent" />
  <component
    v-bind="attrs"
    :is="iconComponent"
    :size="size"
  />
</template>

<script lang="ts">
export default {
  name: 'AppIcon',
};
</script>

<script setup lang="ts">
import type { IconName } from '@/components/icons/models';
import { defineAsyncComponent, watch, shallowRef, useAttrs } from 'vue';
import IconNone from '@/components/icons/IconNone.vue';

const props = defineProps<{
  icon: IconName;
  size?: number;
}>();
const attrs = useAttrs();
const iconComponent = shallowRef<Object>(defineAsyncComponent(() => import(`./icons/${props.icon}.vue`)));

watch(
  () => props.icon,
  function () {
    if (props.icon) iconComponent.value = defineAsyncComponent(() => import(`./icons/${props.icon}.vue`));
  },
);
</script>
