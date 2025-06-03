<template>
  <div class="m-xs">
    <h2>Base Input</h2>
    <div
      v-for="size in sizes"
      :key="size"
      class="mx-6 my-2"
    >
      Size: {{ size }}
      <div class="flex">
        <BaseInput
          v-model="input"
          :size="size"
          class="m-4xs"
          :icon-left="IconName.IconArrowLeft"
          :icon-right="{ iconName: IconName.IconArrowRight, onIconClick: () => console.log('ok') }"
        />
        <BaseInput
          v-model="input"
          :size="size"
          class="m-4xs"
          :icon-left="IconName.IconArrowLeft"
          :icon-right="{ iconName: IconName.IconArrowRight }"
          disabled
        />
        <BaseInput
          v-model="input"
          :size="size"
          :is-error="true"
          :icon-left="IconName.IconArrowLeft"
          :icon-right="{ iconName: IconName.IconArrowRight }"
          class="m-4xs"
        />
        <BaseInput
          v-model="input"
          :size="size"
          :is-error="true"
          :icon-left="IconName.IconArrowLeft"
          :icon-right="{ iconName: IconName.IconArrowRight }"
          :error-list="['Error']"
          class="m-4xs"
        />
        <BaseInput
          v-model="input"
          :size="size"
          :is-error="true"
          :icon-left="IconName.IconArrowLeft"
          :icon-right="{ iconName: IconName.IconArrowRight }"
          :error-list="['Error one', 'Error two', 'Error tree']"
          class="m-4xs"
        />
        <BaseInput
          v-model="input"
          :size="size"
          :is-error="true"
          :icon-left="IconName.IconArrowLeft"
          :icon-right="{ iconName: IconName.IconArrowRight }"
          :error-list="['Error one', 'Error two', 'Error tree']"
          disabled
          class="m-4xs"
        />
      </div>
    </div>

    <h2>Simple Input</h2>
    <div
      v-for="size in sizes"
      :key="size"
      class="m-xs"
    >
      Size: {{ size }}
      <div class="flex">
        <SimpleInput
          v-model="input"
          :size="size"
          class="m-4xs"
        />
        <SimpleInput
          v-model="input"
          :size="size"
          class="m-4xs"
          disabled
        />
        <SimpleInput
          v-model="input"
          :size="size"
          :is-error="true"
          class="m-4xs"
        />
        <SimpleInput
          v-model="input"
          :size="size"
          :is-error="true"
          :error-list="['Error']"
          class="m-4xs"
        />
        <SimpleInput
          v-model="input"
          :size="size"
          :is-error="true"
          :error-list="['Error one', 'Error two', 'Error tree']"
          class="m-4xs"
        />
      </div>
    </div>

    <h2>Password Input</h2>
    <div
      v-for="size in sizes"
      :key="size"
      class="m-xs"
    >
      Size: {{ size }}
      <div class="flex">
        <PasswordInput
          v-model="input"
          :size="size"
          class="m-4xs"
        />
        <PasswordInput
          v-model="input"
          :size="size"
          class="m-4xs"
          disabled
        />
        <PasswordInput
          v-model="input"
          :size="size"
          :is-error="true"
          class="m-4xs"
        />
        <PasswordInput
          v-model="input"
          :size="size"
          :is-error="true"
          :error-list="['Error']"
          class="m-4xs"
        />
        <PasswordInput
          v-model="input"
          :size="size"
          :is-error="true"
          :error-list="['Error one', 'Error two', 'Error tree']"
          class="m-4xs"
        />
      </div>
    </div>
    <h2>Text Area</h2>
    <div class="m-xs flex">
      <AppTextArea
        v-model="input"
        placeholder="Placeholder"
        class="m-4xs"
      />
      <AppTextArea
        v-model="input"
        placeholder="Placeholder"
        disabled
        class="m-4xs"
      />
      <AppTextArea
        v-model="input"
        placeholder="Placeholder"
        :is-error="true"
        :error-list="['Error one']"
        class="m-4xs"
      />
      <AppTextArea
        v-model="input"
        placeholder="Placeholder"
        :is-error="true"
        :error-list="['Error one', 'Error two', 'Error tree']"
        class="m-4xs"
      />
    </div>
    <br />
    <h2>Smart Input</h2>
    <div
      v-for="size in sizes"
      :key="size"
      class="m-xs"
    >
      Size: {{ size }}
      <div class="flex">
        <SmartInput
          v-model="query"
          :size="size"
          :options="mockOptions"
          placeholder="Placeholder"
          class="m-4xs"
        />
        <SmartInput
          v-model="query"
          :size="size"
          :options="mockOptions"
          placeholder="Placeholder"
          disabled
          class="m-4xs"
        />
        <SmartInput
          v-model="query"
          :size="size"
          :options="mockOptions"
          placeholder="Placeholder"
          :is-error="true"
          :error-list="['Error one']"
          class="m-4xs"
        />
        <SmartInput
          v-model="query"
          :size="size"
          :options="mockOptions"
          placeholder="Placeholder"
          :is-error="true"
          :error-list="['Error one', 'Error two', 'Error tree']"
          class="m-4xs"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'InputPage',
};
</script>

<script setup lang="ts">
import SimpleInput from '@/components/inputs/BaseSimpleInput.vue';
import { ref } from 'vue';
import PasswordInput from '@/components/inputs/BasePasswordInput.vue';
import { Size } from '@/enums';
import AppTextArea from '@/components/inputs/AppTextArea.vue';
import SmartInput from '@/components/inputs/SmartInput.vue';
import BaseInput from '@/components/inputs/BaseInput.vue';
import { IconName } from '@/components/icons/models';
import type { ISelectItem } from '@/components/selects/models';

const input = ref('');
const sizes: Array<Size.S | Size.M> = [Size.S, Size.M];

const mockOptions: ISelectItem[] = [
  { title: 'option', value: 'option' },
  { title: 'option1', value: 'option1' },
  { title: 'option2', value: 'option2' },
  { title: 'option3', value: 'option3' },
  { title: 'option4', value: 'option4' },
  { title: 'option5', value: 'option5' },
  { title: 'option6', value: 'option6' },
  { title: 'option7', value: 'option7' },
  { title: 'option8', value: 'option8' },
  { title: 'option9', value: 'option9' },
];
const query = ref<ISelectItem>();
</script>
