<script setup lang="ts">
import { infoData } from "../mock/mock";
</script>

<template>
  <div class="flex bg-[#f5f5f5]">
    <div
      v-for="(item, index) in infoData"
      :key="index"
      class="flex flex-col flex-1 text-left px-[1rem] py-[2rem]"
    >
      <h2 class="text-[0.75rem] font-[600] leading-[1rem] pb-[0.4rem]">{{ item.title }}</h2>
      <p class="text-[0.625rem] font-[400] leading-[1rem]">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>
