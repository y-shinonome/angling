import { firestore } from './firebase'

export const getAnglingSpot = async () => {
  const collectionRef = firestore.collection('angling_spots')
  const collectionSnap = (await collectionRef.get()).docs.map((doc) => {
    return doc.data()
  })
  return collectionSnap
}
