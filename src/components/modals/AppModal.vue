<template>
  <AppModalBase
    ref="modalRef"
    :position="position"
    :enter="enter"
    :enter-from="enterFrom"
    :enter-to="enterTo"
    :leave="leave"
    :leave-from="leaveFrom"
    :leave-to="leaveTo"
    :with-close-cross="withCloseCross"
    :open-immediately="openImmediately"
    :class="[
      'shadow-xl',
      'px-4 md:px-6 lg:px-10',
      'py-8 lg:py-10',
      'lg:h-max lg:max-h-[calc(100%-80px)] lg:max-w-190 lg:rounded-md',
    ]"
    @on-close="() => emit('onClose')"
  >
    <template
      v-if="hasSlot('header', slots)"
      #header
    >
      <div
        data-test="slotHeaderWrapper"
        class="mt-13 lg:mt-0"
      >
        <slot name="header" />
      </div>
    </template>
    <template #default><slot /></template>
  </AppModalBase>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppModal',
});
</script>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import AppModalBase from './AppModalBase.vue';
import type { AppModalProps } from './models';
import { hasSlot } from '@/utils/slots';

withDefaults(defineProps<AppModalProps>(), {
  withCloseCross: true,
});

const modalRef = ref();

const emit = defineEmits<{
  (e: 'onClose'): void;
}>();
const modalContainer = computed(() => modalRef.value?.modalContainer);
const slots = useSlots();

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
