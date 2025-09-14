import { graphql } from '../generated';

export const GET_CREATOR_ASSETS_QUERY = graphql(`
  query GetCreatorAssets($input: PaginationInput!) {
    getCreatorAssets(input: $input) {
      assetId
      createdAt
      creatorId
      deletedAt
      id
      asset {
        blurredUrl
        createdAt
        creatorId
        fileType
        id
        mediaType
        mimeType
        rawUrl
        updatedAt
      }
    }
  }
`);

export const DELETE_CREATOR_ASSET_MUTATION = graphql(`
  mutation DeleteCreatorAsset($input: DeleteCreatorAsset!) {
    deleteCreatorAsset(input: $input)
  }
`);


