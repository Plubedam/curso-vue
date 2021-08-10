import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCecwLJ5JTgLippqjXlmuZz_D4oqTNUmr8",
    authDomain: "firestore-auth-1-291ad.firebaseapp.com",
    projectId: "firestore-auth-1-291ad",
    storageBucket: "firestore-auth-1-291ad.appspot.com",
    messagingSenderId: "455817356461",
    appId: "1:455817356461:web:8a8b483c300e4dd1f05224"
};
  // Initialize Firebase
  if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp()

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsuscribe = firebase.auth().onAuthStateChanged(user => {
      unsuscribe()
      resolve(user)
    }, reject)
  })
}

export {db, auth, timeStamp, firebase}