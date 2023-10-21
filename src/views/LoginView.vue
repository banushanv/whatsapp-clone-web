<template>
  <div class="w-full">
    <div class="z-[-1] w-full h-[225px] fixed top-0" style="background-color: #00a884"></div>
    <div class="bg-gray-100 z-[-1] w-full h-[calc(100vh-225px)] fixed bottom-0"></div>

    <div class="max-w-xl mx-auto">
      <div class="mt-10 flex items-center w-full">
        <img class="h-8 w-8 ml-5" src="whatsapp.png" alt="" />
        <div class="font-semibold text-gray-100 ml-6">WHATSAPP WEB</div>
      </div>

      <div class="w-full bg-white z-10 p-24 m-0 mt-10">
        <div class="text-center text-4xl text-gray-700 font-light pb-10">WhatsApp Clone</div>
        <div class="w-full flex justify-center p-3 rounded-md">
            <GoogleLogin :callback="callback"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

const userStore: any = useUserStore();
const router = useRouter();

const callback = async (response: any) => {
    await userStore.getUserDetailsFromGoogle(response);
    setTimeout(() => { router.push('/') ;}, 100);
};

</script>
