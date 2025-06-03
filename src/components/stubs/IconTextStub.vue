<template>
  <BaseStub
    v-tw-merge
    :class="['bg-white', size === Size.M ? 'rounded-md border border-blueGrey-4 p-8' : 'rounded-sm shadow-24']"
    :height="height"
  >
    <div :class="['flex w-full', isNormalFormat && 'flex-col items-center justify-center']">
      <AppIcon
        :icon="icon"
        :class="[
          'shrink-0 text-blueGrey-2',
          isNormalFormat ? (size === Size.M ? 'mb-5' : 'mb-4') : undefined,
          !isNormalFormat && 'mr-5',
        ]"
      />
      <div class="flex flex-col">
        <span
          v-for="(text, index) in texts"
          :key="`text_${text}_${index}`"
          :class="[
            isNormalFormat && 'text-center',
            size === Size.M ? 'text-size-5' : 'text-size-7',
            index === 0 && size === Size.S ? 'text-black-1' : 'text-grey-1',
          ]"
        >
          {{ text }}
        </span>
      </div>
    </div>
  </BaseStub>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconTextStub',
});
</script>

<script setup lang="ts">
import BaseStub from '@/components/stubs/BaseStub.vue';
import type { IconName } from '@/components/icons/models';
import AppIcon from '@/components/AppIcon.vue';
import { Size } from '@/enums';
import { Format } from '@/enums/format';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    texts?: string[];
    icon: IconName;
    height?: number;
    size?: Size;
    format?: Format;
  }>(),
  {
    texts: () => [],
    height: undefined,
    size: Size.M,
    format: Format.Normal,
  },
);

const isNormalFormat = computed(() => props.format === Format.Normal);
</script>
