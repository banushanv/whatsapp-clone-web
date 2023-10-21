<template>
  <div class="bg-gray-100 px-4 py-4 flex items-center">
    <IconPlus class="cursor-pointer"></IconPlus>
    <div class="flex-1 mx-4">
      <input
      autocomplete="off"
      class="
            mr-1
            shadow
            apperance-none
            rounded-lg
            w-full
            py-3
            px-4
            text-gray-700
            leading-tight
            focus:outline-none 
            focus:shadow-outline
                    "
        type="text"
        v-model="message"
        :placeholder="translate('whatsapp_clone.type_message')"
      >
      <button    v-if="message"
                        :disabled="disableBtn"
                        @click="sendMessage" 
                        class="ml-3 p-2 w-12 flex items-center justify-center cursor-pointer"
                    >    <IconSend></IconSend>

                    </button>
      </div>

    </div>


</template>

<script setup lang="ts">
import IconRecord from '@/components/icons/IconRecord.vue';
//import IconSmiley from '@/components/icons/IconSmiley.vue';
import IconSend from '@/components/icons/IconSend.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import { useUserStore } from '@/stores/userStore';
import { translate } from '@/locales';
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
const userStore: any = useUserStore();
const { userDataForChat, currentChat, sub } = storeToRefs(userStore);
const message=ref('');
let disableBtn = ref(false);

watch(() => currentChat.value, (chat) => {
    if (chat.length) {
        setTimeout(() => {
            let objDiv: any = document.getElementById('MessagesSection');
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 50);
    }
}, { deep:true });


const sendMessage = async () => {
    if (message.value === '') return ;
    disableBtn.value = true;
debugger;
    await userStore.sendMessage({
        message: message.value,
        sub2: userDataForChat.value[0].sub2,
        chatId: userDataForChat.value[0].id
    });
    message.value = '';

    const userData = userDataForChat.value[0];

    let data = {
        id: userData.id,
        key1: 'sub1HasViewed', val1: false, 
        key2: 'sub2HasViewed', val2: false
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
