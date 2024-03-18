
import firebase from 'firebase/app'
import 'firebase/database' // or 'firebase/firestore' if you're using Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCd_-9i5RiJn8bstYDqm_sL1OZMmpivZKI",

  authDomain: "portfolio-1612.firebaseapp.com",

  projectId: "portfolio-1612",

  storageBucket: "portfolio-1612.appspot.com",

  messagingSenderId: "592630520597",

  appId: "1:592630520597:web:4e9404bd45874a03b4e71c"
// add your Firebase project configuration here
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database() // or firebase.firestore() if you're using Firestore

export default database