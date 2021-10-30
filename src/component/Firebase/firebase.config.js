import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2BO2f9DVPdRedLmLkpbB5DK7SjJ7AM0w",
  authDomain: "todo-app-91045.firebaseapp.com",
  projectId: "todo-app-91045",
  storageBucket: "todo-app-91045.appspot.com",
  messagingSenderId: "523641742191",
  appId: "1:523641742191:web:448352e082b7feeedabe9a",
  measurementId: "G-E823T8DFMN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
