import { FacebookEmbed } from 'react-social-media-embed'

type Props = {
  url: string
}

export const FacebookEmbedCSR: React.FC<Props> = ({ url }) => {
  return (
    <>
      <FacebookEmbed url={url} width="100%" />
    </>
  )
}

export default FacebookEmbedCSR
