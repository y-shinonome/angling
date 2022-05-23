import { firestore } from './firebase'

type Comment = {
  pageId: string
  name: string
  comment: string
}

export const setComment = async (comment: Comment) => {
  const docRef = firestore.collection('comments').doc()
  await docRef.set({ comment })
}

export const getDoc = async () => {
  const docRef = firestore.collection('angling_spot').doc('fure-yu_ura')
  const docSnap = await docRef.get()
  console.log(docSnap.data())
}
