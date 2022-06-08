import { FacebookEmbed } from 'react-social-media-embed'

type Props = {
  url: string
}

export const CustomFacebookEmbed: React.FC<Props> = ({ url }) => {
  return (
    <>
      <div className="my-5 flex justify-center">
        <FacebookEmbed url={url} />
      </div>
    </>
  )
}

export default CustomFacebookEmbed
