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
      className={`inline-flex items-center underline ${className}`}
    >
      {children}
      <FiExternalLink className="ml-1" />
    </a>
  )
}

export default ExternalLink
