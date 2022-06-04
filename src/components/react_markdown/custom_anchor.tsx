import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

type Props = {
  href: string | undefined
}

export const CustomAnchor: React.FC<Props> = ({ children, href }) => {
  const isExternalLink = href?.includes('http') ? true : false

  return (
    <>
      {isExternalLink ? (
        <Link href={href ?? '/'}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="!font-bold !text-[#374151]"
          >
            {children}
            <FiExternalLink className="ml-[2px] inline" />
          </a>
        </Link>
      ) : (
        <Link href={href ?? '/'}>
          <a className="!font-bold !text-[#374151]">{children}</a>
        </Link>
      )}
    </>
  )
}

export default CustomAnchor
