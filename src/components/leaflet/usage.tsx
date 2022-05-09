const Usage = () => {
  return (
    <div className="leaflet-control relative h-full w-full bg-gray-500/40">
      <div className="absolute top-8 left-1 rounded border bg-[#c5fff0] py-1 px-2 shadow-md shadow-gray-500/50">
        地図上のピンを選択すると
        <br />
        その地点の情報を確認できます
      </div>
      <div className="absolute right-[46px] bottom-[84px] rounded border bg-[#c5fff0] py-1 px-2 shadow-md shadow-gray-500/50">
        現在の位置情報を表示します
      </div>
      <div className="absolute left-[50%] bottom-1 translate-x-[-50%] whitespace-nowrap rounded border bg-[#c5fff0] py-1 px-2 shadow-md shadow-gray-500/50">
        地図の境界をドラッグすると
        <br />
        表示範囲を変更できます
      </div>
    </div>
  )
}

export default Usage
