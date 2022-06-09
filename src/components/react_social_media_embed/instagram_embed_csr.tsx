import { InstagramEmbed } from 'react-social-media-embed'

type Props = {
  url: string
}

export const InstagramEmbedCSR: React.FC<Props> = ({ url }) => {
  return (
    <>
      <InstagramEmbed url={url} width="100%" />
    </>
  )
}

export default InstagramEmbedCSR
