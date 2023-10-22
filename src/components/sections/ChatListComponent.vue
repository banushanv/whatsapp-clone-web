<template>
     <div
        id="ChatsSections"
        class="pt-20 pb-8 z-[-1] h-[calc(100vh-65px)] w-full sm:w-[calc(100vw-420px)] overflow-auto fixed touch-auto"
      >
        <div v-if="currentChat && currentChat.length" class="px-20 text-sm">
          <div v-for="msg in currentChat[0].messages" :key="msg">
            <div v-if="msg.sub === sub" class="flex w-full sm:w-[calc(100%-50px)]">
              <div class="inline-block bg-white p-2 rounded-md my-1">
                {{ msg.message }}
              </div>
            </div>

            <div v-else class="flex justify-end space-x-1 w-full sm:w-[calc(100%-50px)] float-right">
              <div class="inline-block bg-green-200 p-2 rounded-md my-1">
                {{ msg.message }}
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useUserStore } from '@/stores/userStore';
  import { watch } from 'vue';
 
  
  const userStore = useUserStore();
  const { currentChat,sub } = storeToRefs(userStore);

  watch(
  () => currentChat.value,
  (chat) => {
    if (chat.length) {
      setTimeout(() => {
        let objDiv: any = document.getElementById('ChatsSections');
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 50);
    }
  },
  { deep: true }
);
  

  </script>
  