<template>
  <div class="ml-[420px] w-full">
    <div class="w-full">
      <div id="BG" class="w-full"></div>

      <div class="border-l border-green-500 w-full">
        <div
          class="bg-[#f0f2f5] fixed z-10 min-w-[calc(100vw-420px)] flex justify-between items-center px-2 py-2"
        >
          <div class="flex items-center">
            <img
              v-if="userDataForChat[0] && userDataForChat[0].picture"
              class="rounded-full mx-1 w-10"
              :src="userDataForChat[0].picture"
            />

            <div
              v-if="userDataForChat[0] && userDataForChat[0].firstName"
              class="text-gray-700 ml-1 "
            >
              {{ userDataForChat[0].firstName }}
            </div>
          </div>

          <div class="flex">
            <div class="ml-6 cursor-pointer">
           
            </div>

            <div class="ml-6 cursor-pointer">
              <IconSearch></IconSearch>
            </div>

            <div class="ml-6 cursor-pointer">
              <IconMenu></IconMenu>
            </div>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div
        id="MessagesSection"
        class="pt-20 pb-8 z-[-1] h-[calc(100vh-65px)] w-[calc(100vw-420px)] overflow-auto fixed touch-auto"
      >
        <div v-if="currentChat && currentChat.length" class="px-20 text-sm">
          <div v-for="msg in currentChat[0].messages" :key="msg">
            <div v-if="msg.sub === sub" class="flex w-[calc(100%-50px)]">
              <div class="inline-block bg-white p-2 rounded-md my-1">
                {{ msg.message }}
              </div>
            </div>

            <div v-else class="flex justify-end space-x-1 w-[calc(100%-50px)] float-right">
              <div class="inline-block bg-green-200 p-2 rounded-md my-1">
                {{ msg.message }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[calc(100vw-420px)] p-2.5 z-10 bg-[#F0F0F0] fixed bottom-0">
        <div class="flex items-center justify-center">
          <IconPlus class="cursor-pointer mx-1.5"></IconPlus>

          <input
            autocomplete="off"
            class="mr-1 shadow apperance-none rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            v-model="message"
            :placeholder="translate('whatsapp_clone.type_message')"
          />
          <button
            v-if="message"
            :disabled="disableBtn"
            @click="sendMessage"
            class="ml-3 p-2 w-12 flex items-center justify-center cursor-pointer"
          >
            <IconSend></IconSend>
          </button>
          <button v-else>
            <IconRecord></IconRecord>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconAttachment from '@/components/icons/IconAttachment.vue';
import { useUserStore } from '@/stores/userStore';
import IconRecord from '@/components/icons/IconRecord.vue';
import { translate } from '@/locales';
import IconSend from '@/components/icons/IconSend.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import { storeToRefs } from 'pinia';
const userStore: any = useUserStore();
const { userDataForChat, sub, currentChat } = storeToRefs(userStore);

let message = ref('');
let disableBtn = ref(false);

watch(
  () => currentChat.value,
  (chat) => {
    if (chat.length) {
      setTimeout(() => {
        let objDiv: any = document.getElementById('MessagesSection');
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 50);
    }
  },
  { deep: true }
);

const sendMessage = async () => {
  if (message.value === '') return;
  disableBtn.value = true;

  await userStore.sendMessage({
    message: message.value,
    sub2: userDataForChat.value[0].sub2,
    chatId: userDataForChat.value[0].id
  });
  message.value = '';

  const userData = userDataForChat.value[0];

  let data = {
    id: userData.id,
    key1: 'sub1HasViewed',
    val1: false,
    key2: 'sub2HasViewed',
    val2: false
  };
  if (userData.sub1 === sub.value) {
    data.val1 = true;
    data.val2 = false;
  } else if (userData.sub2 === sub.value) {
    data.val1 = false;
    data.val2 = true;
  }
  await userStore.hasReadMessage(data);

  let objDiv: any = document.getElementById('MessagesSection');
  objDiv.scrollTop = objDiv.scrollHeight;

  disableBtn.value = false;
};
</script>
<style>
#BG {
  background: url('/whatsapp-bg.png');
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
}
</style>
