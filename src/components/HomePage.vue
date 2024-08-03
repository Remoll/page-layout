<script setup>
import ImageWithDescription from "./ImageWithDescription.vue";
import imagesWithDescriptions from "../mock/imagesWithDescriptions";

function isOdd(number) {
  return number % 2 !== 0;
}
</script>

<template>
  <div class="w-[1232px] h-[2466px]">
    <ImageWithDescription
      v-for="(item, index) in imagesWithDescriptions"
      :key="index"
      :imageSrc="item.imageSrc"
      :title="item.title"
      :description="item.description"
      :reverse="isOdd(index)"
    />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
