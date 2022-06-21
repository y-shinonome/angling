import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CustomAnchor from './custom_anchor'
import CustomImage from './custom_image'

type Props = {
  article: string
}

export const CustomReactMarkdown: React.FC<Props> = ({ article }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ children, ...props }) => {
          return <CustomAnchor href={props.href}>{children}</CustomAnchor>
        },
        img: ({ ...props }) => {
          return <CustomImage src={props.src} alt={props.alt} />
        },
      }}
    >
      {article}
    </ReactMarkdown>
  )
}

export default CustomReactMarkdown
