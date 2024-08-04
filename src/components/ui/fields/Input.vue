<template>
  <div class="col-span-1">
    <FormKit
      v-model="model"
      :type="type"
      :validation="validation"
      validation-visibility="live"
      :placeholder="placeholder"
      :classes="{
        outer: '',
        inner: 'overflow-hidden border border-[#ADADAD] rounded-[10px]',
        input: 'w-full text-[#2D473E] text-[1rem] p-[0.7rem]',
        help: 'text-xs text-gray-500',
      }"
      :validation-messages="validationMessages"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { FieldType } from "./interface";

const props = defineProps<{
  type: FieldType;
  placeholder: string;
}>();

const model = defineModel({ type: String });

const validation = computed(() => {
  switch (props.type) {
    case FieldType.phoneNumber: {
      return "matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/";
    }
    default: {
      return props.type;
    }
  }
});

const validationMessages = computed(() => {
  switch (props.type) {
    case FieldType.phoneNumber: {
      return {
        matches: "Phone number must be in the format xxx-xxx-xxxx",
      };
    }

    default: {
      return null;
    }
  }
});
</script>
