<template>
  <BaseButton
    :size="props.size"
    :color="color"
    :disabled="isDisabled"
    :type="type"
    :class="[isLoadingDelayed && 'pointer-events-none', buttonPaddingX]"
    @button-click="emit('buttonClick')"
  >
    <span
      ref="containerRef"
      :class="style.container"
    >
      <span
        v-if="isLoadingDelayed"
        :class="iconStyles"
      >
        <AppIcon
          :icon="IconName.IconLoading"
          :size="size === Size.XS ? 16 : 20"
        />
      </span>
      <span v-else>
        {{ text }}
      </span>
    </span>
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TextButton',
});
</script>

<script setup lang="ts">
import { computed, ref, useCssModule, watch } from 'vue';
import BaseButton from '@/components/buttons/BaseButton.vue';
import AppIcon from '@/components/AppIcon.vue';
import { IconName } from '@/components/icons/models';
import { Size } from '@/enums/size';
import type { ITextButtonProps } from '@/components/buttons/utils/models';
import getButtonIconStyles from '@/components/buttons/utils/getButtonIconStyles';

const props = withDefaults(defineProps<ITextButtonProps>(), {
  isLoading: false,
});

const emit = defineEmits<{
  (e: 'buttonClick'): void;
}>();

const containerRef = ref();
const containerWidth = ref('0px');
const isLoadingDelayed = ref(false);
const style = useCssModule();
const iconStyles = computed(() => getButtonIconStyles(style, props.size));
const buttonPaddingX = computed(() => {
  switch (props.size) {
    case Size.M:
      return 'px-5';
    case Size.S:
      return 'px-4.5';
    case Size.XS:
      return 'px-4';
    default:
      return 'px-5';
  }
});

watch(
  () => props.isLoading,
  () => {
    containerWidth.value = (containerRef.value?.clientWidth ?? 0) + 'px';
    isLoadingDelayed.value = props.isLoading;
  },
  { immediate: true },
);
</script>

<style lang="scss" module>
@import 'styles/button-icon';
@import 'styles/button-container';

.container {
  min-width: v-bind(containerWidth);
}
</style>
