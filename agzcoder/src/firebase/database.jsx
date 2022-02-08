import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDcJj3F746pl6zb4lR52sWrJ1NAxZgjW04",
    authDomain: "inventoryboheme.firebaseapp.com",
    projectId: "inventoryboheme",
    storageBucket: "inventoryboheme.appspot.com",
    messagingSenderId: "952023803552",
    appId: "1:952023803552:web:c882b600037f9afc2e8bc5"
  };


const app= firebase.initializeApp(firebaseConfig);
export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore;
