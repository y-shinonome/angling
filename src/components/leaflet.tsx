import 'leaflet/dist/leaflet.css'
import { icon } from 'leaflet'

const customIcon = icon({
  iconUrl: '/icon.svg',
  iconSize: [32, 32],
})

//マーカー付きポップアップ
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Leaflet = () => {
  return (
    <>
      <MapContainer
        center={[35.8, 139.8]}
        zoom={18}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          maxNativeZoom={19}
          maxZoom={20}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={customIcon} position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

// //現在地にマーカー設置
// import { useState } from 'react'
// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
//   useMapEvents,
// } from 'react-leaflet'

// const LocationMarker = () => {
//   const [position, setPosition] = useState<L.LatLng | null>(null)
//   const map = useMapEvents({
//     click() {
//       map.locate()
//     },
//     locationfound(e) {
//       setPosition(e.latlng)
//       map.flyTo(e.latlng, map.getZoom())
//     },
//   })

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   )
// }

// const Leaflet = () => {
//   return (
//     <MapContainer
//       center={[35.8, 139.8]}
//       zoom={13}
//       style={{ height: '100vh', width: '100%'}}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LocationMarker />
//     </MapContainer>
//   )
// }

// //ベクターレイヤー
// import {
//   Circle,
//   CircleMarker,
//   MapContainer,
//   Polyline,
//   Polygon,
//   Popup,
//   Rectangle,
//   TileLayer,
// } from 'react-leaflet'

// const center: L.LatLngExpression = [51.505, -0.09]

// const polyline: L.LatLngExpression[] = [
//   [51.505, -0.09],
//   [51.51, -0.1],
//   [51.51, -0.12],
// ]

// const multiPolyline: L.LatLngExpression[][] = [
//   [
//     [51.5, -0.1],
//     [51.5, -0.12],
//     [51.52, -0.12],
//   ],
//   [
//     [51.5, -0.05],
//     [51.5, -0.06],
//     [51.52, -0.06],
//   ],
// ]

// const polygon: L.LatLngExpression[] = [
//   [51.515, -0.09],
//   [51.52, -0.1],
//   [51.52, -0.12],
// ]

// const multiPolygon: L.LatLngExpression[][] = [
//   [
//     [51.51, -0.12],
//     [51.51, -0.13],
//     [51.53, -0.13],
//   ],
//   [
//     [51.51, -0.05],
//     [51.51, -0.07],
//     [51.53, -0.07],
//   ],
// ]

// const rectangle: L.LatLngBoundsExpression = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ]

// const fillBlueOptions = { fillColor: 'blue' }
// const blackOptions = { color: 'black', weight: 2 }
// const purpleOptions = { color: 'purple' }
// const redOptions = { color: 'red' }

// function Leaflet() {
//   return (
//     <MapContainer
//       center={center}
//       zoom={13}
//       style={{ height: '100vh', width: '100%' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
//       <CircleMarker
//         center={[51.51, -0.12]}
//         pathOptions={redOptions}
//         radius={20}
//       >
//         <Popup>Popup in CircleMarker</Popup>
//       </CircleMarker>
//       <Polyline pathOptions={blackOptions} positions={polyline}>
//         <Popup>Popup in polyline</Popup>
//       </Polyline>
//       <Polyline pathOptions={blackOptions} positions={multiPolyline} />
//       <Polygon pathOptions={purpleOptions} positions={polygon} />
//       <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
//       <Rectangle bounds={rectangle} pathOptions={blackOptions} />
//     </MapContainer>
//   )
// }

// //SVGオーバーレイ
// import { MapContainer, SVGOverlay, TileLayer } from 'react-leaflet'

// const position: L.LatLngExpression = [51.505, -0.09]
// const bounds: L.LatLngBoundsExpression = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ]

// function Leaflet() {
//   return (
//     <MapContainer
//       center={position}
//       zoom={13}
//       style={{ height: '100vh', width: '100%'}}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
//         <rect x="0" y="0" width="100%" height="100%" fill="blue" />
//         <circle r="5" cx="10" cy="10" fill="red" />
//         <text x="50%" y="50%" stroke="white">
//           text
//         </text>
//       </SVGOverlay>
//     </MapContainer>
//   )
// }

// // レイヤーグループ
// import {
//   Circle,
//   FeatureGroup,
//   LayerGroup,
//   MapContainer,
//   Popup,
//   Rectangle,
//   TileLayer,
// } from 'react-leaflet'

// const center: L.LatLngExpression = [51.505, -0.09]
// const rectangle: L.LatLngBoundsExpression = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ]

// const fillBlueOptions = { fillColor: 'blue' }
// const fillRedOptions = { fillColor: 'red' }
// const greenOptions = { color: 'green', fillColor: 'green' }
// const purpleOptions = { color: 'purple' }

// function Leaflet() {
//   return (
//     <MapContainer
//       center={center}
//       zoom={13}
//       style={{ height: '100vh', width: '100%' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LayerGroup>
//         <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
//         <Circle
//           center={center}
//           pathOptions={fillRedOptions}
//           radius={100}
//           stroke={false}
//         />
//         <LayerGroup>
//           <Circle
//             center={[51.51, -0.08]}
//             pathOptions={greenOptions}
//             radius={100}
//           />
//         </LayerGroup>
//       </LayerGroup>
//       <FeatureGroup pathOptions={purpleOptions}>
//         <Popup>Popup in FeatureGroup</Popup>
//         <Circle center={[51.51, -0.06]} radius={200} />
//         <Rectangle bounds={rectangle} />
//       </FeatureGroup>
//     </MapContainer>
//   )
// }

// //ツールチップ
// import { useMemo, useState } from 'react'
// import {
//   Circle,
//   MapContainer,
//   Popup,
//   Rectangle,
//   TileLayer,
//   Tooltip,
//   CircleMarker,
//   Marker,
//   Polygon,
// } from 'react-leaflet'

// const center: L.LatLngExpression = [51.505, -0.09]

// const multiPolygon: L.LatLngExpression[][] = [
//   [
//     [51.51, -0.12],
//     [51.51, -0.13],
//     [51.53, -0.13],
//   ],
//   [
//     [51.51, -0.05],
//     [51.51, -0.07],
//     [51.53, -0.07],
//   ],
// ]

// const rectangle: L.LatLngBoundsExpression = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ]

// const TooltipCircle = () => {
//   const [clickedCount, setClickedCount] = useState(0)
//   const eventHandlers = useMemo(
//     () => ({
//       click() {
//         setClickedCount((count) => count + 1)
//       },
//     }),
//     []
//   )

//   const clickedText =
//     clickedCount === 0
//       ? 'Click this Circle to change the Tooltip text'
//       : `Circle click: ${clickedCount}`

//   return (
//     <Circle
//       center={center}
//       eventHandlers={eventHandlers}
//       pathOptions={{ fillColor: 'blue' }}
//       radius={200}
//     >
//       <Tooltip>{clickedText}</Tooltip>
//     </Circle>
//   )
// }

// function Leaflet() {
//   return (
//     <MapContainer
//       center={center}
//       zoom={13}
//       style={{ height: '100vh', width: '100%' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <TooltipCircle />
//       <CircleMarker
//         center={[51.51, -0.12]}
//         pathOptions={{ color: 'red' }}
//         radius={20}
//       >
//         <Tooltip>Tooltip for CircleMarker</Tooltip>
//       </CircleMarker>
//       <Marker position={[51.51, -0.09]}>
//         <Popup>Popup for Marker</Popup>
//         <Tooltip>Tooltip for Marker</Tooltip>
//       </Marker>
//       <Polygon pathOptions={{ color: 'purple' }} positions={multiPolygon}>
//         <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
//       </Polygon>
//       <Rectangle bounds={rectangle} pathOptions={{ color: 'black' }}>
//         <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
//           permanent Tooltip for Rectangle
//         </Tooltip>
//       </Rectangle>
//     </MapContainer>
//   )
// }

// // レイヤーコントロール
// import {
//   Circle,
//   FeatureGroup,
//   LayerGroup,
//   LayersControl,
//   MapContainer,
//   Marker,
//   Popup,
//   Rectangle,
//   TileLayer,
// } from 'react-leaflet'

// const center: L.LatLngExpression = [51.505, -0.09]
// const rectangle: L.LatLngBoundsExpression = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ]

// function Leaflet() {
//   return (
//     <MapContainer
//       center={center}
//       zoom={13}
//       style={{ height: '100vh', width: '100%' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LayersControl position="topright">
//         <LayersControl.Overlay name="Marker with popup">
//           <Marker position={center}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </LayersControl.Overlay>
//         <LayersControl.Overlay checked name="Layer group with circles">
//           <LayerGroup>
//             <Circle
//               center={center}
//               pathOptions={{ fillColor: 'blue' }}
//               radius={200}
//             />
//             <Circle
//               center={center}
//               pathOptions={{ fillColor: 'red' }}
//               radius={100}
//               stroke={false}
//             />
//             <LayerGroup>
//               <Circle
//                 center={[51.51, -0.08]}
//                 pathOptions={{ color: 'green', fillColor: 'green' }}
//                 radius={100}
//               />
//             </LayerGroup>
//           </LayerGroup>
//         </LayersControl.Overlay>
//         <LayersControl.Overlay name="Feature group">
//           <FeatureGroup pathOptions={{ color: 'purple' }}>
//             <Popup>Popup in FeatureGroup</Popup>
//             <Circle center={[51.51, -0.06]} radius={200} />
//             <Rectangle bounds={rectangle} />
//           </FeatureGroup>
//         </LayersControl.Overlay>
//       </LayersControl>
//     </MapContainer>
//   )
// }

// // ペイン (z-indexの制御)
// import { useEffect, useRef, useState } from 'react'
// import { MapContainer, Pane, Rectangle, TileLayer } from 'react-leaflet'

// const outer: L.LatLngBoundsExpression = [
//   [50.505, -29.09],
//   [52.505, 29.09],
// ]
// const inner: L.LatLngBoundsExpression = [
//   [49.505, -2.09],
//   [53.505, 2.09],
// ]

// const BlinkingPane = () => {
//   const [render, setRender] = useState(true)
//   const timerRef = useRef<any>()
//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setRender((r) => !r)
//     }, 5000)
//     return () => {
//       clearInterval(timerRef.current)
//     }
//   }, [])

//   return render ? (
//     <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
//       <Rectangle bounds={outer} pathOptions={{ color: 'cyan' }} />
//     </Pane>
//   ) : null
// }

// const Leaflet = () => {
//   return (
//     <MapContainer bounds={outer} style={{ height: '100vh', width: '100%' }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <BlinkingPane />
//       <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>
//         <Rectangle bounds={inner} pathOptions={{ color: 'yellow' }} />
//         <Pane name="purple-rectangle">
//           <Rectangle bounds={outer} pathOptions={{ color: 'purple' }} />
//         </Pane>
//       </Pane>
//     </MapContainer>
//   )
// }

// //ドラッグ可能なマーカー
// import { useCallback, useMemo, useRef, useState } from 'react'
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

// const center = {
//   lat: 51.505,
//   lng: -0.09,
// }

// const DraggableMarker = () => {
//   const [draggable, setDraggable] = useState(false)
//   const [position, setPosition] = useState(center)
//   const markerRef = useRef<any>(null)
//   const eventHandlers = useMemo(
//     () => ({
//       dragend() {
//         const marker = markerRef.current
//         if (marker != null) {
//           setPosition(marker.getLatLng())
//         }
//       },
//     }),
//     []
//   )
//   const toggleDraggable = useCallback(() => {
//     setDraggable((d) => !d)
//   }, [])

//   return (
//     <Marker
//       icon={customIcon}
//       draggable={draggable}
//       eventHandlers={eventHandlers}
//       position={position}
//       ref={markerRef}
//     >
//       <Popup minWidth={90}>
//         <span onClick={toggleDraggable}>
//           {draggable
//             ? 'Marker is draggable'
//             : 'Click here to make marker draggable'}
//         </span>
//       </Popup>
//     </Marker>
//   )
// }

// const Leaflet = () => {
//   return (
//     <MapContainer
//       center={center}
//       zoom={13}
//       style={{ height: '100vh', width: '100%' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <DraggableMarker />
//     </MapContainer>
//   )
// }

// //境界を表示
// import { useMemo, useState } from 'react'
// import { MapContainer, Rectangle, TileLayer, useMap } from 'react-leaflet'

// const innerBounds: L.LatLngBoundsExpression = [
//   [49.505, -2.09],
//   [53.505, 2.09],
// ]
// const outerBounds: L.LatLngBoundsExpression = [
//   [50.505, -29.09],
//   [52.505, 29.09],
// ]

// const redColor = { color: 'red' }
// const whiteColor = { color: 'white' }

// const SetBoundsRectangles = () => {
//   const [bounds, setBounds] = useState(outerBounds)
//   const map = useMap()

//   const innerHandlers = useMemo(
//     () => ({
//       click() {
//         setBounds(innerBounds)
//         map.fitBounds(innerBounds)
//       },
//     }),
//     [map]
//   )
//   const outerHandlers = useMemo(
//     () => ({
//       click() {
//         setBounds(outerBounds)
//         map.fitBounds(outerBounds)
//       },
//     }),
//     [map]
//   )

//   return (
//     <>
//       <Rectangle
//         bounds={outerBounds}
//         eventHandlers={outerHandlers}
//         pathOptions={bounds === outerBounds ? redColor : whiteColor}
//       />
//       <Rectangle
//         bounds={innerBounds}
//         eventHandlers={innerHandlers}
//         pathOptions={bounds === innerBounds ? redColor : whiteColor}
//       />
//     </>
//   )
// }

// const Leaflet = () => {
//   return (
//     <MapContainer
//       bounds={outerBounds}
//       style={{ height: '100vh', width: '100%' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <SetBoundsRectangles />
//     </MapContainer>
//   )
// }

// //アニメーションによるパン
// import { useRef } from 'react'
// import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet'

// const SetViewOnClick = ({ animateRef }: any) => {
//   const map = useMapEvent('click', (e) => {
//     map.setView(e.latlng, map.getZoom(), {
//       animate: animateRef.current || false,
//     })
//   })

//   return null
// }

// const Leaflet = () => {
//   const animateRef = useRef(false)

//   return (
//     <>
//       <p>
//         <label>
//           <input
//             type="checkbox"
//             onChange={() => {
//               animateRef.current = !animateRef.current
//             }}
//           />
//           Animate panning
//         </label>
//       </p>
//       <MapContainer
//         center={[51.505, -0.09]}
//         zoom={13}
//         style={{ height: '100vh', width: '100%' }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <SetViewOnClick animateRef={animateRef} />
//       </MapContainer>
//     </>
//   )
// }

// //反応制御
// import { useCallback, useMemo, useState } from 'react'
// import {
//   MapContainer,
//   Rectangle,
//   TileLayer,
//   useMap,
//   useMapEvent,
// } from 'react-leaflet'
// import { useEventHandlers } from '@react-leaflet/core'

// // Classes used by Leaflet to position controls
// const POSITION_CLASSES = {
//   bottomleft: 'leaflet-bottom leaflet-left',
//   bottomright: 'leaflet-bottom leaflet-right',
//   topleft: 'leaflet-top leaflet-left',
//   topright: 'leaflet-top leaflet-right',
// }

// const BOUNDS_STYLE = { weight: 1 }

// const MinimapBounds = ({ parentMap, zoom }: any) => {
//   const minimap = useMap()

//   // Clicking a point on the minimap sets the parent's map center
//   const onClick = useCallback(
//     (e) => {
//       parentMap.setView(e.latlng, parentMap.getZoom())
//     },
//     [parentMap]
//   )
//   useMapEvent('click', onClick)

//   // Keep track of bounds in state to trigger renders
//   const [bounds, setBounds] = useState(parentMap.getBounds())
//   const onChange = useCallback(() => {
//     setBounds(parentMap.getBounds())
//     // Update the minimap's view to match the parent map's center and zoom
//     minimap.setView(parentMap.getCenter(), zoom)
//   }, [minimap, parentMap, zoom])

//   // Listen to events on the parent map
//   const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [])
//   useEventHandlers({ instance: parentMap }, handlers)

//   return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
// }

// function MinimapControl({ position, zoom }: any) {
//   const parentMap = useMap()
//   const mapZoom = zoom || 0

//   // Memoize the minimap so it's not affected by position changes
//   const minimap = useMemo(
//     () => (
//       <MapContainer
//         style={{ height: 80, width: 80 }}
//         center={parentMap.getCenter()}
//         zoom={mapZoom}
//         dragging={false}
//         doubleClickZoom={false}
//         scrollWheelZoom={false}
//         attributionControl={false}
//         zoomControl={false}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
//       </MapContainer>
//     ),
//     []
//   )

//   const positionClass =
//     (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
//   return (
//     <div className={positionClass}>
//       <div className="leaflet-control leaflet-bar">{minimap}</div>
//     </div>
//   )
// }

// const Leaflet = () => {
//   return (
//     <MapContainer
//       center={[51.505, -0.09]}
//       zoom={6}
//       style={{ height: '100vh', width: '100%' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <MinimapControl position="topright" />
//     </MapContainer>
//   )
// }

// //マッププレースホルダー
// import { MapContainer, TileLayer } from 'react-leaflet'

// const MapPlaceholder = () => {
//   return (
//     <p>
//       Map of London.{' '}
//       <noscript>You need to enable JavaScript to see this map.</noscript>
//     </p>
//   )
// }

// const Leaflet = () => {
//   return (
//     <MapContainer
//       center={[51.505, -0.09]}
//       zoom={13}
//       placeholder={<MapPlaceholder />}
//       style={{ height: '100vh', width: '100%' }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//     </MapContainer>
//   )
// }

export default Leaflet
