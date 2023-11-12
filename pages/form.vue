<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="email"
            :error-messages="errors.email"
            :label="$t('email')"
            required
          ></v-text-field>

          <v-btn type="submit" color="primary">{{ $t('submit') }}</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useForm, useField, defineRule } from 'vee-validate';
import { required, email as emailRule } from '@vee-validate/rules';

const i18n = useI18n({
  useScope: 'global',
  locale: 'en',
  messages: {
    en: { email: 'Email', submit: 'Send' },
    fr: { email: 'Email', submit: 'Envoyer' },
    he: { email: 'דוא"ל', submit: 'שליחת טופס' },
  },
});

interface FormValues {
  email: string;
}

// Using VeeValidate's useForm and useField
const { handleSubmit, errors, validate } = useForm<FormValues>();
const { value: email } = useField('email', 'required|email');

useSetLocale(validate as any);

const onSubmit = handleSubmit((values) => {
  console.log(values, email.value);
});
</script>
