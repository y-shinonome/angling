import dayjs from 'dayjs'
import useSWR from 'swr'

type Comments = {
  name: string
  text: string
  timestamp: string
}[]

type Props = {
  pageId: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Comments: React.FC<Props> = ({ pageId }) => {
  const { data } = useSWR<Comments>(
    `/api/fetch_comments?pageId=${pageId}`,
    fetcher,
    { revalidateOnFocus: false }
  )

  return (
    <>
      {data?.length === 0 ? (
        <p className="mx-3 mt-3 text-sm text-gray-500">
          まだ投稿されたコメントがありません
        </p>
      ) : (
        <>
          {data?.map((comment, index) => (
            <>
              <div key={index} className="mx-3 whitespace-pre-wrap text-sm">
                <div className="mt-3 flex flex-wrap">
                  <p className="font-bold">
                    {comment.name === '' ? '匿名' : comment.name}
                  </p>
                  <time
                    className="ml-3 text-gray-400"
                    dateTime={comment.timestamp}
                  >
                    {dayjs(comment.timestamp).format('YYYY年MM月DD日')}
                  </time>
                </div>
                <p className="mt-3">{comment.text}</p>
              </div>
              <hr className="my-3" />
            </>
          ))}
        </>
      )}
    </>
  )
}

export default Comments
