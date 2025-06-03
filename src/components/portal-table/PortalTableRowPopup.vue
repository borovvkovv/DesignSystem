<template>
  <AppTableBaseTextPopup
    ref="popupRef"
    :text="popup.text"
    :class="['z-10 w-max', popup.modifier?.textColor, popup.modifier?.other]"
  />
</template>

<script lang="ts">
export default {
  name: 'PortalTableRowPopup',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { getMidPointOfElement } from '@/components/popup/utils';
import AppTableBaseTextPopup from '@/components/table/AppTableBaseTextPopup.vue';
import type { TPortalRowPopup } from './utils/models';

defineProps<{
  popup: TPortalRowPopup;
}>();

const popupRef = ref<InstanceType<typeof AppTableBaseTextPopup>>();

const showPopup = (evt: MouseEvent) => {
  const targetRect = (evt.target as HTMLElement)?.getBoundingClientRect();
  const { top } = getMidPointOfElement(targetRect, 'top');
  const left = evt.clientX;
  popupRef.value?.showPopup?.(left, top);
};

const closePopup = () => popupRef.value?.closePopup?.();

defineExpose({
  showPopup,
  closePopup,
});
</script>
