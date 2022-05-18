import Link from 'next/link'

const TitleLogo: React.FC = () => {
  return (
    <div className="border-b border-teal-200 pt-2 pb-3 ">
      <h1 className="mx-auto max-w-[600px] px-3 font-logo text-4xl text-teal-500">
        <Link href="/">
          <a>Langling</a>
        </Link>
      </h1>
    </div>
  )
}

export default TitleLogo
