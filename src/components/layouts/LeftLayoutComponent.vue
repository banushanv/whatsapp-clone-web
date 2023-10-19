<template>
  <div class="w-1/3 border flex flex-col">
    <!-- Header -->
    <LeftLayoutHeaderComponent ></LeftLayoutHeaderComponent>

    <!-- Search -->
    <SearchComponent :contacts="filteredArray" @on-filter-contacts="onFilteredContacts"></SearchComponent>

    <!-- Contacts -->
    <ContactsComponent @person-select-change="onSelectPersonHandler" :contacts="filteredArray"></ContactsComponent>
  </div>
</template>

<script setup lang="ts">
import SearchComponent from '@/components/common/SearchComponent.vue';
import LeftLayoutHeaderComponent from '@/components/layouts/sections/LeftLayoutHeaderComponent.vue';
import ContactsComponent from '@/components/sections/ContactsComponent.vue';
import type ContactModel from '@/models/ContactModel';
import { onMounted, ref } from 'vue';
import { useSearch } from '@/composables/getSearchComposable';


const emit = defineEmits(['person-select-handler']);

onMounted(() => {
        const selectedItem=filteredArray.value.find((a: ContactModel)=>a.selected);
        if(selectedItem){
          onSelectPersonHandler(selectedItem);
        }
        
  });

const onSelectPersonHandler = (contact: ContactModel) => { 
  filteredArray.value.map((a: ContactModel)=>a.selected=false);
  contact.selected=true;
  emit('person-select-handler', contact);
};


const contacts = ref([
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        message: 'Call me?',
        time: '13.30 pm',
        selected: false,
        isGroup: false,
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z'
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        message: 'Hi',
        selected: false,
        isGroup: false,
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        time: '21.30 pm',
        lastSeenDateTime: '2023-01-23T13:23Z'
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        message: 'Welcome!',
        time: '12.45 pm',
        selected: false,
        isGroup: false,
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null
    },
    {
        name: 'Trip Group',
        email: 'dries.vincent@example.com',
        message: 'Nuwaraeliya?',
        time: '12.45 pm',
        isGroup: true,
        selected: true,
        imageUrl:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
        lastSeen: null
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        message: 'Thank you',
        time: '14.30 pm',
        isGroup: false,
        selected: false,
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z'
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        message: 'See you bye',
        time: '02.30 pm',
        selected: false,
        isGroup: false,
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z'
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        message: 'Are you free?',
        time: '19.30 pm',
        isGroup: false,
        selected: false,
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null
    }
] as ContactModel[]);

const { filteredArray, searchQuery }=useSearch(contacts.value,'');  

const onFilteredContacts=(searchTxt: string)=>{
        searchQuery.value=searchTxt;  
};
</script>
