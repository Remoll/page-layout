<template>
    <div class="col-span-1">
      <input
        type="tel"
        :id="id"
        v-model="model"
        :placeholder="placeholder"
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps({
    id: String,
    placeholder: String,
  });
  const model = defineModel({ type: String });
  </script>
  