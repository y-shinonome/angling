import { createClient } from 'contentful'
import {
  IAnglingFieldsFields,
  IDocumentsFields,
  IUpdatedFields,
} from '../../@types/contentful'

const config = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
}

const client = createClient(config)

export const getAnglingFields = async () => {
  const response = await client.getEntries<IAnglingFieldsFields>({
    content_type: 'anglingFields',
    select:
      'sys.id,fields.name,fields.thumbnailUrl,fields.position,fields.categories',
    order: '-fields.position',
  })
  return response.items
}

export const getOtherAnglingFields = async (except: string | undefined) => {
  const response = await client.getEntries<IAnglingFieldsFields>({
    content_type: 'anglingFields',
    select: 'sys.id,fields.name,fields.position',
    order: '-fields.position',
    'sys.id[ne]': except,
  })
  return response.items
}

export const getAnglingFieldIds = async () => {
  const response = await client.getEntries<IAnglingFieldsFields>({
    content_type: 'anglingFields',
    select: 'sys.id',
  })
  return response.items
}

export const getAnglingFieldImages = async (id: string | undefined) => {
  const response = await client.getEntries<IAnglingFieldsFields>({
    content_type: 'anglingFields',
    'sys.id': id,
  })
  return response.items
}
export const getDocments = async (name: string) => {
  const response = await client.getEntries<IDocumentsFields>({
    content_type: 'documents',
    select: 'fields.content',
    'fields.name': name,
  })
  return response.items
}

export const getUpdated = async () => {
  const response = await client.getEntries<IUpdatedFields>({
    content_type: 'updated',
    select: 'fields.updatedDate,fields.text',
    order: '-fields.updatedDate',
  })
  return response.items
}
