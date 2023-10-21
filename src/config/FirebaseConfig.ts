import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "whatsapp-clone-ec3b7.firebaseapp.com",
  projectId: "whatsapp-clone-ec3b7",
  storageBucket: "whatsapp-clone-ec3b7.appspot.com",
  messagingSenderId: "508144825865",
  appId: ""
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };
