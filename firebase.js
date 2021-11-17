// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqVaLj71sGDfvDPuCTTDOnIktu_hubm60",
  authDomain: "instabilt-4c236.firebaseapp.com",
  projectId: "instabilt-4c236",
  storageBucket: "instabilt-4c236.appspot.com",
  messagingSenderId: "418956396160",
  appId: "1:418956396160:web:0156415b6a25178c4d4865",
  authDomain: "http://localhost:3000/"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };