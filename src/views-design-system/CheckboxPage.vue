<template>
  <div>
    <AppCheckbox
      :model-value="null"
      class="m-0.5"
    />
    <AppCheckbox
      :model-value="null"
      inverse-color
      label="Test"
      class="m-0.5"
    />
    <br />
    <AppCheckbox
      v-model="checked"
      class="m-0.5"
    />
    <AppCheckbox
      v-model="checked"
      label="Test"
      class="m-0.5"
    />
    <br />
    <AppCheckbox
      v-model="checked"
      is-disabled
      class="m-0.5"
    />
    <AppCheckbox
      v-model="checked"
      is-disabled
      label="Test"
      class="m-0.5"
    />
    <br />
    <AppCheckbox
      :model-value="null"
      is-disabled
      class="m-0.5"
    />
    <AppCheckbox
      :model-value="null"
      is-disabled
      inverse-color
      label="Test"
      class="m-0.5"
    />
    <br />
    <AppCheckbox
      v-model="checked"
      class="m-0.5"
      is-error
    />
    <AppCheckbox
      v-model="checked"
      is-error
      class="m-0.5"
      label="Test"
    />
    <br />
    <AppCheckbox
      :model-value="null"
      is-error
      class="m-0.5"
    />
    <AppCheckbox
      :model-value="null"
      is-error
      inverse-color
      class="m-0.5"
    />
  </div>
  <div>
    <AppRadiobutton
      v-model="radio"
      :group-name="groupName"
      value="Val1"
      label="Value 1"
      class="m-0.5"
    />
    <br />
    <AppRadiobutton
      v-model="radio"
      :group-name="groupName"
      value="Val2"
      label="Value 2"
      class="m-0.5"
    />
    <br />
    <AppRadiobutton
      v-model="radio"
      :group-name="groupName"
      value="Val3"
      label="Value 3"
      class="m-0.5"
    />
    <br />
    <AppRadiobutton
      v-model="radio"
      :group-name="groupName"
      value="Val4"
      label="Value 4"
      class="m-0.5"
      is-disabled
    />
    <br />
    <AppRadiobutton
      v-model="radio"
      :group-name="groupName"
      value="Val5"
      label="Value 5"
      class="m-0.5"
      is-disabled
    />
    <br />
    <AppRadiobutton
      v-model="radio"
      :group-name="groupName"
      value="Val6"
      label="Value 6"
      class="m-0.5"
      is-error
    />
  </div>
  <div>
    <AppSwitcher
      v-model="checked"
      class="m-0.5"
    />
    <AppSwitcher
      v-model="checked"
      class="m-0.5"
      is-disabled
    />
  </div>
</template>

<script lang="ts">
import AppCheckbox from '@/components/inputs/AppCheckbox.vue';
import AppSwitcher from '@/components/inputs/AppSwitcher.vue';

export default {
  name: 'CheckboxPage',
  components: { AppCheckbox },
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import AppRadiobutton from '@/components/inputs/AppRadiobutton.vue';

const checked = ref(false);
const radio = ref('');
const groupName = 'myRadioButtons';
</script>

<style scoped></style>
