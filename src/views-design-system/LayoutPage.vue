<template>
  <LayoutContainerGrid class="wrapper">
    <div class="col-11">11</div>
    <div class="col-1">1</div>
    <div class="col-10">10</div>
    <div class="col-2">2</div>
    <div class="col-9">9</div>
    <div class="col-3">3</div>
    <div class="col-8">8</div>
    <div class="col-4">4</div>
    <div class="col-7">7</div>
    <div class="col-5">5</div>
    <div class="col-6">6</div>
    <div class="col-6">6</div>
    <div class="col-3">3</div>
    <div class="col-3">3</div>
    <div class="col-3">3</div>
    <div class="col-3">3</div>
    <div class="col-4">4</div>
    <div class="col-4">4</div>
    <div class="col-4">4</div>
    <div class="col-2">2</div>
    <div class="col-2">2</div>
    <div class="col-2">2</div>
    <div class="col-2">2</div>
    <div class="col-2">2</div>
    <div class="col-2">2</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="col-1">1</div>
    <div class="custom">custom</div>
  </LayoutContainerGrid>
</template>

<script lang="ts">
export default {
  name: 'LayoutPage',
};
</script>

<script setup lang="ts">
import LayoutContainerGrid from '@/components/layout/LayoutContainerGrid.vue';
</script>

<style scoped lang="scss">
@import '@/assets/styles/layout.module';
.wrapper {
  background-color: bisque;
}
.row > [class*='col'] {
  background-color: #98d8ff;
  text-align: center;
  padding: 10px;
}

.custom {
  background-color: aquamarine;
  text-align: center;
  padding: 10px;

  @include row_item(12, 12, 40px);

  @media (min-width: $break_744) {
    & {
      @include row_item_by_break(2, $break_744);
    }
  }

  @media (min-width: $break_1140) {
    width: calc(#{100% * 6} / #{map-get($columns, $break_1140)} + #{get-gutter($break_1140)});
    margin: 0 calc(-1 * get-gutter($break_1140) / 2);
    box-sizing: border-box;
  }

  @media (min-width: $break_1360) {
    & {
      @include row_item_by_break(8, $break_1360);
    }
  }

  @media (min-width: $break_1520) {
    & {
      @include row_item_by_break(10, $break_1520);
    }
  }
}
</style>
