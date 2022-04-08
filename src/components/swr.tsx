import useSWR from 'swr'

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json())

const SWR: React.FC = () => {
  const { data, error } = useSWR('/api/firestore', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      {data.map((angling_spot: { title: string }, index: number) => (
        <p key={index}>{angling_spot.title}</p>
      ))}
    </>
  )
}

export default SWR
