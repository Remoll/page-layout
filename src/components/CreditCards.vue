<script setup>
import creditCards from "../assets/images/creditcards.png";
</script>

<template>
  <div class="flex flex-col items-center">
    <p class="text-[12px] font-[400] leading-[16px]">We accept the following credit cards</p>
    <img :src="creditCards" class="h-[40px] w-fit" alt="Image" />
  </div>
</template>
