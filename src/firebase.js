
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFD-2HI4ZWM7YytUWB67DJS2W4z8S1BX8",
  authDomain: "todos-c4ebb.firebaseapp.com",
  projectId: "todos-c4ebb",
  storageBucket: "todos-c4ebb.firebasestorage.app",
  messagingSenderId: "765110881455",
  appId: "1:765110881455:web:6107caa499d41a24af585a",
  measurementId: "G-79NMFXRMJQ",
  databaseURL: 'https://todos-c4ebb-default-rtdb.europe-west1.firebasedatabase.app/'
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp