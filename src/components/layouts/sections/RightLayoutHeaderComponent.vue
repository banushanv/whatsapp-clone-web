<template>
  <!-- Header -->
  <div class="py-2 px-3 bg-gray-100 flex flex-row justify-between items-center">
    <div class="flex items-center">
      <div>
        <img class="w-10 h-10 rounded-full" :src="selectedContact.imageUrl" />
      </div>
      <div class="ml-4">
        <p class="text-grey-darkest">
          {{ selectedContact.name }}
        </p>
        <p class="text-grey-darker text-xs mt-1" v-if="selectedContact.isGroup">
           Siva,Kumar,Banu,Thiru
        </p>
      </div>
    </div>

    <div class="flex">
      <div class="ml-6 cursor-pointer">
        <IconAttachment></IconAttachment>
      </div>

      <div class="ml-6 cursor-pointer">
        <IconSearch></IconSearch>
      </div>

      <div class="ml-6 cursor-pointer">
        <IconMenu></IconMenu>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconAttachment from '@/components/icons/IconAttachment.vue';
import type ContactModel from '@/models/ContactModel';
import type { PropType } from 'vue';

defineProps({
  selectedContact: {
    required: true,
    type: Object as PropType<ContactModel>
  }
});
</script>
