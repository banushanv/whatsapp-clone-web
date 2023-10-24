<template>
  <div class="w-full min-w-min">
    <div class="z-[-1] w-full h-[225px] fixed top-0" style="background-color: #00a884"></div>
    <div class="bg-gray-100 z-[-1] w-full h-[calc(100vh-225px)] fixed bottom-0"></div>

    <div class="max-w-xl mx-auto">
      <div class="mt-10 flex items-center w-full">
        <img class="h-8 w-8 ml-5" src="whatsapp.png" alt="" />
        <div class="font-semibold text-gray-100 ml-2">WHATSAPP WEB</div>
      </div>

      <div class="w-full bg-white z-10 p-4 sm:p-16 m-0 mt-20">
        <div class="text-center text-2xl sm:text-4xl text-gray-900 font-thin pb-6">
          WhatsApp Clone
        </div>
        <div class="w-full flex justify-center h-12 pt-4 rounded-md">
          <button
            class="bg-gray-200 flex items-center text-md gap-2 text-center cursor-pointer font-medium rounded-md"
            @click="googleSignin"
          >
            <!-- use an SVG element for the Google icon -->
            <IconGoogle></IconGoogle><p> Signed in with Google </p>
            <!-- use a span element for the text -->
         
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';;
import IconGoogle from '@/components/icons/IconGoogle.vue';

const userStore = useUserStore();
const googleSignin = async () => {
  try {
    await userStore.fetchUserDetailsFromGoogle();

  } catch (err) {
    console.error(err);
  }
};
</script>
