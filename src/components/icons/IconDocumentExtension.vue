<template>
  <svg
    :width="iconSize.width"
    :height="iconSize.height"
    :viewBox="`0 0 ${iconSize.width} ${iconSize.height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0"
      :width="iconSize.width"
      :height="iconSize.height"
      rx="2"
      :fill="style.grey5"
    />
    <text
      :class="style.text"
      :x="iconSize.width / 2"
      y="19"
      text-anchor="middle"
      fill="currentColor"
      dominant-baseline="middle"
    >
      {{ svgText }}
    </text>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconDocumentExtension',
});
</script>

<script setup lang="ts">
import { Size } from '@/enums';
import { computed, useCssModule } from 'vue';

const props = defineProps<{
  size: Size.M | Size.S;
  extension: string;
}>();

const svgText = computed(() => {
  if (props.extension?.length >= 5) {
    return props.extension?.substring(0, 3) + '...';
  }

  return props.extension?.toUpperCase();
});

const iconSize = computed(() => (props.size === Size.M ? { width: 40, height: 48 } : { width: 40, height: 40 }));

const style = useCssModule();
</script>

<style module lang="scss">
@import '@/assets/styles/colors.module.scss';

.text {
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 18px;
}
</style>
