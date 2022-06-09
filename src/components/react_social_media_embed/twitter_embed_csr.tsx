import { TwitterEmbed } from 'react-social-media-embed'

type Props = {
  url: string
}

export const TwitterEmbedCSR: React.FC<Props> = ({ url }) => {
  return (
    <>
      <TwitterEmbed url={url} width="100%" />
    </>
  )
}

export default TwitterEmbedCSR
