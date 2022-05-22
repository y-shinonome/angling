import { firestore } from './firebase'

export const addDoc = async (pageId: string, name: string, comment: string) => {
  const docRef = firestore.collection('comments').doc()
  await docRef.set({ pageId: pageId, name: name, comment: comment })
}
