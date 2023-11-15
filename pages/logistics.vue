<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form @submit.prevent="onSubmit">
          <!-- requester info -->
          <v-row>
            <!-- firstName -->
            <v-col cols="6">
              <v-text-field
                v-model="firstName"
                :error-messages="errors.firstName"
                :name="$t('firstName')"
                :label="$t('firstName')"
                required
              ></v-text-field>
            </v-col>
            <!-- lastName -->
            <v-col cols="6">
              <v-text-field
                v-model="lastName"
                :error-messages="errors.lastName"
                :data-vv-as="$t('lastName')"
                :label="$t('lastName')"
                required
              ></v-text-field>
            </v-col>
            <!-- phone -->
            <v-col cols="6">
              <v-phone-input
                :label="$t('phone.phoneLabel')"
                :countryLabel="$t('phone.phoneCountry')"
                v-model="phone"
                :rules="[requiredRule]"
                validate-on="blur"
              />
            </v-col>
          </v-row>

          <!-- Additional fields -->
          <v-row>
            <!-- National ID -->
            <v-col cols="6">
              <v-text-field
                v-model="nationalId"
                :error-messages="errors.nationalId"
                :label="$t('nationalId')"
                required
              ></v-text-field>
            </v-col>

            <!-- Extra Contact Full Name -->
            <v-col cols="6">
              <v-text-field
                v-model="extraContactFullName"
                :error-messages="errors.extraContactFullName"
                :label="$t('extraContactFullName')"
              ></v-text-field>
            </v-col>

            <!-- Extra Contact Phone -->
            <v-col cols="6">
              <v-text-field
                v-model="extraContactPhone"
                :error-messages="errors.extraContactPhone"
                :label="$t('extraContactPhone')"
              ></v-text-field>
            </v-col>

            <!-- Destination Address -->
            <v-col cols="6">
              <v-text-field
                v-model="destinationAddress"
                :error-messages="errors.destinationAddress"
                :label="$t('destinationAddress')"
                required
              ></v-text-field>
            </v-col>

            <!-- Street Number -->
            <v-col cols="6">
              <v-text-field
                v-model="streetNumber"
                :error-messages="errors.streetNumber"
                :label="$t('streetNumber')"
              ></v-text-field>
            </v-col>

            <!-- Apartment Number -->
            <v-col cols="6">
              <v-text-field
                v-model="apartmentNumber"
                :error-messages="errors.apartmentNumber"
                :label="$t('apartmentNumber')"
              ></v-text-field>
            </v-col>

            <!-- City -->
            <v-col cols="6">
              <v-text-field
                v-model="city"
                :error-messages="errors.city"
                :label="$t('city')"
                required
              ></v-text-field>
            </v-col>

            <!-- Comments For Destination Address -->
            <v-col cols="12">
              <v-textarea
                v-model="commentsForDestinationAddress"
                :error-messages="errors.commentsForDestinationAddress"
                :label="$t('commentsForDestinationAddress')"
              ></v-textarea>
            </v-col>

            <!-- Comments For Request -->
            <v-col cols="12">
              <v-textarea
                v-model="commentsForRequest"
                :error-messages="errors.commentsForRequest"
                :label="$t('commentsForRequest')"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-btn type="submit" color="primary">{{ $t('submit') }}</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useForm, useField, configure } from 'vee-validate';
import 'v-phone-input/dist/v-phone-input.css';
import { localize } from '@vee-validate/i18n';

export interface LineItem {
  code: string;
  quantity: number;
  note: string;
}

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  nationalId: string;
  extraContactFullName: string;
  extraContactPhone: string;
  destinationAddress: string;
  streetNumber: string;
  apartmentNumber: string;
  city: string;
  commentsForDestinationAddress: string;
  items?: LineItem[];
  commentsForRequest: string;
}

const i18n = useI18n({
  useScope: 'global',
  locale: 'en',

  messages: {
    en: {
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: {
        phoneLabel: 'Phone',
        phoneCountry: 'Country',
        phoneCountryFor: 'Country for {0}',
        invalidPhoneGiven: 'Invalid phone number given for {country}',
      },
      nationalId: 'National ID',
      extraContactFullName: 'Extra Contact Full Name',
      extraContactPhone: 'Extra Contact Phone',
      destinationAddress: 'Destination Address',
      streetNumber: 'Street Number',
      apartmentNumber: 'Apartment Number',
      city: 'City',
      commentsForDestinationAddress: 'Comments for Destination Address',
      amountItem: 'Amount Item',
      itemName: 'Item Name',
      itemDescription: 'Item Description',
      commentsForRequest: 'Comments for Request',
    },
    he: {
      phone: {
        phoneLabel: 'טלפון',
        phoneCountry: 'מדינה',
        phoneCountryFor: 'מדינה עבור {0}',
        invalidPhoneGiven: 'מספר טלפון לא תקין עבור {country}',
      },
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      nationalId: 'תעודת זהות',
      extraContactFullName: 'שם איש קשר נוסף',
      extraContactPhone: 'טלפון איש קשר נוסף',
      destinationAddress: 'שם רחוב\\שם בסיס צבאי',
      streetNumber: 'מספר בית',
      apartmentNumber: 'מספר דירה',
      city: 'עיר',
      commentsForDestinationAddress: 'הערות לכתובת יעד',
      amountItem: 'כמות',
      itemName: 'שם פריט',
      itemDescription: 'תיאור פריט',
      commentsForRequest: 'הערות לבקשה',
    },
  },
});

// Activate the locale
configure({
  generateMessage: localize('he', {
    names: {
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      phone: 'טלפון',
      nationalId: 'תעודת זהות',
      extraContactFullName: 'שם איש קשר נוסף',
      extraContactPhone: 'טלפון איש קשר נוסף',
      destinationAddress: 'שם רחוב\\שם בסיס צבאי',
      streetNumber: 'מספר בית',
      apartmentNumber: 'מספר דירה',
      city: 'עיר',
      commentsForDestinationAddress: 'הערות לכתובת יעד',
      amountItem: 'כמות',
      itemName: 'שם פריט',
      itemDescription: 'תיאור פריט',
      commentsForRequest: 'הערות לבקשה',
    },
  }),
});

// Using VeeValidate's useForm and useField
const { handleSubmit, errors, validate } = useForm<FormValues>();
const { value: firstName } = useField('firstName', 'required');
const { value: lastName } = useField(
  'lastName',
  'required'
  // (value) => !!value || i18n.t('lastName')
);
const { value: phone } = useField('phone', 'required');
const { value: nationalId } = useField('nationalId', 'israelId');
const { value: extraContactFullName } = useField('extraContactFullName');
const { value: extraContactPhone } = useField('extraContactPhone', {
  requiredIfFieldListedIsFilled: ['extraContactFullName', i18n.t('extraContactFullName')],
});
const { value: destinationAddress } = useField('destinationAddress', 'required');
const { value: streetNumber } = useField('streetNumber');
const { value: apartmentNumber } = useField('apartmentNumber');
const { value: city } = useField('city', 'required');
const { value: commentsForDestinationAddress } = useField(
  'commentsForDestinationAddress',
  'max:500'
);
// TODO figure out array of item inputs
// const { value: amountItem } = useField('amountItem', 'required');
// const { value: itemName } = useField('itemName', 'required');
// const { value: itemDescription } = useField('itemDescription');
const { value: commentsForRequest } = useField('commentsForRequest', 'max:500');

useSetLocale(validate as any);

// phone v-phone-input rule
const requiredRule = (value: string) => !!value || i18n.t('phone.invalidPhoneGiven');

const onSubmit = handleSubmit((values) => {
  console.log(values, firstName.value);
});
</script>
