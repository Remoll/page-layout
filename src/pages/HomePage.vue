<script lang="ts" setup>
import ImageWithDescription from "../components/ui/ImageWithDescription.vue";
import CreditCards from "../components/CreditCards.vue";
import InfoSection from "../components/InfoSection.vue";
import { images } from "../mock/mock";
import Thumbnails from "../components/ui/Thumbnails.vue";
import { imagesWithDescriptions } from "../mock/mock";
import PersonDataForm from "../components/PersonDataForm.vue";
import isOdd from "../utils/isOdd";
import secure001 from "../assets/images/secure001.png";
import secure002 from "../assets/images/secure002.png";
import secure003 from "../assets/images/secure003.png";

const secureImgs = [secure001, secure002, secure003];
</script>

<template>
  <div class="flex items-center pb-[4rem]">
    <div class="relative">
      <Thumbnails :images="images" />
      <div
        class="absolute flex flex-col justify-center top-[-1rem] right-0 w-[10rem] h-[10rem] bg-[#006340] text-[white] rounded-full"
      >
        <h2 class="text-[2.375rem] font-[500] leading-[2.783rem] pb-[0.5rem]">
          $1.99
        </h2>
        <p class="text-[0.875rem] font-[400] leading-[1.026rem]">
          Original value $500
        </p>
      </div>
    </div>
    <div class="grow ml-[1rem]">
      <div class="text-left pb-[1rem]">
        <h1 class="text-[3.25rem] font-[800] leading-[3.438rem] pb-[0.5rem]">
          Chance to win a StockX Mystery Box today!
        </h1>
        <p class="text-[1.375rem] font-[400] leading-[1.611rem]">
          Unleash the Excitement of Mystery Electronics
        </p>
      </div>
      <div
        class="flex flex-col items-center border-[0.063rem] border-[#DBDBDB] rounded-[1.25rem] p-[1.563rem]"
      >
        <h2
          class="text-[2rem] font-[500] leading-[2.344rem] text-[#2D473E] pb-[1.5rem]"
        >
          Enter details
        </h2>
        <PersonDataForm />
        <div class="flex mt-[2rem]">
          <img
            v-for="(src, index) in secureImgs"
            :key="index"
            :src="src"
            class="h-[2.5rem] w-fit"
            alt="Image"
          />
        </div>
      </div>
    </div>
  </div>

  <h1
    class="w-[49.375rem] text-[3rem] font-[700] leading-[3.25rem] text-[#2D473E] mx-auto pb-[0.5rem]"
  >
    Top Tech Mystery Box at Unbeatable Prices
  </h1>

  <p
    class="text-[1.25rem] font-[500] leading-[1.465rem] text-[#006340] pb-[2rem]"
  >
    Fast shipping | Easy returns | Special discounts for students
  </p>

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
