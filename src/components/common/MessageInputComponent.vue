<template>
  <div class="bg-gray-100 px-4 py-4 flex items-center">
    <IconPlus class="cursor-pointer"></IconPlus>
    <div class="flex-1 mx-4">
      <input
        class="w-full border-gray-200 rounded-lg px-2 py-2"
        type="text"
        v-model="msgTxt"
        :placeholder="translate('whatsapp_clone.type_message')"
      />
    </div>
    <div v-if="msgTxt" class="cursor-pointer">
      <IconSend></IconSend>
    </div>
    <div v-else class="cursor-pointer">
      <IconRecord></IconRecord>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconRecord from '@/components/icons/IconRecord.vue';
//import IconSmiley from '@/components/icons/IconSmiley.vue';
import IconSend from '@/components/icons/IconSend.vue';
import IconPlus from '@/components/icons/IconPlus.vue';

import { translate } from '@/locales';
import { ref } from 'vue';

const msgTxt=ref('');
</script>
