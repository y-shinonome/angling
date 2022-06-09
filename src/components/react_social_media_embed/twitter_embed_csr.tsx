import { TwitterEmbed } from 'react-social-media-embed'

type Props = {
  url: string
}

export const TwitterEmbedCSR: React.FC<Props> = ({ url }) => {
  return (
    <>
      <TwitterEmbed url={url} />
    </>
  )
}

export default TwitterEmbedCSR
