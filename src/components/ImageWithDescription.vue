<script setup lang="ts">
import { computed } from "vue";
import parseText from "../utils/parseText";

export interface Props {
  imageSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
});

const parsedTitle = computed(() => (props.title ? parseText(props.title) : ""));

const parsedDescription = computed(() =>
  props.description ? parseText(props.description) : ""
);
</script>

<template>
  <div
    class="flex items-center gap-[24px]"
    :class="{ 'flex-row-reverse': reverse }"
  >
    <img :src="imageSrc" class="w-[583px] h-[583px]" alt="Image" />
    <div class="">
      <h1 class="text-left pb-[2rem] text-[42px] font-[700] leading-[52px]" v-html="parsedTitle" />
      <p class="text-justify text-[16px] font-[400] leading-[24px]" v-html="parsedDescription" />
    </div>
  </div>
</template>

<style scoped>
/* .read-the-docs {
  color: #888;
} */
</style>
