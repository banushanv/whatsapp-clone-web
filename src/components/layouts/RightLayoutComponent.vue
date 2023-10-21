<template>
  <!-- Right -->
  <div class="w-5/6 border flex flex-col">
    <!-- Header -->
    <RightLayoutHeaderComponent :selectedContact="selectedContact"></RightLayoutHeaderComponent>
   <div v-if="userDataForChat.length">
            <MessagesComponent  />
        </div>
        <div v-else>
            <div class=" fixed w-[calc(100vw-620px)] h-[100vh] bg-gray-100 text-center">
            <div class="grid h-screen place-items-center">
                <div>
                    <div class="w-full flex items-center justify-center">
                        <img width="325" src="w-web-not-loaded-chat.png" alt="">
                    </div>
                    <div class="text-[32px] text-gray-500 font-light mt-10">WhatsApp Web</div>
                    <div class="text-[14px] text-gray-600 mt-2">
                        <div>Send and receive messages without keeping your phone online.</div>
                        <div>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</div>
                    </div>
                </div>
            </div>
        </div>
        </div>

 
  </div>
</template>

<script setup lang="ts">
import RightLayoutHeaderComponent from '@/components/layouts/sections/RightLayoutHeaderComponent.vue';
import MessagesComponent from '@/components/sections/MessagesComponent.vue';

import { ref, type PropType } from 'vue';
import type ContactModel from '@/models/ContactModel';
import type MessageModel from '@/models/MessageModel';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const {  userDataForChat } = storeToRefs(userStore);

defineProps({
  selectedContact: {
    required: true,
    type: Object as PropType<ContactModel>
  }
});


</script>
<style>

</style>