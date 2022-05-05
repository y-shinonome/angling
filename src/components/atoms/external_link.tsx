import { FiExternalLink } from 'react-icons/fi'

type Props = {
  href: string
  className?: string
}

const ExternalLink: React.FC<Props> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-wrap items-center text-[#1a0dab] underline ${className}`}
    >
      {children}
      <FiExternalLink className="ml-1" />
    </a>
  )
}

export default ExternalLink
