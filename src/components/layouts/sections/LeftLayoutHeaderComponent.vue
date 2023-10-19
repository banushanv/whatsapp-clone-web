<template>
  <!-- Header -->
  <div class="py-2 px-3 bg-gray-100 flex flex-row justify-between items-center">
    <div>
      <img class="w-9 h-9 rounded-full" :src="loggedUser.imageUrl" />
    </div>

    <div class="flex">
      <div class="ml-6 cursor-pointer">
        <IconCommunity></IconCommunity>
      </div>
      <div class="ml-6 cursor-pointer">
        <IconStatus></IconStatus>
      </div>
      <div class="ml-6 cursor-pointer">
        <IconChat></IconChat>
      </div>
      <div class="ml-6 cursor-pointer">
        <IconMenu></IconMenu>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconCommunity from '@/components/icons/IconCommunity.vue';
import IconStatus from '@/components/icons/IconStatus.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconChat from '@/components/icons/IconChat.vue';
import type ContactModel from '@/models/ContactModel';


const loggedUser: ContactModel = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  message: '',
  time: '',
  selected: false,
  isGroup: false,
  lastSeen: '',
  lastSeenDateTime: ''
};
</script>
