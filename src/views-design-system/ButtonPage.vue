<template>
  <div
    v-for="color in colors"
    :key="color"
    class="m-xs"
  >
    <label>Color {{ color }}</label>
    <div
      v-for="size in sizes"
      :key="size + '_' + color"
      class="m-xs"
    >
      <label>Size {{ size }}</label>
      <div class="sizes">
        <div class="buttons">
          <label class="mr-xs ml-4xs">TextButton</label>
          <TextButton
            v-for="(type, index) in attributes"
            :key="index + '_' + size + '_' + color"
            :text="buttonText"
            :is-loading="type.isLoading"
            :is-disabled="type.isDisabled"
            :size="size"
            :color="color"
            class="mr-xs"
          />
        </div>
        <div class="buttons">
          <label class="mr-xs ml-4xs">IconTextButton.Left</label>
          <IconTextButton
            v-for="(type, index) in attributes"
            :key="index"
            :text="buttonText"
            :icon-name="icon"
            :icon-position="IconPosition.Left"
            :is-loading="type.isLoading"
            :is-disabled="type.isDisabled"
            :size="size"
            :color="color"
            class="mr-xs"
          />
        </div>
        <div class="buttons">
          <label class="mr-xs ml-4xs">IconTextButton.Right</label>
          <IconTextButton
            v-for="(type, index) in attributes"
            :key="index"
            :text="buttonText"
            :icon-name="icon"
            :icon-position="IconPosition.Right"
            :is-loading="type.isLoading"
            :is-disabled="type.isDisabled"
            :size="size"
            :color="color"
            class="mr-xs"
          />
        </div>
        <div class="buttons">
          <label class="mr-xs ml-4xs">IconButton</label>
          <IconButton
            v-for="(type, index) in attributes"
            :key="index"
            :icon-name="icon"
            :is-loading="type.isLoading"
            :is-disabled="type.isDisabled"
            :size="size"
            :color="color"
            class="mr-xs"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ButtonPage',
};
</script>

<script setup lang="ts">
import { AppColor, Size } from '@/enums';
import TextButton from '@/components/buttons/TextButton.vue';
import IconTextButton from '@/components/buttons/IconTextButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';
import { IconName } from '@/components/icons/models';
import { IconPosition } from '@/components/buttons/utils/models';

const buttonText = 'Button name';
const icon = IconName.IconPlus;
const sizes: (Size.M | Size.S | Size.XS)[] = [Size.M, Size.S, Size.XS];
const colors: (AppColor.DarkBlue | AppColor.Blue | AppColor.Grey | AppColor.Red)[] = [
  AppColor.DarkBlue,
  AppColor.Blue,
  AppColor.Grey,
  AppColor.Red,
];
const attributes = [
  {
    isLoading: false,
    isDisabled: false,
  },
  {
    isLoading: true,
    isDisabled: false,
  },
  {
    isLoading: false,
    isDisabled: true,
  },
];
</script>

<style scoped>
.sizes {
  display: flex;
  flex-direction: column;
  border: 1px dashed #9747ff;
}
.buttons {
  display: flex;
  align-items: center;
  margin: 12px 0;
}
</style>
