<template>
  <div :class="[styles.line, 'rounded']" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LineSkeleton',
});
</script>

<script setup lang="ts">
import { useCssModule } from 'vue';

const styles = useCssModule();
</script>

<style module lang="scss">
@import '@/assets/styles/colors.module.scss';

.line {
  box-sizing: content-box;

  background: linear-gradient(
    to right,
    #f6f9fa,
    #f6f9fa 25%,
    #eff3f5 35%,
    #dde2e6 50%,
    #eff3f5 65%,
    #f6f9fa 75%,
    #f6f9fa
  );
  background-clip: content-box;
  background-size: 400% 100%;
  background-position: 100%;
  animation: loading 1.4s infinite cubic-bezier(0.17, 0.41, 0.13, 0.64);
}

@keyframes loading {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}
</style>
