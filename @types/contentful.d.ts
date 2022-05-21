import { Asset, Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface IAnglingFieldsFields {
  /** name */
  name: string

  /** position */
  position: { lat: number; lon: number }

  /** description */
  description: string

  /** categories */
  categories: (
    | '岸壁'
    | '地磯'
    | 'サーフ'
    | '河口'
    | '釣り施設'
    | '駐車場'
    | 'トイレ'
    | '売店'
    | 'ファミリー向き'
    | 'レンタル釣具'
  )[]

  /** thumbnailURL */
  thumbnailUrl: string
  blurImage: string

  /** anglingSpot */
  anglingSpot?: Entry<IFieldImagesFields>[] | undefined

  /** restrooms */
  restrooms?: Entry<IFieldImagesFields>[] | undefined

  /** parkingAreas */
  parkingAreas?: Entry<IFieldImagesFields>[] | undefined

  /** stores */
  stores?: Entry<IFieldImagesFields>[] | undefined

  /** notices */
  notices?: Entry<IFieldImagesFields>[] | undefined
}

export interface IAnglingFields extends Entry<IAnglingFieldsFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'anglingFields'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IDocumentsFields {
  /** name */
  name: string

  /** content */
  content: string
}

export interface IDocuments extends Entry<IDocumentsFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'documents'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IFieldImagesFields {
  /** title */
  title: string

  /** position */
  position: { lat: number; lon: number }

  /** imageURL */
  imageUrl?: string | undefined
  blurImage?: string | undefined

  /** comment */
  comment?: string | undefined
}

export interface IFieldImages extends Entry<IFieldImagesFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'fieldImages'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IUpdatedFields {
  /** updatedDate */
  updatedDate: string

  /** text */
  text: string
}

export interface IUpdated extends Entry<IUpdatedFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'updated'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE =
  | 'anglingFields'
  | 'documents'
  | 'fieldImages'
  | 'updated'

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
