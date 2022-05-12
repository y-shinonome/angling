// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

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

export interface IFieldImagesFields {
  /** title */
  title: string

  /** position */
  position: { lat: number; lon: number }

  /** imageURL */
  imageUrl?: string | undefined

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

export interface ITopPageFields {
  /** content */
  content: string
}

export interface ITopPage extends Entry<ITopPageFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'topPage'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'anglingFields' | 'fieldImages' | 'topPage'

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
