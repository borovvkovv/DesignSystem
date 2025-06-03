<template>
  <div
    ref="chip"
    @click="() => emit('delete:selectedOption')"
  >
    <div :class="['group cursor-pointer rounded bg-grey-5', 'flex flex-nowrap items-center', 'px-4 py-1 hover:pr-0']">
      <div class="grow overflow-hidden text-ellipsis whitespace-nowrap">{{ selectedOption.title }}</div>
      <AppIcon
        :icon="IconName.IconCross"
        :size="16"
        class="mx-2 hidden shrink-0 text-blueGrey-2 group-hover:block"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MultiSelectChip',
});
</script>

<script setup lang="ts">
import { ref, watch } from 'vue';
import AppIcon from '@/components/AppIcon.vue';
import { IconName } from '@/components/icons/models';
import type { ISelectItem } from '@/components/selects/models';

const props = defineProps<{
  selectedOption: ISelectItem;
  container: HTMLElement | undefined;
}>();

const emit = defineEmits<{
  (e: 'delete:selectedOption'): void;
}>();

const chip = ref<HTMLElement>();

watch([chip, () => props.selectedOption], () => {
  if (chip.value) {
    const containerWidth = props.container?.getBoundingClientRect().width;
    const chipWidth = chip.value.getBoundingClientRect().width;
    chip.value.style.width = `${Math.min(containerWidth ?? chipWidth, chipWidth)}px`;
    chip.value.style.minWidth = `${Math.min(containerWidth ?? chipWidth, chipWidth)}px`;
  }
});

defineExpose({
  chip,
});
</script>
