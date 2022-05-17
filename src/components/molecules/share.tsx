import { useRouter } from 'next/router'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  PocketShareButton,
  PocketIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share'

type Props = {
  className?: string
  size: number
  borderRadius: number
}

const Share: React.FC<Props> = ({ className, size, borderRadius }) => {
  const router = useRouter()
  const pageUrl = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}${router.asPath}`

  const ogImageUrl = () => {
    const metaElementContent =
      typeof window === 'undefined'
        ? ''
        : document.querySelector<HTMLMetaElement>('meta[property="og:image"]')
            ?.content ?? ''
    return metaElementContent
  }

  return (
    <aside className={className}>
      <TwitterShareButton url={pageUrl}>
        <TwitterIcon size={size} borderRadius={borderRadius} />
      </TwitterShareButton>
      <FacebookShareButton url={pageUrl}>
        <FacebookIcon size={size} borderRadius={borderRadius} />
      </FacebookShareButton>
      <LineShareButton url={pageUrl}>
        <LineIcon size={size} borderRadius={borderRadius} />
      </LineShareButton>
      <HatenaShareButton url={pageUrl}>
        <HatenaIcon size={size} borderRadius={borderRadius} />
      </HatenaShareButton>
      <LinkedinShareButton url={pageUrl}>
        <LinkedinIcon size={size} borderRadius={borderRadius} />
      </LinkedinShareButton>
      <PinterestShareButton url={pageUrl} media={ogImageUrl()}>
        <PinterestIcon size={size} borderRadius={borderRadius} />
      </PinterestShareButton>
      <PocketShareButton url={pageUrl}>
        <PocketIcon size={size} borderRadius={borderRadius} />
      </PocketShareButton>
      <EmailShareButton url={pageUrl}>
        <EmailIcon size={size} borderRadius={borderRadius} />
      </EmailShareButton>
    </aside>
  )
}

export default Share
