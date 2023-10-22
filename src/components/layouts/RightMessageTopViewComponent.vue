<template>
  <div class="border-l border-green-500 w-full">
    <div
      class="bg-[#f0f2f5] fixed  z-10 min-w-[calc(100vw-420px)] sm:pl-[10px] w-full pl-auto flex justify-between items-center px-1 py-2 gap-2"
    >
      <div class="flex items-center">
        <img
          v-if="userDataForChat[0] && userDataForChat[0].picture"
          class="rounded-full mx-1 w-10"
          :src="userDataForChat[0].picture"
        />

        <div v-if="userDataForChat[0] && userDataForChat[0].firstName" class="text-gray-700 ml-1">
          {{ userDataForChat[0].firstName }}
        </div>
      </div>

      <div class="flex">
        <div class="ml-6 cursor-pointer"></div>

        <div class="ml-6 cursor-pointer">
          <IconCamera></IconCamera>
        </div>

        <div class="ml-6 cursor-pointer">
          <IconSearch></IconSearch>
        </div>

        <div class="ml-6 cursor-pointer">
          <IconMenu></IconMenu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconCamera from '@/components/icons/IconCamera.vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();
const { userDataForChat } = storeToRefs(userStore);
</script>
<style></style>
