<script setup>
import ImageWithDescription from "./ImageWithDescription.vue";
import CreditCards from "./CreditCards.vue";
import InfoSection from "./InfoSection.vue";

import { imagesWithDescriptions } from "../mock/mock";

function isOdd(number) {
  return number % 2 !== 0;
}
</script>

<template>
  <div class="w-[1232px] h-[2466px]">
    <div class="mb-[3rem]">
      <ImageWithDescription
        v-for="(item, index) in imagesWithDescriptions"
        :key="index"
        :imageSrc="item.imageSrc"
        :title="item.title"
        :description="item.description"
        :reverse="isOdd(index)"
      />
    </div>

    <InfoSection class="mb-[1rem]" />

    <CreditCards />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
