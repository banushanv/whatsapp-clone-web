<template>
  <div class="px-1 m-2 bg-[#F0F0F0] flex items-center justify-center rounded-md">
    <IconSearch class="fixed left-4 h-6 w-6 text-gray-700" />
    <input
      type="text"
      @change="onSearchContactHandler"
      @click="showFindFriends = !showFindFriends"
      class="w-full px-8 bg-gray-100 py-2 rounded-lg text-sm"
      :placeholder="translate('whatsapp_clone.search_start')"
    />
  
  </div>
</template>

<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
import { translate } from '@/locales';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

const emit = defineEmits(['on-filter-contacts']);
const userStore = useUserStore();
const { showFindFriends, userDataForChat } = storeToRefs(userStore);

onMounted(() => {
        document.addEventListener('keypress', onKeyEnterHandler);
  });

onUnmounted(() => {
        document.removeEventListener('keypress', onKeyEnterHandler);
  });


 const onSearchContactHandler = (event: Event) => {
      emit('on-filter-contacts',(event.target as HTMLInputElement).value);
 };

 const onKeyEnterHandler=(e: any)=>{    //keyboard events
      if (e.key === 'Enter') {
          emit('on-filter-contacts','');
    }
     
    };
</script>
