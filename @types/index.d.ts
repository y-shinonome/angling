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
