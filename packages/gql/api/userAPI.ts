import { graphql } from '../generated';

export const DELETE_USER_MUTATION = graphql(`
  mutation DeleteUser {
    deleteUser
  }
`);
