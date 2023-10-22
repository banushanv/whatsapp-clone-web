<template>
  <div id="FindFriends" class="pt-[100px] overflow-auto fixed h-[100vh] w-full">
    <div v-for="user in usersComputed" :key="user.sub">
      <div
        v-if="hideMe(user)"
        @click="createNewChat(user)"
        class="flex w-full p-4 items-center cursor-pointer">

      <img class="rounded-full mr-4 w-12" :src="user.picture || ''" />
        <div class="w-full">
          <div class="flex justify-between items-center">
            <div class="text-[15px] text-gray-600">{{ user.firstName }} {{ user.lastName }}</div>
          </div>
          <div class="flex items-center">
            <div class="text-[15px] text-gray-500">{{translate('whatsapp_clone.using_whatsApp')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { translate } from '@/locales';
import type UserModel from '@/models/UserModel';

const userStore = useUserStore();
const { sub, userDataForChat, allUsers, removeUsersFromFindFriends } = storeToRefs(userStore);
let users = ref([] as UserModel[]);

const hideMe = (user: UserModel) => {
  if (user.sub === sub.value) {
    return false;
  }
  return true;
};

const createNewChat = (user: UserModel) => {
  userDataForChat.value = [];
  userDataForChat.value.push({
    id: '',
    sub1: sub.value,
    sub2: user.sub,
    firstName: user.firstName,
    picture: user.picture
  });
};

const usersComputed = computed(() => {
  allUsers.value.forEach((user: UserModel) => users.value.push(user));
  removeUsersFromFindFriends.value.forEach((remove: any) => {
    let index = users.value.findIndex((user: UserModel) => user.sub === remove);
    users.value.splice(index, 1);
  });
  return users.value;
});
</script>

<style lang="scss" scoped></style>
