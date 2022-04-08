import { firestore } from './firebase'

export const getDoc = async () => {
  const docRef = firestore.collection('angling_spot').doc('fure-yu_ura')
  const docSnap = await docRef.get()
  console.log(docSnap.data())
}

export const getCllection = async () => {
  const collectionRef = firestore.collection('angling_spot')
  const collectionSnap = await collectionRef.get()
  collectionSnap.forEach((doc) => {
    console.log(doc.data())
  })
}
