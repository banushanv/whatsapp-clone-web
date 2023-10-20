import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0yJhBwqdpMV8oo8181lykjyx8gDjyBL0",
  authDomain: "whatsapp-clone-ec3b7.firebaseapp.com",
  projectId: "whatsapp-clone-ec3b7",
  storageBucket: "whatsapp-clone-ec3b7.appspot.com",
  messagingSenderId: "508144825865",
  appId: "1:508144825865:web:3092502ccf6764e7806ad8"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };
