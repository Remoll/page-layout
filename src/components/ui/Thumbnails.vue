<template>
  <div class="flex flex-col items-center w-[481px] min-w-[481px]">
    <div class="h-[480px] w-auto pb-[1rem]">
      <img :src="selectedImage" alt="Selected" class="h-full w-auto" />
    </div>
    <div class="flex justify-between w-full">
      <div
        v-for="image in unselectedImages"
        :key="image"
        class="cursor-pointer w-[132px] h-[132px] border-[0.93px] border-[#006340] rounded-[13.94px] overflow-hidden box-border mx-[0.5rem]"
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
