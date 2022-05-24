import { useState } from 'react'

type Props = {
  pageId: string
}

const CommentForm: React.FC<Props> = ({ pageId }) => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetch('/api/addComment', {
      body: JSON.stringify({
        pageId: pageId,
        name: name,
        text: text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
  }

  return (
    <>
      <form className="mt-6 grid grid-cols-1 text-xs" onSubmit={handleSubmit}>
        <label className="block">
          <span>名前</span>
          <input
            type="text"
            className="mt-1 w-full rounded border-teal-200 text-sm placeholder:text-slate-400 focus:border-indigo-300 focus:ring-indigo-200"
            maxLength={32}
            placeholder="何も入力しなければ「匿名」表示になります"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </label>
        <label className="mt-3 block">
          <span>コメント</span>
          <span className="ml-1 text-slate-400">(必須)</span>
          <textarea
            className="mt-1 w-full rounded border-teal-200 text-sm placeholder:text-slate-400 focus:border-indigo-300 focus:ring-indigo-200"
            required={true}
            maxLength={500}
            placeholder="500文字以内"
            rows={4}
            onChange={(e) => {
              setText(e.target.value)
            }}
          ></textarea>
        </label>
        <button className="mt-2 rounded bg-teal-100 px-10 py-1 text-sm shadow shadow-gray-400/40 duration-300 hover:bg-black/10">
          コメントを残す
        </button>
      </form>
    </>
  )
}

export default CommentForm
