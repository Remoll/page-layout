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
      <div class="absolute flex flex-col justify-center top-[-1rem] right-0 w-[10rem] h-[10rem] bg-[#006340] text-[white] rounded-full">
        <h2 class="text-[38px] font-[500] leading-[44.53px] pb-[0.5rem]">$1.99</h2>
        <p class="text-[14px] font-[400] leading-[16.41px]">Original value $500</p>
      </div>
    </div>
    <div class="grow ml-[1rem]">
      <div class="text-left pb-[1rem]">
        <h1 class="text-[52px] font-[800] leading-[55px] pb-[0.5rem]">Chance to win a StockX Mystery Box today!</h1>
        <p class="text-[22px] font-[400] leading-[25.78px]">Unleash the Excitement of Mystery Electronics</p>
      </div>
      <div
        class="flex flex-col items-center border-[1px] border-[#DBDBDB] rounded-[20px] p-[24px]"
      >
        <h2 class="text-[32px] font-[500] leading-[37.5px] text-[#2D473E] pb-[1.5rem]">
          Enter details
        </h2>
        <PersonDataForm />
        <div class="flex mt-[2rem]">
          <img
            v-for="(src, index) in secureImgs"
            :key="index"
            :src="src"
            class="h-[40px] w-fit"
            alt="Image"
          />
        </div>
      </div>
    </div>
  </div>

  <h1
    class="w-[790px] text-[48px] font-[700] leading-[52px] text-[#2D473E] mx-auto pb-[0.5rem]"
  >
    Top Tech Mystery Box at Unbeatable Prices
  </h1>

  <p class="text-[20px] font-[500] leading-[23.44px] text-[#006340] pb-[2rem]">
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
