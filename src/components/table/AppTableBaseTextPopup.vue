<template>
  <BasePopup
    ref="popupRef"
    v-tw-merge
    v-bind="popupPosition"
    :class="[
      'text-size-6 whitespace-pre-line break-all text-left text-black-1',
      'fixed max-w-106 rounded-md bg-white shadow-4',
      'py-2',
    ]"
    @popup:open="shiftPopupIntoContainer"
  >
    <div class="max-h-100 overflow-y-auto px-3 scrollbar-thin">
      {{ text }}
    </div>
  </BasePopup>
</template>

<script lang="ts">
export default {
  name: 'AppTableBaseTextPopup',
};
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import BasePopup from '@/components/popup/BasePopup.vue';
import { usePopupInsideContainer } from '@/components/popup/hooks/usePopupInsideContainer';
import { usePopupWithScroll } from '@/views/reading-by-platform/hooks/usePopupWithScroll';

defineProps<{
  text: string;
}>();

const popupRef = ref<InstanceType<typeof BasePopup>>();
const popup = computed(() => popupRef.value?.popup);
const popupPosition = {
  toTopFromPointerPx: 12,
  translateXPercent: -50,
};

const showPopup = (left?: number, top?: number) => popupRef.value?.showPopup?.(left, top);

const showPopupElementEventHandler = (e: MouseEvent) => {
  popupRef.value?.showPopupElementEventHandler?.(e, 'top');
};
const { shiftPopupIntoContainer } = usePopupInsideContainer(popup, undefined, popupPosition, false, true);
const { startCheckIfPointerReachPopup } = usePopupWithScroll(popupRef);

const closePopup = () => popupRef.value?.closePopup?.();

defineExpose({
  showPopup,
  showPopupElementEventHandler,
  closePopup,
  startCheckIfPointerReachPopup,
});
</script>
