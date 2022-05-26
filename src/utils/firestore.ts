import { firestore } from './firebase'
import dayjs from 'dayjs'

type Comment = {
  pageId: string
  name: string
  text: string
  timestamp: Date
}

export const setComment = async (comment: Comment) => {
  const docRef = firestore.collection('comments').doc()
  await docRef.set(comment)
}

export const getComments = async (pageId: string) => {
  const commentsRef = firestore.collection('comments')
  const snapshot = await commentsRef
    .where('pageId', '==', pageId)
    .orderBy('timestamp', 'desc')
    .get()
  const comments = snapshot.docs.map((doc) => {
    return {
      name: doc.data().name,
      text: doc.data().text,
      timestamp: dayjs(doc.data().timestamp.toDate()).format('YYYY-MM-DD'),
    }
  })
  return comments
}
