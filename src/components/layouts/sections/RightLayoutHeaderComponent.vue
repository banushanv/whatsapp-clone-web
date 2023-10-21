<template>
  <!-- Header -->
  <div class="py-2 px-3 bg-gray-100 flex flex-row justify-between items-center">
    <div class="flex items-center">
      <div>
        <img  v-if="userDataForChat[0] && userDataForChat[0].picture"
                            class="rounded-full mx-1 w-10 h-10" 
                            :src="userDataForChat[0].picture" />
      </div>
      <div  class="text-gray-900 ml-1 font-semibold"      v-if="userDataForChat[0] && userDataForChat[0].firstName">
        <p class="text-grey-darkest">
          {{ userDataForChat[0].firstName }}
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
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
const userStore: any = useUserStore();
const { userDataForChat } = storeToRefs(userStore);

defineProps({
  selectedContact: {
    required: true,
    type: Object as PropType<ContactModel>
  }
});
</script>
