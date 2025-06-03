<template>
  <div :class="greyTextOnHover && 'group'">
    <span
      v-for="(result, i) in searchResult"
      :key="i"
      :class="[greyTextOnHover && 'group-hover:text-grey-1', getTextColor(result)]"
    >
      {{ result.text }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchResultSpan',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { getColoredSearchResult, getTextColor } from '@/components/selects/utils';
import { TextColorType } from '@/components/selects/utils/models';

const props = withDefaults(
  defineProps<{
    text: string;
    pattern: string;
    colorType?: TextColorType;
    greyTextOnHover?: boolean;
  }>(),
  {
    colorType: TextColorType.Text,
    greyTextOnHover: true,
  },
);

const searchResult = computed(() => getColoredSearchResult(props.text, props.pattern, props.colorType));
</script>
