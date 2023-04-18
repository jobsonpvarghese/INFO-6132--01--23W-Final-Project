import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD9E3Kv7nask7DCTVKdJMZYmSfnU9qvG7Q",
  authDomain: "react-final-project-71c35.firebaseapp.com",
  projectId: "react-final-project-71c35",
  storageBucket: "react-final-project-71c35.appspot.com",
  messagingSenderId: "327720214644",
  appId: "1:327720214644:web:fbc84ed89e909abcf6f121"
}

let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth }
