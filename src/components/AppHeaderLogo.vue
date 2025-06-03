<template>
  <img
    :src="RgkLogos[rgkCode]"
    :alt="RgkTitles[rgkCode]"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeaderLogo',
});
</script>

<script setup lang="ts">
import { useSession } from '@/stores/session';
import { RgkLogos } from '@/enums/rgk/rgk-logos';
import { RgkTitles } from '@/enums/rgk/rgk-titles';

const rgkCode = useSession().rgkCode;
</script>

<style module lang="scss"></style>
