import { graphql } from '../generated';

export const GET_CREATOR_VAULT_OBJECTS_QUERY = graphql(`
  query GetCreatorVaultObjects($input: PaginationInput!) {
    getCreatorVaultObjects(input: $input) {
      createdAt
      deletedAt
      id
      objectUrl
      status
      updatedAt
      vaultId
      vault {
        id
        url
        updatedAt
        deletedAt
        creatorId
        createdAt
      }
    }
  }
`);

export const UPLOAD_TO_VAULT_MUTATION = graphql(`
  mutation UploadVault($input: UploadVaultInput!) {
    uploadVault(input: $input)
  }
`);
