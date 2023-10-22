<template>
  <div
     class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-full mt-[100px] sm:w-[420px] bg-white"
  >
    <div v-for="chat in chats" :key="chat.id">
      <div @click="onSelectChatRow(chat)">
        <ContactSingleComponent :chat="chat" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import ContactSingleComponent from '@/components/sections/ContactSingleComponent.vue';
import type UserDataForChatModel from '@/models/UserDataForChatModel';
import type UserWithChatModel from '@/models/UserWithChatModel';

const userStore = useUserStore();
const { chats, userDataForChat, sub } = storeToRefs(userStore);

onMounted(async () => {
  if (userDataForChat.value.length) {
    await userStore.getChatById(userDataForChat.value[0].id);
  }
});

const onSelectChatRow = async (chat: UserWithChatModel) => {
  userDataForChat.value = [] as UserDataForChatModel[];
  userDataForChat.value.push({
    id: chat.id,
    sub1: chat.sub1,
    sub2: chat.sub2,
    firstName: chat.user.firstName,
    picture: chat.user.picture
  });

  try {
    await userStore.getChatById(chat.id);
     let data = {
      id: chat.id,
      key1: 'sub1HasViewed',
      val1: false,
      key2: 'sub2HasViewed',
      val2: false
    };
     if (chat.sub1 === sub.value) {
      data.val1 = true;
      data.val2 = true;
     } else if (chat.sub2 === sub.value) {
      data.val1 = true;
      data.val2 = true;
     }
     await userStore.hasSeenMessage(data);
  } 
    catch (error) {
      console.log(error);
   }
};
</script>
<!-- Use media queries to change the styles for smaller screens -->
<style scoped>
@media (max-width: 768px) {
  /* Reduce the height and margin-top of the container */
  
  }
</style>