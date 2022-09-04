import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlmPYDmJQeqi9tkParg54OgEWDVQ7cGT8",
  authDomain: "facebook-clone-f8573.firebaseapp.com",
  projectId: "facebook-clone-f8573",
  storageBucket: "facebook-clone-f8573.appspot.com",
  messagingSenderId: "500273607292",
  appId: "1:500273607292:web:ead2eb48a8483418694ff9",
  measurementId: "G-56Q9D1BB79"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
