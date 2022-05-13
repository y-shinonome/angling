import { createClient } from 'contentful'
import {
  IAnglingFieldsFields,
  ITopPageFields,
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
  })
  return response.items
}

export const getOtherAnglingFields = async (except: string | undefined) => {
  const response = await client.getEntries<IAnglingFieldsFields>({
    content_type: 'anglingFields',
    select: 'sys.id,fields.name,fields.position',
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

export const getAnglingField = async (id: string | undefined) => {
  const response = await client.getEntries<IAnglingFieldsFields>({
    content_type: 'anglingFields',
    'sys.id': id,
  })
  return response.items
}

export const getTopPageContent = async () => {
  const response = await client.getEntries<ITopPageFields>({
    content_type: 'topPage',
    select: 'fields.content',
  })
  return response.items
}

export const getUpdated = async () => {
  const response = await client.getEntries<IUpdatedFields>({
    content_type: 'updated',
    select: 'fields.updatedDate,fields.text',
  })
  return response.items
}
