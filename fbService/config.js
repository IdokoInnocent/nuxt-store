import firebase from "firebase/app"

// firebase database
import "firebase/firestore";

// firebase authentiication
import "firebase/auth";

// firebase storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCJb6FiqQ1jCg4espZFUgHW1Zp_A_aWQ0",
  authDomain: "dodo-store-36204.firebaseapp.com",
  projectId: "dodo-store-36204",
  storageBucket: "dodo-store-36204.appspot.com",
  messagingSenderId: "973767310408",
  appId: "1:973767310408:web:aa9bf2131d418dd18fec7d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth,  projectStorage, timestamp}