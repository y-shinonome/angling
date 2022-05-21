import { BsLayersHalf } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'
import SVG from '../../components/atoms/svg'

type Props = {
  className: string
}

const Usage: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className={`grid grid-cols-2 gap-x-3 gap-y-5 text-sm ${className}`}>
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <SVG src="/icons/angling_field.svg" className="h-[40px] w-[28px]" />
          <p>地図上のピンを選択するとその地点の情報を確認することができます</p>
        </div>
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <BsLayersHalf className="text-4xl" />
          通常画像の地図と衛星画像の地図を切り替えることができます
        </div>
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <BiCurrentLocation className="text-4xl" />
          現在の位置情報を地図上に表示します
        </div>
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <p className="text-4xl">+－</p>
          地図の縮尺を変更します
        </div>
        <div className="flex flex-col items-center gap-y-2 rounded bg-white py-3 px-5 shadow-md">
          <div className="my-5 h-1 w-16 rounded-sm bg-gray-400/50" />
          地図画面の境界にあるバーをドラッグすると、表示範囲を変更できます
        </div>
      </div>
    </>
  )
}

export default Usage
