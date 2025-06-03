<template>
  <div
    :class="[
      'group h-6 w-10',
      'relative cursor-pointer rounded-full border',
      isDisabled
        ? 'pointer-events-none border-blueGrey-4'
        : model
          ? 'border-blue-2 hover:border-darkBlue-4'
          : 'border-blueGrey-3 hover:border-grey-1',
    ]"
    :tabindex="tabIndex"
    @click="() => (model = !model)"
  >
    <div
      data-test="switcherToggler"
      :class="[
        'h-4 w-4 rounded-full',
        isDisabled
          ? 'bg-blueGrey-4'
          : model
            ? 'bg-blue-2 group-hover:bg-darkBlue-4'
            : 'bg-blueGrey-3 group-hover:bg-grey-1',
        'absolute top-1/2 -translate-y-1/2',
        'transition-left duration-300',
        model ? 'left-4.5' : 'left-1',
      ]"
    ></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppSwitcher',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    isDisabled?: boolean;
    tabIndex?: number | string;
  }>(),
  {
    isDisabled: false,
    tabIndex: 0,
  },
);

const emit = defineEmits<{
  (eventName: 'update:modelValue', newValue: boolean): void;
}>();

const model = computed<boolean>({
  get() {
    return props.modelValue;
  },
  set(newValue): void {
    emit('update:modelValue', newValue);
  },
});
</script>
