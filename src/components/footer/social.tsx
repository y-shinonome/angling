import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import ExternalLink from '../atoms/external_link'

const Social: React.FC = () => {
  return (
    <aside className="flex-1 whitespace-nowrap">
      <h2 className="mb-3">Social</h2>
      <ul className="text-xs">
        <li>
          <div className="inline-flex items-center">
            <FaTwitter className="mr-1 flex-shrink-0 text-lg text-[#00acee]" />
            <ExternalLink href="https://twitter.com/snnmy__">
              Twitter
            </ExternalLink>
          </div>
        </li>
        <li className="inline-flex">
          <div className="inline-flex items-center">
            <FaGithub className="mr-1 flex-shrink-0 text-lg text-[#0e0c0d]" />
            <ExternalLink href="https://github.com/y-shinonome">
              GitHub
            </ExternalLink>
          </div>
        </li>
      </ul>
    </aside>
  )
}

export default Social
