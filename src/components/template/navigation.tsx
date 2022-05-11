import { useToggle } from 'react-use'
import Link from 'next/link'
import SVG from '../../components/atoms/svg'

const list = [
  { caption: 'トップページ', href: '/' },
  { caption: '釣り場マップ', href: '/angling_map' },
  { caption: 'ブログ', href: '/' },
  { caption: '運営情報', href: '/' },
  { caption: 'プライバシーポリシー', href: '/' },
  { caption: 'お問い合わせ', href: '/' },
]

const Navigation: React.FC = () => {
  const [open, toggle] = useToggle(false)

  return (
    <>
      <button
        aria-label="menu"
        className="fixed top-2 right-2 z-30 rounded-md bg-[#f9f9f9]/40 p-2 shadow backdrop-blur-[2px] duration-300 hover:bg-black/5"
        onClick={toggle}
      >
        <SVG
          src={`${open ? '/icons/close.svg' : '/icons/menu.svg'}`}
          className="h-7 w-7"
        />
      </button>
      <div
        onClick={() => toggle(false)}
        className={`fixed left-0 top-0 z-20 ${
          open ? 'h-[100vh] w-[100vw]' : 'h-0 w-0'
        }`}
      />
      <nav
        className={`fixed right-0 top-0 z-20 h-[100vh] overflow-hidden whitespace-nowrap bg-[#f9f9f9] pt-20 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] duration-500 ${
          open ? 'w-[250px]' : 'w-0'
        } `}
      >
        {list.map((item, index) => (
          <Link href={item.href} key={index}>
            <a
              className="ml-2 mb-5 block border-b border-black/10 pl-2"
              onClick={() => toggle(false)}
            >
              <div className="flex items-center">
                <SVG
                  src="/icons/arrow_right.svg"
                  className="mr-3 h-[12px] w-[7px]"
                />
                {item.caption}
              </div>
            </a>
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Navigation
