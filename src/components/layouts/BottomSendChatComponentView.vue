<template>
  <div class="w-full sm:w-[calc(100vw-420px)] p-2.5 z-10 bg-[#F0F0F0] fixed bottom-0">
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
</template>

<script setup lang="ts">
import IconRecord from '@/components/icons/IconRecord.vue';
import { translate } from '@/locales';
import IconSend from '@/components/icons/IconSend.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';
import { onMounted, onUnmounted, ref } from 'vue';


const userStore = useUserStore();
const { userDataForChat, sub } = storeToRefs(userStore);

let message = ref('');
let disableBtn = ref(false);


onMounted(() => {
        document.addEventListener('keypress', onKeyEnterHandler);
  });

onUnmounted(() => {
        document.removeEventListener('keypress', onKeyEnterHandler);
  });


  const onKeyEnterHandler=(e: any)=>{    //keyboard events
      if (e.key === 'Enter') {
          sendMessage();
      }
    };

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
  await userStore.hasSeenMessage(data);

  let objDiv: any = document.getElementById('ChatsSection');
  objDiv.scrollTop = objDiv.scrollHeight;

  disableBtn.value = false;
};
</script>
