import { useToggle } from 'react-use'
import Link from 'next/link'
import SVG from '../../components/atoms/svg'

const Navigation: React.FC = () => {
  const [open, toggle] = useToggle(false)

  return (
    <>
      <button
        aria-label="menu"
        className="fixed top-2 right-2 z-30 rounded-md bg-[#f9f9f9]/50 p-2 shadow backdrop-blur-[2px] duration-300 hover:bg-black/5"
        onClick={toggle}
      >
        <SVG
          src={`${open ? '/icons/close.svg' : '/icons/menu.svg'}`}
          className="h-7 w-7"
        />
      </button>
      <div
        onClick={toggle}
        className={`fixed left-0 top-0 z-20 h-[100vh] w-[100vw] duration-300 ${
          open ? 'bg-white/[1%] backdrop-blur-[2px]' : 'pointer-events-none'
        }`}
      />
      <nav
        className={`fixed right-0 top-0 z-20 h-[100vh] max-w-[400px] overflow-hidden whitespace-nowrap bg-[#f9f9f9] pt-20 shadow-[0_0_15px_0_rgba(0,0,0,0.3)] duration-500 ${
          open ? 'w-[75%]' : 'w-0'
        } `}
      >
        <Link href="/">
          <a
            className="ml-2 mb-5 block border-b border-black/10 pl-2"
            onClick={toggle}
          >
            <div className="flex items-center">
              <SVG
                src="/icons/arrow_right.svg"
                className="mr-3 h-[12px] w-[7px]"
              />
              トップページ
            </div>
          </a>
        </Link>
        <Link href="/angling_map">
          <a
            className="ml-2 mb-5 block border-b border-black/10 pl-2"
            onClick={toggle}
          >
            <div className="flex items-center">
              <SVG
                src="/icons/arrow_right.svg"
                className="mr-3 h-[12px] w-[7px]"
              />
              釣り場マップ
            </div>
          </a>
        </Link>
        <Link href="/">
          <a
            className="ml-2 mb-5 block border-b border-black/10 pl-2"
            onClick={toggle}
          >
            <div className="flex items-center">
              <SVG
                src="/icons/arrow_right.svg"
                className="mr-3 h-[12px] w-[7px]"
              />
              ブログ
            </div>
          </a>
        </Link>
        <Link href="/">
          <a
            className="ml-2 mb-5 block border-b border-black/10 pl-2"
            onClick={toggle}
          >
            <div className="flex items-center">
              <SVG
                src="/icons/arrow_right.svg"
                className="mr-3 h-[12px] w-[7px]"
              />
              運営情報
            </div>
          </a>
        </Link>
        <Link href="/">
          <a
            className="ml-2 mb-5 block border-b border-black/10 pl-2"
            onClick={toggle}
          >
            <div className="flex items-center">
              <SVG
                src="/icons/arrow_right.svg"
                className="mr-3 h-[12px] w-[7px]"
              />
              プライバシーポリシー
            </div>
          </a>
        </Link>
        <Link href="/">
          <a
            className="ml-2 mb-5 block border-b border-black/10 pl-2"
            onClick={toggle}
          >
            <div className="flex items-center">
              <SVG
                src="/icons/arrow_right.svg"
                className="mr-3 h-[12px] w-[7px]"
              />
              お問い合わせ
            </div>
          </a>
        </Link>
      </nav>
    </>
  )
}

export default Navigation
