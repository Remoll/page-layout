<template>
  <form class="space-y-4">
    <div class="grid grid-cols-1 gap-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1">
          <input
            type="text"
            id="firstName"
            v-model="form.firstName"
            placeholder="First Name"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="col-span-1">
          <input
            type="text"
            id="lastName"
            v-model="form.lastName"
            placeholder="Last Name"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="col-span-1">
        <input
          type="text"
          id="street"
          v-model="form.street"
          placeholder="Street"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1">
          <input
            type="text"
            id="postalCode"
            v-model="form.postalCode"
            placeholder="Postal Code"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div class="col-span-1">
          <input
            type="text"
            id="city"
            v-model="form.city"
            placeholder="City"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

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
      class="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
