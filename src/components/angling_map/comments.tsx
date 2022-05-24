import dayjs from 'dayjs'

type Props = {
  comments: {
    name: string
    text: string
    timestamp: string
  }[]
}

const Comments: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.length === 0 ? (
        <p className="mt-3 text-sm text-gray-500">
          まだ投稿されたコメントがありません
        </p>
      ) : (
        <>
          {comments.map((comment, index) => (
            <div key={index} className="whitespace-pre-wrap text-sm">
              <div className="mt-2 flex flex-wrap">
                <p className="font-bold">
                  {comment.name === '' ? '名前無し' : comment.name}
                </p>
                <time
                  className="ml-2 text-gray-400"
                  dateTime={comment.timestamp}
                >
                  {dayjs(comment.timestamp).format('YYYY年MM月DD日')}
                </time>
              </div>
              <p className="mt-3">{comment.text}</p>
              <hr className="my-2" />
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default Comments
