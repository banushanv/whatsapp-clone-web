<template>
    <div class="bg-gray-100 flex-1   overflow-auto  ">
        <div v-for="contact in contacts" :key="contact.name">
            <div class="px-3 flex items-center hover:bg-grey-lighter hover:bg-gray-100  cursor-pointer" 
            :class="!contact.selected ? 'bg-white ' : ''" @click="onPersonChangeHandler(contact)">
                <div>
                <img class="h-6 w-6 rounded-full lg:h-12 lg:w-12" :src="contact.imageUrl" />
                </div>
                <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
                    <div class="flex items-bottom justify-between">
                        <p class="text-grey-darkest flex-auto truncate">
                            {{ contact.name }}
                        </p>
                        <p class="text-xs text-grey-darkest">
                            {{ contact.time }}
                        </p>
                    </div>
                    <p class="text-grey-dark mt-1 text-sm">
                        {{ contact.message }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type ContactModel from '@/models/ContactModel';
import type { PropType } from 'vue';

defineProps({
  contacts: {
    required: true,
    type: Array as PropType<ContactModel[]>
  }
});

const emit = defineEmits(['person-select-change']);

const onPersonChangeHandler=(selectedPerson: ContactModel)=>{
    emit('person-select-change',selectedPerson);
};

</script>

