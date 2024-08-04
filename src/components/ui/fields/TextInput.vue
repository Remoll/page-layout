<template>
  <Input v-model="model" :type="FieldType.text" :placeholder="placeholder" />
</template>

<script lang="ts" setup>
import Input from "./Input.vue";
import { FieldType } from "./interface";

defineProps<{
  placeholder: string;
}>();

const model = defineModel({ type: String });
</script>
