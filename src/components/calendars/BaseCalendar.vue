<template>
  <section
    ref="container"
    class="relative bg-white"
    @mousemove="throttledClosePopupAfter"
  >
    <div class="absolute right-0 top-0 flex pr-inherit pt-inherit">
      <AppLink
        :link-style="LinksStyles.Style6"
        :is-disabled="isIconArrowLeftDisabled"
        @click="emit('onIconArrowLeftClick')"
        @mouseleave="(evt: MouseEvent) => (evt.target as HTMLElement).blur()"
      >
        <IconArrowLeft
          :size="20"
          :class="isIconArrowLeftDisabled && 'text-blue-7'"
        />
      </AppLink>
      <AppLink
        class="ml-3"
        :link-style="LinksStyles.Style6"
        :is-disabled="isIconArrowRightDisabled"
        @click="emit('onIconArrowRightClick')"
        @mouseleave="(evt: MouseEvent) => (evt.target as HTMLElement).blur()"
      >
        <IconArrowRight
          :size="20"
          :class="isIconArrowRightDisabled && 'text-blue-7'"
        />
      </AppLink>
    </div>
    <slot
      :show-popup="showPopup"
      :close-popup="closePopup"
    />
    <BaseCalendarPopup
      ref="popup"
      :text="popupText"
      :container="container"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseCalendar',
});
</script>

<script setup lang="ts">
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
import IconArrowRight from '@/components/icons/IconArrowRight.vue';
import AppLink from '@/components/app-link/AppLink.vue';
import type { IBaseCalendarProps } from '@/components/calendars/utils/models';
import BaseCalendarPopup from '@/components/popup/BaseCalendarPopup.vue';
import { computed, ref } from 'vue';
import { LinksStyles } from '@/components/app-link/utils/models';

defineProps<IBaseCalendarProps>();

const emit = defineEmits<{
  (e: 'onIconArrowLeftClick'): void;
  (e: 'onIconArrowRightClick'): void;
}>();

const popup = ref();
const showPopup = computed(() => popup.value?.showPopup);
const closePopup = computed(() => popup.value?.closePopup);
const throttledClosePopupAfter = computed(() => popup.value?.throttledClosePopupAfter(300));
const container = ref<HTMLElement | undefined>();
</script>
