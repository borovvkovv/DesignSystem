<template>
  <div class="m-10 flex flex-col gap-y-5">
    <TextButtonHint
      :type="HintType.Error"
      :hints="[hintPropsWithButton]"
    />
    <TextButtonHint
      :type="HintType.Error"
      :hints="[hintPropsWithoutButton]"
    />
    <TextButtonHint
      :type="HintType.Error"
      :hints="hintsProps"
    />
    <TextButtonHint
      :type="HintType.Info"
      :texts="['Текст']"
      :hints="[hintPropsWithButton]"
    />
    <TextButtonHint
      :type="HintType.Info"
      :hints="[hintPropsWithoutButton]"
    />
    <TextButtonHint
      :type="HintType.Info"
      :hints="hintsProps"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'HintPage',
};
</script>

<script setup lang="ts">
import TextButtonHint from '@/components/hints/TextButtonHint.vue';
import { HintType } from '@/components/hints/utils/models';
import { RouteName } from '@/router/enum';
import { useRouter } from 'vue-router';

const router = useRouter();

const hintPropsWithButton = {
  text: 'Текст',
  buttonText: 'Текст кнопки',
  buttonClick: () => router.push({ name: RouteName.Accordion }),
};
const hintPropsWithoutButton = { text: 'Текст, без кнопки' };

const hintsProps = [
  hintPropsWithoutButton,
  hintPropsWithButton,
  hintPropsWithoutButton,
  hintPropsWithButton,
  hintPropsWithoutButton,
  hintPropsWithButton,
  hintPropsWithoutButton,
  hintPropsWithButton,
  hintPropsWithoutButton,
];
</script>
