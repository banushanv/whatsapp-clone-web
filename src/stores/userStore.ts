// import the types from pinia
import { defineStore} from 'pinia';
import axios from 'axios';
import { db } from '@/config/firebase-init';
import { setDoc, getDoc, doc} from 'firebase/firestore';

axios.defaults.baseURL = import.meta.env.VITE_APP_WHATS_APP_API_URL;

export const useUserStore = defineStore('counter', {
  state: () => ({    
  sub: '',
  email: '',
  picture: '',
  firstName: '',
  lastName: '' }),
  actions: {
    async getUserDetailsFromGoogle(data: any) {
      try {
          const res = await axios.post('api/google-login', {
              token: data.credential
          });

          const userExists = await this.checkIfUserExists(res.data.sub);
          if (!userExists) await this.saveUserDetails(res);

        //  await this.getAllUsers();
          
          this.sub = res.data.sub;
          this.email = res.data.email;
          this.picture = res.data.picture;
          this.firstName = res.data.given_name;
          this.lastName = res.data.family_name;
      } catch (error) {
          console.log(error);
      }
    },
    async checkIfUserExists(id: string) {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);
      return docSnap.exists();
    },
    async saveUserDetails (res: any) {
      try {
        await setDoc(doc(db, "users", res.data.sub), {
          sub: res.data.sub,
          email: res.data.email,
          picture: res.data.picture,
          firstName: res.data.given_name,
          lastName: res.data.family_name
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
});

