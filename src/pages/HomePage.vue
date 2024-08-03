<script setup>
import ImageWithDescription from "../components/ui/ImageWithDescription.vue";
import CreditCards from "../components/CreditCards.vue";
import InfoSection from "../components/InfoSection.vue";
import { images } from "../mock/mock";
import Thumbnails from "../components/ui/Thumbnails.vue";

import { imagesWithDescriptions } from "../mock/mock";

function isOdd(number) {
  return number % 2 !== 0;
}
</script>

<template>
  <div class="pb-[4rem]">
    <Thumbnails :images="images" />
  </div>

  <h1
    class="w-[790px] text-[48px] font-[700] leading-[52px] text-[#2D473E] mx-auto pb-[0.5rem]"
  >
    Top Tech Mystery Box at Unbeatable Prices
  </h1>

  <p class="text-[20px] font-[500] leading-[23.44px] text-[#006340] pb-[2rem]">Fast shipping | Easy returns | Special discounts for students</p>

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
