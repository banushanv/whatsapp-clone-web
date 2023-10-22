<template>
  <div id="Header" class="fixed w-[420px] z-10">
    <div class="bg-[#f0f2f5] w-full flex justify-between items-center px-3 py-2">
      <img class="rounded-full ml-1 w-9 h-9" :src="userStore.picture || ''" alt="" />
      <div class="flex items-center justify-center">
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
          <IconMenu @click="logout"></IconMenu>
        </div>
      </div>
    </div>

    <div class="bg-white w-full flex justify-between items-center px-2 border-b shadow-sm">
      <div class="px-2 m-2 bg-[#F0F0F0] flex items-center justify-center rounded-md">
        <IconSearch class="ml-2 pt-2" />
        <input
          @click="showFindFriends=!showFindFriends"
          class="appearance-none w-full bg-[#F0F0F0] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500"
          type="text"
          placeholder="Search or start a new chat"
        />
      </div>
      <IconFilter></IconFilter>
    </div>
  </div>
  <ConfirmationDialogComponent
    v-if="isLogout"
    headerText="Log out?"
    content="Are you sure want to log out?"
    buttonText="Log out"
    @on-cancel-handler="isLogout = false"
    @on-confirm-handler="logoutConfirm"
  ></ConfirmationDialogComponent>
</template>

<script setup lang="ts">
import IconCommunity from '@/components/icons/IconCommunity.vue';
import IconStatus from '@/components/icons/IconStatus.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconFilter from '@/components/icons/IconFilter.vue';
import ConfirmationDialogComponent from '@/components/common/ConfirmationDialogComponent.vue';
import IconChat from '@/components/icons/IconChat.vue';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';
import router from '@/router';

const isLogout = ref(false);
const userStore = useUserStore();
const { showFindFriends } = storeToRefs(userStore);

onMounted(async () => {
  try {
    userStore.fetchAllUsers();
    await userStore.fetchAllChatsByUser();
  } catch (error) {
    console.log(error);
  }
});

const logout = () => {
  isLogout.value = true;
};

const logoutConfirm = () => {
  userStore.logout();
  router.push('/login');
};
</script>
