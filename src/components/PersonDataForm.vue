<template>
  <form class="space-y-4 w-full">
    <div class="grid grid-cols-1 gap-4">
      <FormRow>
        <TextInput v-model="form.firstName" placeholder="First Name" />
        <TextInput v-model="form.lastName" placeholder="Last Name" />
      </FormRow>
      <TextInput v-model="form.street" placeholder="Street" />
      <FormRow>
        <TextInput v-model="form.postalCode" placeholder="Postal Code" />
        <TextInput v-model="form.city" placeholder="City" />
      </FormRow>
      <PhoneNumberInput v-model="form.phoneNumber" placeholder="Phone Number" />
      <EmailInput v-model="form.email" placeholder="Email" />
    </div>
    <button
      type="submit"
      class="bg-[#006340] text-white rounded-md uppercase w-full"
    >
      Proceed to payment
    </button>
  </form>
</template>

<script setup lang="ts">
import { EmailInput, PhoneNumberInput, TextInput } from "./ui/fields";
import { ref } from "vue";
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
