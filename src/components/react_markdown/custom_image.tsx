import Image from 'next/image'
type Props = {
  src: string | undefined
  alt: string | undefined
}

export const CustomImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <span className="relative block aspect-[16/9]">
      <Image
        src={src ?? ''}
        alt={alt}
        layout="fill"
        objectFit="contain"
        placeholder="blur"
        blurDataURL={`${src}?w=16&h=16&fm=webp`}
        className="duration-500"
      />
    </span>
  )
}

export default CustomImage
