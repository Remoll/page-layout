<script setup lang="ts">
import { computed } from "vue";
import parseText from "../../utils/parseText";

interface Props {
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
    class="flex items-center gap-[1.563rem]"
    :class="{ 'flex-row-reverse': reverse }"
  >
    <img
      :src="imageSrc"
      class="w-[36.438rem] h-[36.438rem] rounded-[1.875rem]"
      alt="Image"
    />
    <div class="">
      <h1
        class="text-left pb-[2rem] text-[2.625rem] font-[700] leading-[3.25rem]"
        v-html="parsedTitle"
      />
      <p
        class="text-justify text-[1rem] font-[400] leading-[1.563rem]"
        v-html="parsedDescription"
      />
    </div>
  </div>
</template>
