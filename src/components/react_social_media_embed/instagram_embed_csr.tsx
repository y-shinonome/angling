import { InstagramEmbed } from 'react-social-media-embed'

type Props = {
  url: string
}

export const InstagramEmbedCSR: React.FC<Props> = ({ url }) => {
  return (
    <>
      <InstagramEmbed url={url} />
    </>
  )
}

export default InstagramEmbedCSR
