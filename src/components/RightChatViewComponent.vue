<template>
  <div class="sm:ml-[420px] w-full ml-auto">
    <div class="w-full">
      <div  class="w-full  h-full fixed bg-whatsapp-bg " id="ChatBg"></div>
      <RightMessageTopViewComponent></RightMessageTopViewComponent>
      <ChatListComponent></ChatListComponent>
      <BottomSendChatComponentView></BottomSendChatComponentView>
    </div>
  </div>
</template>
<script setup lang="ts">
import BottomSendChatComponentView from '@/components/layouts/BottomSendChatComponentView.vue';
import RightMessageTopViewComponent from '@/components/layouts/RightMessageTopViewComponent.vue';
import ChatListComponent from '@/components/sections/ChatListComponent.vue';
</script>

<style>
#ChatBg {
  z-index: -1;
}
</style>
