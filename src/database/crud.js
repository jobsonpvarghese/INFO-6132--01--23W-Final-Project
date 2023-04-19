import { getDocs, addDoc, collection, updateDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "./config.js"

const dbCollection = collection(db, "posts")

// function get data from firestore
export const getRes = async setExpenses => {
  const querySnapshot = await getDocs(dbCollection)
  const data = []
  querySnapshot.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id })
  })
  setExpenses(data)
}

export const postData = async data => {
  addDoc(dbCollection, data)
    .then(docRef => {
      console.log("Success:", docRef)
    })
    .catch(error => {
      console.error("Error:", error)
    })
}

export const updateData = async (id, data) => {
  const docRef = doc(db, "posts", id)
  updateDoc(docRef, data)
    .then(() => {
      console.log("Successfully updated!")
    })
    .catch(error => {
      console.error("Error:", error)
    })
}

export const deleteExpense = async (id, cb) => {
  const dbDoc = doc(db, "posts", id)
  deleteDoc(dbDoc)
    .then(() => {
      console.log("Successfully deleted!")
      cb()
    })
    .catch(error => {
      console.error("Error:", error)
    })
}
