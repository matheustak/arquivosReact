
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB9qOUbrvhMo-L5oC--GvrWMNJymrH0-Qc",
  authDomain: "miniblog-54184.firebaseapp.com",
  projectId: "miniblog-54184",
  storageBucket: "miniblog-54184.appspot.com",
  messagingSenderId: "536683582100",
  appId: "1:536683582100:web:b11b01ae8f71bba7785a81"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};