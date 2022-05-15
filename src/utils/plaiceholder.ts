import type { Entry } from 'contentful'
import type { IAnglingFieldsFields } from '../../@types/contentful'
import { getPlaiceholder } from 'plaiceholder'

export const generatePlaceHolder = async (
  fieldImages: Entry<IAnglingFieldsFields>
) => {
  const { base64 } = await getPlaiceholder(fieldImages.fields.thumbnailUrl)
  fieldImages.fields.blurImage = base64

  //forEachやmapではasync/awaitを処理できないためfor...ofを使用する
  if (fieldImages.fields.anglingSpot) {
    for (const image of fieldImages.fields.anglingSpot) {
      if (image.fields.imageUrl) {
        const { base64 } = await getPlaiceholder(image.fields.imageUrl)
        image.fields.blurImage = base64
      }
    }
  }

  if (fieldImages.fields.parkingAreas) {
    for (const image of fieldImages.fields.parkingAreas) {
      if (image.fields.imageUrl) {
        const { base64 } = await getPlaiceholder(image.fields.imageUrl)
        image.fields.blurImage = base64
      }
    }
  }

  if (fieldImages.fields.restrooms) {
    for (const image of fieldImages.fields.restrooms) {
      if (image.fields.imageUrl) {
        const { base64 } = await getPlaiceholder(image.fields.imageUrl)
        image.fields.blurImage = base64
      }
    }
  }

  if (fieldImages.fields.stores) {
    for (const image of fieldImages.fields.stores) {
      if (image.fields.imageUrl) {
        const { base64 } = await getPlaiceholder(image.fields.imageUrl, {
          size: 10,
        })
        image.fields.blurImage = base64
      }
    }
  }

  return fieldImages
}
