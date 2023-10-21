<template>
  <div class="flex">
    <LeftContactsTopViewComponent></LeftContactsTopViewComponent>

    <div v-if="showFindFriends">
      <ContactsSearchComponent  />
    </div>

    <div v-else>
      <LeftContactsViewComponent  />
    </div>

    <div v-if="userDataForChat.length">
        <RightChatViewComponent />
    </div>

    <div v-else>
      <UserDataLoadedComponent></UserDataLoadedComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftContactsViewComponent from '@/components/LeftContactsViewComponent.vue';
import LeftContactsTopViewComponent from '@/components/layouts/LeftContactsTopViewComponent.vue';
import ContactsSearchComponent from '@/components/ContactsSearchComponent.vue';
import UserDataLoadedComponent from '@/components/sections/UserDataLoadedComponent.vue';
import RightChatViewComponent from '@/components/RightChatViewComponent.vue';
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';

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
</script>
