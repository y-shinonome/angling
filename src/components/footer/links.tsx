import Link from 'next/link'
const Links: React.FC = () => {
  return (
    <aside className="flex-1">
      <h2 className="mb-3">Links</h2>
      <ul className="whitespace-nowrap text-xs underline">
        <li className="mb-2">
          <Link href="/">
            <a>トップページ</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/angling_map">
            <a>釣り場マップ</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/blog">
            <a>ブログ</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/about">
            <a>このサイトについて</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/terms">
            <a>利用規約</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/contact">
            <a>お問い合わせ</a>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Links
