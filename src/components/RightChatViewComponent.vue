<template>
  <div class="ml-[420px] w-full">
    <div class="w-full">
      <div id="BG" class="w-full h-full fixed"></div>
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
#BG {
  background: url('/whatsapp-bg.png');
  z-index: -1;
}
</style>
