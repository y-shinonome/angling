//環境変数のための型拡張
namespace NodeJS {
  interface ProcessEnv {
    readonly MICROCMS_SERVICE_DOMAIN: string
    readonly MICROCMS_API_KEY: string
    readonly NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string
    readonly CONTENTFUL_SPACE_ID: string
    readonly CONTENTFUL_CDA_ACCESS_TOKEN: string
  }
}

type Position = {
  lat: number
  lng: number
}

type AnglingField = {
  id?: string
  name: string
  position: Position
  fieldImages?:
    | {
        sys: any
        fields: Spot
      }[]
    | null
  restrooms?:
    | {
        sys: any
        fields: Spot
      }[]
    | null
  stores?:
    | {
        sys: any
        fields: Spot
      }[]
    | null
  notices?:
    | {
        sys: any
        fields: Spot
      }[]
    | null
}

type Spot = {
  title: string
  position: {
    lat: number
    lng: number
  }
}
