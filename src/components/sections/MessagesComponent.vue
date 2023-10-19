<template>
    <div class="flex-1 overflow-auto bg-stone-200">
        <div class="py-2 px-3" >

            <div class="flex justify-center mb-2" >
                <div class="rounded py-2 px-4" style="background-color: #DDECF2">
                    <p class="text-sm uppercase">
                        {{dayjs(selectedContact.lastSeenDateTime).format('DD.MM.YYYY')}}
                    </p>
                </div>
            </div>

            <div class="flex justify-center mb-4" v-if="selectedContact.isGroup">
                <div class="rounded py-2 px-4" style="background-color: #FCF4CB">
                    <p class="text-xs">
                       {{translate('whatsapp_clone.message_encryption')}}
                    </p>
                </div>
            </div>
        <div v-if="selectedContact.isGroup">
            <div class="flex mb-2"  v-for="message in groupMessageDetails" :key="message.messageId" :class="message.personName ? 'flex justify-end' : ''">
                <div class="rounded py-2 px-3 bg-white" :style="{backgroundColor:message.personName ? '' : '#E2F7CB'}" >
                    <p class="text-sm text-teal">
                        {{message.personName}}
                    </p>
                    <p class="text-sm mt-1 ">
                            {{message.text}} </p>
                    <p class="text-right text-xs text-grey-dark mt-1 flex justify-between gap-x-8">
                        {{message.time}}<IconDelivered  v-if="!message.personName"/>
                    </p>
                </div>
            </div> 
        </div>  
        <div v-else>
            <div class="flex mb-2">
                <div class="rounded py-2 px-3 bg-white" > 
                    <p class="text-sm mt-1">
                        {{selectedContact.message}}
                    </p>
                    <p class="text-right text-xs text-grey-dark mt-1">
                        {{selectedContact.time}}
                    </p>
                </div>
            </div> 

        </div>    
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch, type PropType } from 'vue';
import IconDelivered from '@/components/icons/IconDelivered.vue';
import type ContactModel from '@/models/ContactModel';
import type MessageModel from '@/models/MessageModel';
import { translate } from "@/locales";
import dayjs from 'dayjs';

  const props = defineProps({
    groupMessages: {
      required: true,
      type: Array as PropType<MessageModel[]>
    },
    selectedContact:{
        required: true,
        type: Object as PropType<ContactModel>
    }
  });

  const groupMessageDetails=ref(props.groupMessages as MessageModel[]);

  watch(
         () => props.groupMessages,
         () => {
           if (props.groupMessages) {
               groupMessageDetails.value=props.groupMessages; 
           }
         }
      );
     

</script>
