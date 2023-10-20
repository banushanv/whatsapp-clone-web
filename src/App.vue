<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Constants from "@/utils/constants";
import * as dayjs from 'dayjs';
import 'dayjs/locale/nl';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import  {useUserStore}  from '@/stores/userStore';

const router = useRouter();
const userStore = useUserStore();

const serverLocationLanguage=() =>{
  const countryCode = `${import.meta.env.VITE_APP_WHATS_APP_COUNTRY_CODE}`;
  let lang = "nl";
  if (countryCode === Constants.ApplicationConstants.CountryCodes.Netherlands) {
       lang ='nl';
  } 
  else{
    lang ='en';
  }
   dayjs.locale(lang);
};

serverLocationLanguage();

onMounted(() => {
  if (!userStore.sub) router.push('/login');
});

</script>