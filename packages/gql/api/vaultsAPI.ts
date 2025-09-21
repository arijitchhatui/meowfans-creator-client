import { graphql } from '../generated';

export const GET_CREATOR_VAULTS_QUERY = graphql(`
  query GetCreatorVaults($input: PaginationInput!) {
    getCreatorVaults(input: $input) {
      id
      creatorId
      url
      status
      createdAt
      updatedAt
      deletedAt
    }
  }
`);

export const UPLOAD_TO_VAULT_MUTATION = graphql(`
  mutation UploadVaults($input: InsertVaultInput!) {
    uploadVaults(input: $input) {
      id
      creatorId
      url
      status
      createdAt
      updatedAt
      deletedAt
    }
  }
`);
