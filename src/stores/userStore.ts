import type UserModel from '@/models/UserModel';
import type UserWithChatModel from '@/models/UserWithChatModel';
import type UserDataForChatModel from '@/models/UserDataForChatModel';
import { defineStore } from 'pinia';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { db } from '@/config/FirebaseConfig';
import { setDoc, getDoc, doc, getDocs, collection, updateDoc, arrayUnion, onSnapshot,query} from 'firebase/firestore';


axios.defaults.baseURL = import.meta.env.VITE_APP_WHATS_APP_API_URL;

export const useUserStore = defineStore('user', {
  state: () => ({
    chats: [] as UserWithChatModel[],
    allUsers: [] as UserModel[],
    userDataForChat: [] as UserDataForChatModel[],
    showFindFriends: false,
    currentChat: null as any,
    removeUsersFromFindFriends: [] as string[],
    sub: '',
    email: '',
    picture: '',
    firstName: '',
    lastName: ''
  }),
  actions: {
    async fetchUserDetailsFromGoogle(data: any) {
      try {
          const res = await axios.post('api/google-login', {
              token: data.credential
          });

          const userExists = await this.checkIfUserExists(res.data.sub);
          if (!userExists) await this.saveUserDetails(res);

          await this.fetchAllUsers();
          
          this.sub = res.data.sub;
          this.email = res.data.email;
          this.picture = res.data.picture;
          this.firstName = res.data.given_name;
          this.lastName = res.data.family_name;
      } catch (error) {
          console.log(error);
      }
    },

    async fetchAllUsers () {
      const querySnapshot = await getDocs(collection(db, "users"));
      const results = [] as UserModel[];
      querySnapshot.forEach((doc: any) => { results.push(doc.data()); });

      if (results.length) {
        this.allUsers = [];
        results.forEach(res => { this.allUsers.push(res); });
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
    },

    async getChatById(id: string) {
      onSnapshot(doc(db, "chat", id), (doc) => {
        const res = [];
        res.push(doc.data());
        this.currentChat = res;
      });
    },

    fetchAllChatsByUser() {
      const q = query(collection(db, "chat"));

      onSnapshot(q, (querySnapshot) => {
        const chatArray = [] as UserWithChatModel[];
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            sub1: doc.data().sub1,
            sub2: doc.data().sub2,
            sub1HasViewed: doc.data().sub1HasViewed,
            sub2HasViewed: doc.data().sub2HasViewed,
            messages: doc.data().messages
          } as UserWithChatModel;

          if (doc.data().sub1 === this.sub) chatArray.push(data);
          if (doc.data().sub2 === this.sub) chatArray.push(data);

          this.removeUsersFromFindFriends = [];

          chatArray.forEach((chat: UserWithChatModel) => {

            if (this.sub === chat.sub1) {
              this.allUsers.forEach((user: UserModel) => {
                if (user.sub == chat.sub2) {
                  chat.user = user;
                  this.removeUsersFromFindFriends.push(user.sub);
                }
              });
            }

            if (this.sub === chat.sub2) {
              this.allUsers.forEach((user: UserModel) => {
                if (user.sub == chat.sub1) {
                  chat.user = user;
                  this.removeUsersFromFindFriends.push(user.sub);
                }
              });
            }
          });

          this.chats = [];
          chatArray.forEach((chat: UserWithChatModel) => {
            this.chats.push(chat);
          });

        });
      });
    },

    async sendMessage (data: any) {
      try {
        if (data.chatId) {
          await updateDoc(doc(db, `chat/${data.chatId}`), {
            sub1HasViewed: false,
            sub2HasViewed: false,
            messages: arrayUnion({
              sub: this.sub,
              message: data.message,
              createdAt: Date.now()
            })
          });
        } else {
          const id = uuid();
          await setDoc(doc(db, `chat/${id}`), {
            sub1: this.sub,
            sub2: data.sub2,
            sub1HasViewed: false,
            sub2HasViewed: false,

            messages: [{
              sub: this.sub,
              message: data.message,
              createdAt: Date.now()
            }]

          });

          this.userDataForChat[0].id = id;
          this.showFindFriends = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async hasReadMessage(data: any) {
      await updateDoc(
        doc(db, `chat/${data.id}`), { [data.key1]: data.val1, [data.key2]: data.val2} as any, 
        { merge:true });
    },

    logout() {
      this.sub = '';
      this.email = '';
      this.picture = '';
      this.firstName = '';
      this.lastName = '';
      this.allUsers = [];
      this.chats = [];
      this.userDataForChat = [];
      this.removeUsersFromFindFriends = [];
      this.showFindFriends = false;
      this.currentChat = null;
    }
  },
  persist: true
});