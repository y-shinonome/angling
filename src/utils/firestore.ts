import { firestore } from './firebase'

export const getAnglingFields = async () => {
  const collectionRef = firestore.collection('angling_spots')
  const collectionSnap = (await collectionRef.get()).docs.map((doc) => {
    return doc.data()
  })
  return collectionSnap
}

export const getAnglingField = async (contentId: string) => {
  const AnglingFieldsRef = firestore.collection('angling_spots')
  const anglingFieldSnap = (
    await AnglingFieldsRef.where('contentId', '==', contentId).get()
  ).docs.map((doc) => {
    return doc.data()
  })
  return anglingFieldSnap
}
