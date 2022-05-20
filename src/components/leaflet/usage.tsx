import { useContext } from 'react'
import { UsageContext } from '../../context/usage_context'
import { BsQuestionCircle } from 'react-icons/bs'

const Usage: React.FC = () => {
  const { show, toggle } = useContext(UsageContext)

  return (
    <>
      <div
        className={`leaflet-control relative w-full overflow-hidden bg-gray-400/40 transition-opacity duration-500 ${
          show ? 'animate-show opacity-100' : 'animate-hide opacity-0'
        }`}
        onClick={() => toggle(false)}
      >
        <div className="absolute top-8 left-1 rounded border bg-teal-100 py-1 px-2 shadow-md shadow-gray-500/50">
          地図上のピンを選択すると
          <br />
          その地点の情報を確認できます
        </div>
        <div className="absolute right-[46px] bottom-[83px] rounded border bg-teal-100 py-1 px-2 shadow-md shadow-gray-500/50">
          現在の位置情報を表示します
        </div>
        <div className="absolute left-[50%] bottom-1 translate-x-[-50%] whitespace-nowrap rounded border bg-teal-100 py-1 px-2 shadow-md shadow-gray-500/50">
          地図の境界をドラッグすると
          <br />
          表示範囲を変更できます
        </div>
      </div>
      <div className="leaflet-bottom leaflet-right mb-[150px]">
        <div
          onClick={toggle}
          className="leaflet-bar leaflet-control !cursor-pointer"
        >
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-sm bg-white p-[2px] hover:bg-[#f4f4f4]">
            <BsQuestionCircle className=" text-xl" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Usage
