<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex flex-column align-center">
        <v-icon color="red" size="100">mdi-heart</v-icon>
        <v-card-text class="text-center">
          <h2 class="mb-4">{{ $t('thankYou') }}<span>!</span></h2>
          <p>
            {{ $t('messageReceived') }}
          </p>
        </v-card-text>
        <v-btn to="/form" variant="elevated" color="primary" nuxt> {{ $t('fileAnotherRequest') }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const i18n = useI18n({
  useScope: 'global',
  locale: 'he',
  messages: {
    en: {
      thankYou: 'Thank You',
      messageReceived: 'Your message has been received, we will get back to you soon.',
      fileAnotherRequest: 'To file another request, click here',
    },
    fr: {
      thankYou: 'Merci',
      messageReceived: 'Votre message a été reçu, nous vous répondrons bientôt.',
      fileAnotherRequest: 'Pour déposer une autre demande, cliquez ici',
    },
    he: {
      thankYou: 'תודה רבה',
      messageReceived: 'בקשתך נשלחה אלינו, נחזור אליך בהקדם',
      fileAnotherRequest: 'להגשת בקשה נוספת לחץ כאן',
    },
  },
});
</script>
