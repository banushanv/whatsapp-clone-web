<template>
 <div class="flex">
        <div id="Header" class="fixed w-[420px] z-10">
          <div class="bg-[#f0f2f5] w-full flex justify-between items-center px-3 py-2">
           
            <img class="rounded-full ml-1 w-10" :src="userStore.picture || ''" alt="" />
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

            <div id="Search" class="bg-white w-full  flex justify-between items-center px-2 border-b shadow-sm">
                <div class="px-2 m-2 bg-[#F0F0F0] flex items-center justify-center rounded-md">
                    <IconSearch  class="ml-2 pt-2" />
                    <input 
                    @click="showFindFriends = !showFindFriends"
                    class="appearance-none w-full bg-[#F0F0F0] py-2 px-16  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500"
                    autocomplete="off"
                    type="text"
                    placeholder="Search or start a new chat"
                    >
                  
                   
                </div>
                <IconFilter ></IconFilter>
            </div>
              
            </div>

        <div v-if="showFindFriends">
            <FindFriendsComponent class="pt-28" />
        </div>
        <div v-else>
            <ContactsComponent class="mt-[100px]" />
        </div>

        

        <div v-if="userDataForChat.length">
            <MessagesComponent />
        </div>
        <div v-else>
            <div class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-center">
            <div class="grid h-screen place-items-center">
                <div>
                    <div class="w-full flex items-center justify-center">
                        <img width="375" src="w-web-not-loaded-chat.png" alt="">
                    </div>
                    <div class="text-[32px] text-gray-500 font-light mt-10">Download WhatsApp for Windows</div>
                    <div class="text-[14px] text-gray-600 mt-2"> 
                        <div>Make calls,share your screen and get a faster experience when you download the Windows app.</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactsComponent from '@/components/sections/ContactsComponent.vue';
import FindFriendsComponent from '@/components/sections/FindFriendsComponent.vue';
import MessagesComponent from '@/components/sections/MessagesComponent.vue';
import IconCommunity from '@/components/icons/IconCommunity.vue';
import IconStatus from '@/components/icons/IconStatus.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconFilter from '@/components/icons/IconFilter.vue';
import IconChat from '@/components/icons/IconChat.vue';
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

import { storeToRefs } from 'pinia';
import router from '@/router';

const userStore: any = useUserStore();
const { showFindFriends, userDataForChat } = storeToRefs(userStore);

onMounted(async () => {
    try {
        userStore.getAllUsers();
        await userStore.getAllChatsByUser();
    } catch (error) {
        console.log(error);
    }
});


const logout = () => {
    let res = confirm('Are you sute you want to logout?');
    if (res) { userStore.logout(); router.push('/login'); };
};


</script>
