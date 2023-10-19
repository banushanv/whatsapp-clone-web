<template>
  <div class="py-2 px-2 bg-white relative flex items-center">
    <input
      type="text"
      @change="onSearchContactHandler"
      class="w-full px-8 bg-gray-100 py-2 rounded-lg text-sm"
      :placeholder="translate('whatsapp_clone.search_start')"
    />
    <IconSearch class="absolute left-4 h-6 w-6 text-gray-700" />
  </div>
</template>

<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
import { translate } from '@/locales';
import { onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['on-filter-contacts']);

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
