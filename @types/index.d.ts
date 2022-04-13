//環境変数のための型拡張
namespace NodeJS {
  interface ProcessEnv {
    readonly MICROCMS_SERVICE_DOMAIN: string
    readonly MICROCMS_API_KEY: string
    readonly NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string
  }
}

type Position = {
  lat: number
  lng: number
}

type AnglingSpot = {
  name: string
  contentId: string
  position: Position
}

type AnglingField = {
  position: Position
  fieldImages:
    | {
        title: string
        position: {
          lat: number
          lng: number
        }
      }[]
    | null
  restrooms:
    | {
        title: string
        position: {
          lat: number
          lng: number
        }
      }[]
    | null
  stores:
    | {
        title: string
        position: {
          lat: number
          lng: number
        }
      }[]
    | null
  notices:
    | {
        title: string
        position: {
          lat: number
          lng: number
        }
      }[]
    | null
}
