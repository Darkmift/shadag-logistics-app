<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="handleSubmit(onSubmit)">
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
import * as yup from 'yup';
import { useForm } from 'vee-validate';

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

const schema = yup.object({
  email: yup.string().email().required(),
});

const { handleSubmit, errors, useFieldModel } = useForm<FormValues>({
  validationSchema: schema,
});

const [email] = useFieldModel(['email']);

const onSubmit = (values: FormValues) => {
  console.log('Form submitted:', values);
  // Handle form submission logic here
};
</script>
