 import { initializeApp  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut,sendEmailVerification,GoogleAuthProvider,signInWithPopup,landingToLogin} from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js';
 import { getStorage,storage,database } from "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyAqLEThmYWqGWnag1ZgoSq5wYOB3TzLl8E",
    projectId: "post-app-a74f3",
    storageBucket: "post-app-a74f3.firebasestorage.app",
    messagingSenderId: "868801314182",
    appId: "1:868801314182:web:0724a8381d8ed3f5b58007"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(app);
  const database = firebase.database();
  export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,sendEmailVerification,provider,GoogleAuthProvider,signInWithPopup, landingToLogin, storage,database}


