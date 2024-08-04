<template>
  <form class="space-y-4">
    <div class="grid grid-cols-1 gap-4">
      <FormRow>
        <TextInput
          id="firstName"
          v-model="form.firstName"
          placeholder="First Name"
        />
        <TextInput
          id="lastName"
          v-model="form.lastName"
          placeholder="Last Name"
        />
      </FormRow>

      <TextInput id="street" v-model="form.street" placeholder="Street" />

      <FormRow>
        <PostalCodeInput
          id="postalCode"
          v-model="form.postalCode"
          placeholder="Postal Code"
        />
        <TextInput id="city" v-model="form.city" placeholder="City" />
      </FormRow>

      <div class="col-span-1">
        <input
          type="text"
          id="phoneNumber"
          v-model="form.phoneNumber"
          placeholder="Phone Number"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div class="col-span-1">
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Email"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
    <button
      type="submit"
      class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
    >
      Proceed to payment
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
  EmailInput,
  PhoneNumberInput,
  PostalCodeInput,
  TextInput,
} from "./ui/fields";

import FormRow from "./ui/form/FormRow.vue";

interface Form {
  firstName: string;
  lastName: string;
  street: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  email: string;
}

const form = ref<Form>({
  firstName: "",
  lastName: "",
  street: "",
  postalCode: "",
  city: "",
  phoneNumber: "",
  email: "",
});
</script>
