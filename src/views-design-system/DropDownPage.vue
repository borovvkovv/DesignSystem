<template>
  <div class="m-5 flex flex-col gap-y-18">
    <DropDownListLoadingWrapper>
      <SimpleDropDown
        v-for="(_, i) in Array(numberOfDropDowns)"
        :key="i"
        text="Непустой список drop-down с разделителем"
        show-border
        :is-first-in-list="i === 0"
        :is-last-in-list="i === numberOfDropDowns - 1"
      >
        <template #dropDown>
          <div class="flex flex-col gap-y-5">
            <span
              v-for="option in options"
              :key="option"
            >
              {{ option }}
            </span>
          </div>
        </template>
      </SimpleDropDown>
    </DropDownListLoadingWrapper>

    <DropDownListLoadingWrapper>
      <SimpleDropDown
        v-for="(_, i) in Array(numberOfDropDowns)"
        :key="i"
        text="Пустой список drop-down с разделителем"
        show-border
        :is-first-in-list="i === 0"
        :is-last-in-list="i === numberOfDropDowns - 1"
      >
        <template #dropDown></template>
      </SimpleDropDown>
    </DropDownListLoadingWrapper>

    <DropDownListLoadingWrapper>
      <SimpleDropDown
        v-for="(_, i) in Array(numberOfDropDowns)"
        :key="i"
        text="Непустой список drop-down без разделителя"
        :is-first-in-list="i === 0"
        :is-last-in-list="i === numberOfDropDowns - 1"
      >
        <template #dropDown>
          <div class="flex flex-col gap-y-5">
            <span
              v-for="option in options"
              :key="option"
            >
              {{ option }}
            </span>
          </div>
        </template>
      </SimpleDropDown>
    </DropDownListLoadingWrapper>

    <DropDownListLoadingWrapper>
      <SimpleDropDown
        v-for="(_, i) in Array(numberOfDropDowns)"
        :key="i"
        text="Непустой список неактивных drop-down"
        show-border
        :is-first-in-list="i === 0"
        :is-last-in-list="i === numberOfDropDowns - 1"
        :is-disabled="true"
      >
        <template #dropDown>
          <div class="flex flex-col gap-y-5">
            <span
              v-for="option in options"
              :key="option"
            >
              {{ option }}
            </span>
          </div>
        </template>
      </SimpleDropDown>
    </DropDownListLoadingWrapper>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DropDownPage',
};
</script>

<script setup lang="ts">
import SimpleDropDown from '@/components/selects/SimpleDropDown.vue';
import DropDownListLoadingWrapper from '@/components/selects/DropDownListLoadingWrapper.vue';

const options = ['option1', 'option2', 'option3'];

const numberOfDropDowns = 3;
</script>
