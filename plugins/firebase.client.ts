import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"
export default defineNuxtPlugin(nuxtApp => {
    
    const firebaseConfig = {
        apiKey: "AIzaSyBCCCRQo3KGsHJPmZ-pieQ1NylZX0Tl4GI",
        authDomain: "budget-tracker-4b71b.firebaseapp.com",
        projectId: "budget-tracker-4b71b",
        storageBucket: "budget-tracker-4b71b.appspot.com",
        messagingSenderId: "313875029315",
        appId: "1:313875029315:web:30efc928561078f91d63f6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const firestoreDb = getFirestore(app)
    
    nuxtApp.vueApp.provide('firebaseAuth', auth)
    nuxtApp.provide('firebaseAuth', auth)
    
    nuxtApp.vueApp.provide('firestoreDb', firestoreDb)
    nuxtApp.provide('firestoreDb', firestoreDb)
})