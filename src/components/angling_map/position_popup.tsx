import { useContext } from 'react'
import { PopupContext } from '../../context/popup_context'
import SVG from '../atoms/svg'

type Props = {
  title: string
  lat: number
  lon: number
  className?: string
}

const PositionPopup: React.FC<Props> = ({ title, lat, lon, className }) => {
  const { setPopup } = useContext(PopupContext)
  return (
    <button
      onClick={() => {
        setPopup({
          title: title,
          lat: lat,
          lon: lon,
        })
      }}
      className={`flex items-center rounded-md bg-[#ADFFEA] shadow shadow-gray-400/50 hover:bg-black/10 ${className}`}
    >
      <SVG src="/icons/pin.svg" className="mr-2 h-[14px] w-[11px]" />
      位置表示
    </button>
  )
}

export default PositionPopup
{
  /* <a className="mx-auto mb-14 flex w-[fit-content] items-center rounded-lg bg-[#ADFFEA] px-5 py-2 shadow-md shadow-gray-400/50 duration-300 hover:bg-black/10">
<SVG src="/icons/map.svg" className="mr-2 h-[25px] w-[25px]" />
地図を開く
</a> */
}
