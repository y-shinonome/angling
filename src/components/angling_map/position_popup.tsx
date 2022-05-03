import { useContext } from 'react'
import { PopupContext } from '../../context/popup_context'

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
      className={`${className}`}
    >
      位置確認
    </button>
  )
}

export default PositionPopup
