<template>
  <div class="w-full h-32" style="background-color: #00a884"></div>
  <div class="container mx-auto -mt-32">
    <div class="py-4 h-screen">
      <div class="flex border border-grey rounded shadow-lg h-full">
        <!-- Left -->
        <LeftLayoutComponent @person-select-handler="onChangeContactItems"></LeftLayoutComponent>
        <!-- Right -->
        <RightLayoutComponent :selectedContact="selectedContact"></RightLayoutComponent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftLayoutComponent from '@/components/layouts/LeftLayoutComponent.vue';
import RightLayoutComponent from '@/components/layouts/RightLayoutComponent.vue';
import type ContactModel from '@/models/ContactModel';
import { ref } from 'vue';

const selectedContact = ref({} as ContactModel);

const onChangeContactItems = (contact: ContactModel) => {
  selectedContact.value = contact;
};
</script>
