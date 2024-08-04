<template>
  <div class="flex flex-col items-center w-[30.063rem] min-w-[30.063rem]">
    <div class="h-[30rem] w-auto pb-[1rem]">
      <img :src="selectedImage" alt="Selected" class="h-full w-auto" />
    </div>
    <div class="flex justify-between w-full">
      <div
        v-for="image in unselectedImages"
        :key="image"
        class="cursor-pointer w-[8.25rem] h-[8.25rem] border-[0.058rem] border-[#006340] rounded-[0.871rem] overflow-hidden box-border mx-[0.5rem]"
        :class="{ active: image === selectedImage }"
        @click="selectImage(image)"
      >
        <img :src="image" alt="Thumbnail" class="w-full h-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface ThumbnailsProps {
  images: string[];
}

const props = defineProps<ThumbnailsProps>();

const selectedImage = ref(props.images[0]);

const unselectedImages = computed(() => {
  return props.images.filter((item) => item !== selectedImage.value);
});

const selectImage = (image: string) => {
  selectedImage.value = image;
};
</script>
