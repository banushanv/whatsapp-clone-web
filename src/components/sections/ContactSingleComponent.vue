<template>
  <div :class="isActive ? 'bg-gray-100' : ''"  class="min-w-[293px] hidden sm:block ">
    <div class="flex w-full px-4 py-3 items-center cursor-pointer">
      <img class="rounded-full mr-4 w-12" :src="chat.user.picture || ''" />

      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">
            {{ chat.user.firstName }}
          </div>
          <div class="text-[12px] text-gray-600">
            {{ recentCreatedAt(chat) }}
          </div>
        </div>

        <div class="flex items-center">
          <IconDelivered :size="18" :fillColor="seenDeliveredColor(chat)" class="mr-1"></IconDelivered>
          <div class="text-[15px] w-full text-gray-500 flex items-center justify-between">
            {{ recentChatMessage(chat) }}...
          </div>
        </div>
      </div>
    </div>

    <div class="border-b w-[calc(100%-80px)] float-right"></div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, computed } from 'vue';
import dayjs from 'dayjs';
import { useUserStore } from '@/stores/userStore';
import IconDelivered from '@/components/icons/IconDelivered.vue';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { sub, userDataForChat } = storeToRefs(userStore);

const props = defineProps({ chat: Object });
const { chat } = toRefs(props) as any;

const isActive = computed(() => {
  if (userDataForChat.value.length) {
    if (userDataForChat.value[0].sub1 === chat.value.user.sub) {
      return true;
    }
    if (userDataForChat.value[0].sub2 === chat.value.user.sub) {
      return true;
    }
  }
  return false;
});

const seenDeliveredColor = (chat: any) => {
  let color = '';
  if (chat.sub1 === sub.value) {
    if (chat.sub1HasViewed) color = '#7DF9FF';
    else color = '#B5B5B5';
  }
  if (chat.sub2 === sub.value) {
    if (chat.sub2HasViewed) color = '#7DF9FF';
    else color = '#B5B5B5';
  }
    return color;
};

const recentChatMessage = (chat: any) => {
  return chat.messages[chat.messages.length - 1].message.substring(0, 20);
};

const recentCreatedAt = (chat: any) => {
  if (chat.messages.length) {
    return dayjs(chat.messages[chat.messages.length - 1].createdAt).format('YYYY-MM-DD');
  }
};
</script>
