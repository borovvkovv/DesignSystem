<template>
  <BaseButton
    :size="props.size"
    :color="color"
    :is-disabled="isDisabled"
    :type="type"
    :class="buttonPaddingX"
    @button-click="emit('buttonClick')"
  >
    <div :class="['flex', flexDirection]">
      <span :class="[iconStyles, flexDirection === 'flex-row' ? 'mr-2' : 'ml-2']">
        <AppIcon
          :icon="icon"
          :size="iconSize"
        />
      </span>
      <span
        v-if="text"
        :class="style.text"
      >
        {{ text }}
      </span>
    </div>
    <label
      v-if="props.for"
      :for="props.for"
      class="absolute bottom-0 left-0 right-0 top-0 cursor-pointer"
    />
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconTextButton',
});
</script>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import type { IIconTextButtonProps } from '@/components/buttons/utils/models';
import { IconPosition } from '@/components/buttons/utils/models';
import BaseButton from '@/components/buttons/BaseButton.vue';
import AppIcon from '@/components/AppIcon.vue';
import getButtonIconStyles from '@/components/buttons/utils/getButtonIconStyles';
import { Size } from '@/enums';
import { IconName } from '@/components/icons/models';

const props = withDefaults(defineProps<IIconTextButtonProps>(), {
  isLoading: false,
  iconPosition: IconPosition.Left,
  size: Size.M,
});
const emit = defineEmits<{
  (e: 'buttonClick'): void;
}>();

const style = useCssModule();
const iconStyles = computed(() => getButtonIconStyles(style, props.size));
const iconSize = computed(() => (props.size === Size.XS ? 16 : 20));
const icon = computed(() => (props.isLoading ? IconName.IconLoading : props.iconName));
const flexDirection = computed(() => (props.iconPosition === IconPosition.Left ? 'flex-row' : 'flex-row-reverse'));
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
</script>

<style module lang="scss">
@import 'styles/button-icon';
@import 'styles/button-container';
</style>
