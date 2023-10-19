<template>
  <div class="bg-gray-100 px-4 py-4 flex items-center">
    <IconSmiley></IconSmiley>
    <div class="flex-1 mx-4">
      <input
        class="w-full border-gray-200 rounded-lg px-2 py-2"
        type="text"
        :placeholder="translate('whatsapp_clone.type_message')"
      />
    </div>
    <div>
      <IconRecord></IconRecord>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconRecord from '@/components/icons/IconRecord.vue';
import IconSmiley from '@/components/icons/IconSmiley.vue';
import { translate } from '@/locales';
</script>
