import { useContext } from 'react'
import { PopupContext } from '../../context/popup_context'
import SVG from '../atoms/svg'

type Props = {
  title: string
  lat: number
  lon: number
  id?: string
  className?: string
}

const PositionPopup: React.FC<Props> = ({ title, lat, lon, id, className }) => {
  const { setPopup } = useContext(PopupContext)
  return (
    <button
      onClick={() => {
        setPopup({
          title: title,
          lat: lat,
          lon: lon,
          id: id,
        })
      }}
      className={`flex items-center justify-center bg-teal-100 shadow shadow-gray-400/40 hover:bg-black/10 ${className}`}
    >
      <SVG src="/icons/pin.svg" className="mr-2 h-[14px] w-[11px]" />
      位置表示
    </button>
  )
}

export default PositionPopup
