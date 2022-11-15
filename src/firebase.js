import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFYDLm9x8C8eH2p7jd8lYalih0rbyTpco",
  authDomain: "clone-27238.firebaseapp.com",
  projectId: "clone-27238",
  storageBucket: "clone-27238.appspot.com",
  messagingSenderId: "705939201235",
  appId: "1:705939201235:web:1e5a57540f4b78cbe9c826",
  measurementId: "G-5K4YPWG21E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };