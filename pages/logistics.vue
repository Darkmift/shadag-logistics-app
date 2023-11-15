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
                :error-messages="
                  metaFirstname.dirty && metaFirstname.touched ? errors.firstName : ''
                "
                :name="$t('firstName')"
                :label="$t('firstName')"
                required
              ></v-text-field>
            </v-col>
            <!-- lastName -->
            <v-col cols="6">
              <v-text-field
                v-model="lastName"
                :error-messages="metaLastname.touched ? errors.lastName : ''"
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
            <!-- National ID -->
            <v-col cols="6">
              <v-text-field
                v-model="nationalId"
                :error-messages="metaNationalId.touched ? errors.nationalId : ''"
                :label="$t('nationalId')"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-radio-group
                v-model="isMeantForRequester"
                :error-messages="metaIsMeantForRequester.touched ? errors.isMeantForRequester : ''"
              >
                <v-radio color="primary" :label="$t('yes')" :value="true" checked></v-radio>
                <v-radio color="primary" :label="$t('meantForOther')" :value="false"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>

          <!-- Additional fields -->
          <v-row>
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
              <v-phone-input
                :label="$t('extraContactPhone')"
                :countryLabel="$t('phone.phoneCountry')"
                v-model="extraContactPhone"
                :rules="[]"
                validate-on="blur"
              />
            </v-col>

            <!-- Destination Address -->
            <v-col cols="6">
              <v-text-field
                v-model="destinationAddress"
                :error-messages="metaDestinationAddress.touched ? errors.destinationAddress : ''"
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
              <v-autocomplete
                v-model="city"
                :label="$t('city')"
                :items="cities"
                :error-messages="metaCity.touched ? errors.city : ''"
                auto-select-first
                clearable
              ></v-autocomplete>
            </v-col>

            <!-- Comments For Destination Address -->
            <v-col cols="12">
              <v-textarea
                v-model="commentsForDestinationAddress"
                :error-messages="errors.commentsForDestinationAddress"
                :label="$t('commentsForDestinationAddress')"
              ></v-textarea>
            </v-col>

            <!-- line items -->
            <v-col cols="12">
              <v-autocomplete
                v-model="selectedProductList"
                return-object
                multiple
                :label="$t('products')"
                item-title="name"
                chips
                :items="(products as unknown as ItemInList[])"
                :error-messages="metaProduct.touched ? errors.product : ''"
                auto-select-first
                closable-chips
                clearable
              ></v-autocomplete>
              <multi-input :lineItems="selectedProductList" />
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
import cities from '~/assets/data/cities.json';
import products from '~/assets/data/products.json';
import { useForm, useField, configure } from 'vee-validate';
import 'v-phone-input/dist/v-phone-input.css';
import { localize } from '@vee-validate/i18n';
import MultiInput from '~/components/MultiRowInput.vue';
import type { FormValues, LineItem, ItemInList } from '~/types';

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
      yes: 'Yes',
      meantForOther: 'No, I want to help someone else',
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
      yes: 'כן',
      meantForOther: 'לא, אני רוצה לעזור למישהו אחר',
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
const { value: firstName, meta: metaFirstname } = useField('firstName', 'required');
const { value: lastName, meta: metaLastname } = useField(
  'lastName', // (value) => !!value || i18n.t('lastName'),
  'required'
);
const { value: phone } = useField('phone', 'required');
const { value: nationalId, meta: metaNationalId } = useField('nationalId', 'israelId');
const { value: isMeantForRequester, meta: metaIsMeantForRequester } = useField(
  'isMeantForRequester',
  'required',
  { type: 'checkbox', initialValue: true }
);
const { value: extraContactFullName } = useField('extraContactFullName');
const { value: extraContactPhone } = useField('extraContactPhone', {
  requiredIfFieldListedIsFilled: ['extraContactFullName', i18n.t('extraContactFullName')],
});
const { value: destinationAddress, meta: metaDestinationAddress } = useField(
  'destinationAddress',
  'required'
);
const { value: streetNumber } = useField('streetNumber', 'integer');
const { value: apartmentNumber } = useField('apartmentNumber', 'integer');
const { value: city, meta: metaCity } = useField(
  'city',
  // (v: string) => {
  //   if (!!v || cities.includes(v) === false) {
  //     console.log('cityerror');
  //     return i18n.t('cityError');
  //   }
  //   return true;
  // },
  'required',
  { initialValue: '' }
);
const { value: commentsForDestinationAddress } = useField(
  'commentsForDestinationAddress',
  'max:500'
);

const { value: selectedProductList, meta: metaProduct } = useField<LineItem[]>(
  'product',
  'required',
  {
    initialValue: [],
  }
);
const { value: commentsForRequest } = useField('commentsForRequest', 'max:500');


watch(
  () => selectedProductList.value,
  (selectedItems) => {
    console.log('🚀 ~ file: logistics.vue:217 ~ newVal', selectedItems);

    selectedProductList.value.forEach((item) => {
      item.note = item.note || '';
      item.quantity = item.quantity || 1;
    });
  }
);

useSetLocale(validate as any);

// phone v-phone-input rule
const requiredRule = (value: string) => !!value || i18n.t('phone.invalidPhoneGiven');
// set city in autocomplete
const setCity = (value: string) => {
  console.log('🚀 ~ file: logistics.vue:302 ~ setCity ~ value:', value);
  city.value = value;
};
const onSubmit = handleSubmit((values) => {
  console.log(values, firstName.value);
});
</script>
