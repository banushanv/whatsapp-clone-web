import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",         //add your apiKey
  authDomain: "",    //add your authDomain
  projectId: "",       //add your projectId
  storageBucket: "",      //add your storageBucket
  messagingSenderId: "", //add your messagingSenderId
  appId: ""        //add your appId
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };
