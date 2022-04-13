import { firestore } from './firebase'

export const getAnglingSpots = async () => {
  const collectionRef = firestore.collection('angling_spots')
  const collectionSnap = (await collectionRef.get()).docs.map((doc) => {
    return doc.data()
  })
  return collectionSnap
}

export const getAnglingField = async (contentId: string) => {
  const anglingSpotsRef = firestore.collection('angling_spots')
  const anglingFieldSnap = (
    await anglingSpotsRef.where('contentId', '==', contentId).get()
  ).docs.map((doc) => {
    return doc.data()
  })
  return anglingFieldSnap
}
