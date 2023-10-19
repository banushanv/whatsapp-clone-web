<template>
  <!-- Right -->
  <div class="w-5/6 border flex flex-col">
    <!-- Header -->
    <RightLayoutHeaderComponent :selectedContact="selectedContact"></RightLayoutHeaderComponent>

    <!-- Messages -->
    <MessagesComponent
      :groupMessages="groupMessages"
      :selectedContact="selectedContact"
    ></MessagesComponent>

    <!-- Input -->
    <MessageInputComponent></MessageInputComponent>
  </div>
</template>

<script setup lang="ts">
import RightLayoutHeaderComponent from '@/components/layouts/sections/RightLayoutHeaderComponent.vue';
import MessagesComponent from '@/components/sections/MessagesComponent.vue';
import MessageInputComponent from '@/components/common/MessageInputComponent.vue';
import { ref, type PropType } from 'vue';
import type ContactModel from '@/models/ContactModel';
import type MessageModel from '@/models/MessageModel';

defineProps({
  selectedContact: {
    required: true,
    type: Object as PropType<ContactModel>
  }
});

const groupMessages = ref([
  {
    messageId: 0,
    text: 'Hello guys! I am plannig a trip.',
    time: '10.45 pm',
    personName: 'Siva'
  },
  {
    messageId: 1,
    text: 'Hi Siva! I have one question for the trip',
    time: '10.45 pm',
    personName: 'Kumar'
  },
  {
    messageId: 2,
    text: 'Tell me?',
    time: '10.45 pm',
    personName: 'Siva'
  },
  {
    messageId: 3,
    text: 'Hi guys',
    time: '11.04 pm',
    personName: ''
  },
  {
    messageId: 4,
    text: 'Guess the place',
    time: '11.04 pm',
    personName: ''
  },
  {
    messageId: 5,
    text: 'Nuwaraeliya?',
    time: '12:45 pm',
    personName: 'Thiru'
  }
] as MessageModel[]);
</script>
