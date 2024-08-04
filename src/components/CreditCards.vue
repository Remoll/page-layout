<script setup>
import creditCards from "../assets/images/creditcards.png";
</script>

<template>
  <div class="flex flex-col items-center">
    <p class="text-[0.75rem] font-[400] leading-[1rem]">We accept the following credit cards</p>
    <img :src="creditCards" class="h-[2.5rem] w-fit" alt="Image" />
  </div>
</template>
