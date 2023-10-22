import type UserModel from '@/models/UserModel';
import type UserWithChatModel from '@/models/UserWithChatModel';
import type UserDataForChatModel from '@/models/UserDataForChatModel';
import { defineStore } from 'pinia';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { db } from '@/config/FirebaseConfig';
import {setDoc,getDoc,doc,getDocs,collection,updateDoc,arrayUnion,onSnapshot,query} from 'firebase/firestore';
import { ref } from 'vue';

axios.defaults.baseURL = import.meta.env.VITE_APP_WHATS_APP_API_URL;

export const useUserStore = defineStore('user', () => {
  // use ref to define reactive state properties
  const chats = ref([] as UserWithChatModel[]);
  const allUsers = ref([] as UserModel[]);
  const userDataForChat = ref([] as UserDataForChatModel[]);
  const showFindFriends = ref(false);
  const currentChat = ref(null as any);
  const removeUsersFromFindFriends = ref([] as string[]);
  const sub = ref('');
  const email = ref('');
  const picture = ref('');
  const firstName = ref('');
  const lastName = ref('');

  // use function to define actions
  async function fetchUserDetailsFromGoogle(data: any) {
    try {
      const res = await axios.post('api/google-login', {
        token: data.credential
      });

      const userExists = await checkIfUserExists(res.data.sub);
      if (!userExists) await saveUserDetails(res);

      await fetchAllUsers();

      sub.value = res.data.sub;
      email.value = res.data.email;
      picture.value = res.data.picture;
      firstName.value = res.data.given_name;
      lastName.value = res.data.family_name;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAllUsers() {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const results = [] as UserModel[];
    querySnapshot.forEach((doc: any) => {
      results.push(doc.data());
    });

    if (results.length) {
      allUsers.value = [];
      results.forEach((res) => {
        allUsers.value.push(res);
      });
    }
  }

  async function checkIfUserExists(id: string) {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  }

  async function saveUserDetails(res: any) {
    try {
      await setDoc(doc(db, 'users', res.data.sub), {
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

  async function getChatById(id: string) {
    onSnapshot(doc(db, 'chat', id), (doc) => {
      const res = [];
      res.push(doc.data());
      currentChat.value = res;
    });
  }

  function fetchAllChatsByUser() {
    const q = query(collection(db, 'chat'));

    onSnapshot(q, (querySnapshot) => {
      const chatArray = [] as UserWithChatModel[];
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          sub1: doc.data().sub1,
          sub2: doc.data().sub2,
          sub1HasViewed: doc.data().sub1HasViewed,
          sub2HasViewed: doc.data().sub2HasViewed,
          messages: doc.data().messages
        } as UserWithChatModel;

        if (doc.data().sub1 === sub.value) chatArray.push(data);
        if (doc.data().sub2 === sub.value) chatArray.push(data);

        removeUsersFromFindFriends.value = [];

        chatArray.forEach((chat: UserWithChatModel) => {
          if (sub.value === chat.sub1) {
            allUsers.value.forEach((user: UserModel) => {
              if (user.sub == chat.sub2) {
                chat.user = user;
                removeUsersFromFindFriends.value.push(user.sub);
              }
            });
          }

          if (sub.value === chat.sub2) {
            allUsers.value.forEach((user: UserModel) => {
              if (user.sub == chat.sub1) {
                chat.user = user;
                removeUsersFromFindFriends.value.push(user.sub);
              }
            });
          }
        });

        chats.value = [];
        chatArray.forEach((chat: UserWithChatModel) => {
          chats.value.push(chat);
        });
      });
    });
  }

  async function sendMessage(data: any) {
    try {
      if (data.chatId) {
        await updateDoc(doc(db, `chat/${data.chatId}`), {
          sub1HasViewed: false,
          sub2HasViewed: false,
          messages: arrayUnion({
            sub: sub.value,
            message: data.message,
            createdAt: Date.now()
          })
        });
      } else {
        const id = uuid();
        await setDoc(doc(db, `chat/${id}`), {
          sub1: sub.value,
          sub2: data.sub2,
          sub1HasViewed: false,
          sub2HasViewed: false,

          messages: [
            {
              sub: sub.value,
              message: data.message,
              createdAt: Date.now()
            }
          ]
        });

        userDataForChat.value[0].id = id;
        showFindFriends.value = false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function hasSeenMessage(data: any) {
    await updateDoc(
      doc(db, `chat/${data.id}`),
      { [data.key1]: data.val1, [data.key2]: data.val2 } as any,
      { merge: true }
    );
  }

  function logout() {
    sub.value = '';
    email.value = '';
    picture.value = '';
    firstName.value = '';
    lastName.value = '';
    allUsers.value = [];
    chats.value = [];
    userDataForChat.value = [];
    removeUsersFromFindFriends.value = [];
    showFindFriends.value = false;
    currentChat.value = null;
  }

  // return all the state properties and methods
  return {
    chats,
    allUsers,
    userDataForChat,
    showFindFriends,
    currentChat,
    removeUsersFromFindFriends,
    sub,
    email,
    picture,
    firstName,
    lastName,

    fetchUserDetailsFromGoogle,
    fetchAllUsers,
    checkIfUserExists,
    saveUserDetails,
    getChatById,
    fetchAllChatsByUser,
    sendMessage,
    hasSeenMessage,
    logout
   };
   }, {
      persist: true // enable persistence
  });
  

