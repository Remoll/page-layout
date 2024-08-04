<template>
  <div class="col-span-1">
    <Input v-model="model" :type="FieldType.email" placeholder="Email" />
  </div>
</template>

<script lang="ts" setup>
import Input from "./Input.vue";
import { FieldType } from "./interface";

defineProps<{
  placeholder: string;
}>();

const model = defineModel({ type: String });
</script>
