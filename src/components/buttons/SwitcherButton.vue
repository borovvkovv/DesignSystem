<template>
  <div>
    <div class="inline-block w-18 overflow-hidden">
      <TextButton
        :text="switcher.left.text"
        :color="switcher.left.value === model ? AppColor.Blue : AppColor.Grey"
        :size="Size.S"
        class="w-20"
        @button-click="
          () => {
            model = switcher.left.value;
          }
        "
      />
    </div>
    <div class="inline-block w-18 overflow-hidden">
      <TextButton
        :text="switcher.right.text"
        :color="switcher.right.value === model ? AppColor.Blue : AppColor.Grey"
        :size="Size.S"
        class="-ml-2 w-20"
        @button-click="
          () => {
            model = switcher.right.value;
          }
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SwitcherButton',
});
</script>

<script setup lang="ts" generic="T">
import TextButton from '@/components/buttons/TextButton.vue';
import { AppColor, Size } from '@/enums';
import { computed } from 'vue';
import type { Switcher } from '@/components/buttons/utils/models';

const props = defineProps<{
  modelValue: T;
  switcher: Switcher<T>;
}>();

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: T): void;
}>();

const model = computed({
  get(): T {
    return props.modelValue;
  },
  set(newValue: T): void {
    emit('update:modelValue', newValue);
  },
});
</script>

<style module lang="scss"></style>
