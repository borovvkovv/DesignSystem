<template>
  <BaseForm
    class="form"
    :validator="validator"
    @submit="submit"
  >
    <AppValidatableInput
      v-model="validator.userName"
      :input-type="InputType.Text"
      placeholder="Имя пользователя"
    />
    <AppValidatableInput
      v-model="validator.password"
      :input-type="InputType.Password"
      placeholder="Пароль"
    />
    <BasePasswordInput v-model="validator.password.$model" />
    <TextButton
      text="Submit"
      type="submit"
    />
  </BaseForm>
</template>

<script lang="ts">
export default {
  name: 'FormPage',
};
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import useVuelidate, { type ValidationArgs } from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import BaseForm from '@/components/forms/BaseForm.vue';
import TextButton from '@/components/buttons/TextButton.vue';
import AppValidatableInput from '@/components/inputs/AppValidatableInput.vue';
import { InputType } from '@/components/inputs/models';
import BasePasswordInput from '@/components/inputs/BasePasswordInput.vue';

type Form = {
  userName: string;
  password: string;
};

const form = reactive<Form>({
  userName: '',
  password: '',
});

const rules: ValidationArgs<Form> = {
  userName: { required: helpers.withMessage<string>('Введите логин', required) },
  password: { required: helpers.withMessage<string>('Введите пароль', required) },
};
const errors = ref({});
const validator = useVuelidate(rules, form, { $externalResults: errors });
const submit = () => console.log(form, validator);
</script>

<style scoped>
.form {
}
</style>
