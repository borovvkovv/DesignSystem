<template>
  <ModalWithSwipe
    :swipe-start-field="slider"
    :swipe-field="slider"
    @swiped:right="onLeftArrowClick"
    @swiped:left="onRightArrowCLick"
  >
    <div
      ref="slider"
      class="px-4 py-8 md:px-6"
      data-test="testSlider"
    >
      <div class="flex">
        <AppLink
          :is-disabled="isFirst"
          :link-style="LinksStyles.Style9"
          class="absolute left-4 top-8.5 z-10 md:left-6"
          @click="onLeftArrowClick"
        >
          <IconArrowLeft :size="20" />
        </AppLink>
        <Transition
          :name="direction"
          mode="out-in"
        >
          <div
            :key="transitionKey"
            class="w-full"
          >
            <slot />
          </div>
        </Transition>
        <AppLink
          :is-disabled="isLast"
          :link-style="LinksStyles.Style9"
          class="absolute right-4 top-8.5 z-10 md:right-6"
          @click="onRightArrowCLick"
        >
          <IconArrowRight :size="20" />
        </AppLink>
      </div>

      <TextButton
        :size="Size.S"
        text="Закрыть"
        class="w-full"
        @button-click="emit('click:close')"
      />
    </div>
  </ModalWithSwipe>
</template>

<script lang="ts">
export default {
  name: 'ModalSlider',
};
</script>

<script setup lang="ts">
import { Size } from '@/enums';
import TextButton from '@/components/buttons/TextButton.vue';
import ModalWithSwipe from '@/components/modals/ModalWithSwipe.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
import AppLink from '@/components/app-link/AppLink.vue';
import { LinksStyles } from '@/components/app-link/utils/models';
import { ref } from 'vue';
import type { IModalSliderProps } from './models';

const props = defineProps<IModalSliderProps & { transitionKey: string }>();
const direction = ref<'slide-left' | 'slide-right'>('slide-right');
const slider = ref<HTMLElement | undefined>();

const onLeftArrowClick = () => {
  direction.value = 'slide-right';
  props.activatePrevPoint();
};

const onRightArrowCLick = () => {
  direction.value = 'slide-left';
  props.activateNextPoint();
};

const emit = defineEmits<{
  (eventName: 'click:close'): void;
}>();
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(-60%);
  opacity: 0;
}

.slide-right-leave-to,
.slide-left-enter-from {
  transform: translateX(+60%);
  opacity: 0;
}
</style>
