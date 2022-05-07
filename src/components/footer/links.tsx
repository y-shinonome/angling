import Link from 'next/link'
const Links: React.FC = () => {
  return (
    <aside className="flex-1">
      <h2 className="mb-3 text-lg font-medium">Links</h2>
      <ul className="text-sm underline">
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
          <Link href="/">
            <a>ブログ</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/">
            <a>運営情報</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/">
            <a>プライバシーポリシー</a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/">
            <a>お問い合わせ</a>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Links
