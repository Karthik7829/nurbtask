
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import   'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDtdI5BzoRL8R3257iTCh5yZSkZuTjd58k",
  authDomain: "react-firebase-auth-c8341.firebaseapp.com",
  projectId: "react-firebase-auth-c8341",
  storageBucket: "react-firebase-auth-c8341.appspot.com",
  messagingSenderId: "286201226562",
  appId: "1:286201226562:web:c60c8f7c739793161154db"
};


const app = firebase.initializeApp(firebaseConfig);
export default app