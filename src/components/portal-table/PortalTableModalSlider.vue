<template>
  <AppModalBase
    ref="modalRef"
    position="right"
    enter-from="opacity-0 translate-x-full"
    enter-to="opacity-100 translate-x-0"
    leave-from="opacity-100 translate-x-0"
    leave-to="opacity-0 translate-x-full"
    :with-backdrop="false"
    class="h-full !w-90 shadow-24"
  >
    <div
      ref="modalContainer"
      class="flex min-h-full flex-col"
    >
      <div class="shrink-0 grow px-6 py-4">
        <h1 class="mb-8 mt-2">{{ title }}</h1>
        <slot />
      </div>
      <div :class="['shrink-0 grow-0', 'sticky bottom-0 left-0 right-0', 'border-t border-t-blueGrey-5', 'bg-white']">
        <div class="mx-6 flex gap-x-3 py-4">
          <TextButton
            :size="Size.S"
            text="Применить"
            :is-disabled="isApplyButtonDisabled"
            class="grow"
            @button-click="() => emit('apply:click')"
          />
          <TextButton
            :size="Size.S"
            text="Сбросить"
            :color="AppColor.Grey"
            :is-disabled="isResetButtonDisabled"
            class="grow"
            @button-click="() => emit('reset:click')"
          />
        </div>
      </div>
    </div>
  </AppModalBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PortalTableModalSlider',
});
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { AppColor, Size } from '@/enums';
import type { MainModalsMethods } from '@/views/base/models';
import AppModalBase from '@/components/modals/AppModalBase.vue';
import TextButton from '@/components/buttons/TextButton.vue';

defineProps<{
  title: string;
  isApplyButtonDisabled?: boolean;
  isResetButtonDisabled?: boolean;
}>();

const emit = defineEmits<{
  (eventName: 'apply:click'): void;
  (eventName: 'reset:click'): void;
}>();

const modalRef = ref<MainModalsMethods | undefined>();
const modalContainer = ref();

defineExpose({
  openModal: () => {
    modalRef.value?.openModal();
  },
  closeModal: () => {
    modalRef.value?.closeModal();
  },
  modalContainer,
});
</script>
