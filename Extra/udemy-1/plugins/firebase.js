import firebase from 'firebase/app'
require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")

const firebaseConfig = {
    apiKey: "AIzaSyDskubddQJgqz5HAnC_qCY1scJC3-NX2GI",
    authDomain: "nuxt-1-b24ef.firebaseapp.com",
    projectId: "nuxt-1-b24ef",
    storageBucket: "nuxt-1-b24ef.appspot.com",
    messagingSenderId: "45591613918",
    appId: "1:45591613918:web:721db6e6a89c2a8a114d4f"
  }

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }