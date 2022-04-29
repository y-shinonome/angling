import { useContext, useEffect, useRef } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { PopupContext } from '../../context/popup_context'

import { icon } from 'leaflet'

const customIcon = icon({
  iconUrl: '/icons/title_popup.svg',
  iconSize: [0, 0],
})

const TitlePopup: React.FC = () => {
  const markerRef = useRef<L.Marker>(null)
  const { popup, setPopup } = useContext(PopupContext)

  const wait = async (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const handlePopupClose = async () => {
    //ポップアップを閉じる時、ポップアップのフェードアウトより先に
    //マーカーが消失して綺麗にフェードアウトしないため待機時間を設定する
    await wait(200)
    setPopup(undefined)
  }

  useEffect(() => {
    markerRef.current?.openPopup()
  }, [popup])

  if (typeof popup !== 'undefined') {
    return (
      <Marker
        icon={customIcon}
        position={[popup.lat, popup.lon]}
        ref={markerRef}
      >
        <Popup onClose={handlePopupClose}>{popup.title}</Popup>
      </Marker>
    )
  } else {
    return null
  }
}

export default TitlePopup
