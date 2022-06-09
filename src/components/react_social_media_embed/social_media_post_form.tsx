import { useState } from 'react'
import { useSWRConfig } from 'swr'

export const SocialMediaPostForm = () => {
  const [url, setURL] = useState('')
  const { mutate } = useSWRConfig()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetch('/api/add_social_media', {
      body: JSON.stringify({
        url: url,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    mutate(`/api/fetch_social_media`)
  }

  return (
    <form
      className="mx-3 mt-6 grid grid-cols-1 text-xs"
      onSubmit={handleSubmit}
    >
      <label className="block">
        <span>SNS共有URL</span>
        <input
          type="url"
          className="mt-1 w-full rounded border-teal-200 text-sm placeholder:text-slate-400 focus:border-indigo-300 focus:ring-indigo-200"
          maxLength={512}
          placeholder="Twitter Facebook Instagram"
          value={url}
          onChange={(e) => {
            setURL(e.target.value)
          }}
        />
      </label>
      <button className="mt-2 rounded bg-teal-100 px-10 py-1 text-sm shadow shadow-gray-400/40 duration-300 hover:bg-teal-400/30">
        釣果を投稿する
      </button>
    </form>
  )
}

export default SocialMediaPostForm
