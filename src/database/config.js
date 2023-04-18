import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD9E3Kv7nask7DCTVKdJMZYmSfnU9qvG7Q",
  authDomain: "react-final-project-71c35.firebaseapp.com",
  projectId: "react-final-project-71c35",
  storageBucket: "react-final-project-71c35.appspot.com",
  messagingSenderId: "327720214644",
  appId: "1:327720214644:web:fbc84ed89e909abcf6f121"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const auth = getAuth()
const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log("userCredential", userCredential)
  } catch (error) {
    console.log("error", error)
  }
}

export { createUser, db }
