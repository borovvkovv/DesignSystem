<template>
  <TransitionGroup
    mode="out-in"
    tag="div"
    class="fixed bottom-3 right-3 flex flex-col-reverse items-end"
  >
    <SnackBar
      v-for="snackBar in snackBarList"
      :id="snackBar.id"
      :key="snackBar.id"
      :status="snackBar.status"
      :message="snackBar.message"
      :timer="snackBar.timer"
      class="mt-3 w-fit"
      @close="() => (snackBarState.snackBarList = removeItemFromArrayByModel(snackBarList, 'id', snackBar.id))"
    />
  </TransitionGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SnackBarList',
});
</script>

<script setup lang="ts">
import { removeItemFromArrayByModel } from '@/utils/array';
import SnackBar from './SnackBar.vue';
import { useSnackBar } from '@/stores/snackBar';
import { computed } from 'vue';
import type { SnackBarPropsStrict } from '@/components/snack-bar/utils/models';

const snackBarState = useSnackBar();
const snackBarList = computed<SnackBarPropsStrict[]>(() => snackBarState.snackBarList);
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: scale(60%);
  opacity: 0;
}
</style>
