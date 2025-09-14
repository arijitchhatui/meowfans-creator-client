import { graphql } from '../generated';

export const GET_CREATOR_PROFILE_QUERY = graphql(`
  query GetCreatorProfile {
    getCreatorProfile {
      allowsComment
      allowsMessaging
      bio
      creatorId
      displayOnlineStatus
      displayTotalPost
      displayTotalSubscriber
      themeColor
      totalExclusivePost
      totalPost
      totalPublicPost
      totalSubscriber
      user {
        avatarUrl
        bannerUrl
        createdAt
        deletedAt
        firstName
        id
        lastLoginAt
        lastName
        roles
        updatedAt
        username
      }
    }
  }
`);

export const UPDATE_CREATOR_PROFILE_MUTATION = graphql(`
  mutation UpdateCreatorProfile($input: UpdateCreatorProfileInput!) {
    updateCreatorProfile(input: $input) {
      allowsComment
      allowsMessaging
      bio
      creatorId
      displayOnlineStatus
      displayTotalPost
      displayTotalSubscriber
      themeColor
      totalExclusivePost
      totalPost
      totalPublicPost
      totalSubscriber
    }
  }
`);

export const GET_BLOCKED_USERS_QUERY = graphql(`
  query GetBlockedUsers($input: PaginationInput!) {
    getBlockedUsers(input: $input) {
      blockedAt
      creatorId
      fanId
      id
      unBlockedAt
      fanProfile {
        fanId
        user {
          avatarUrl
          firstName
          lastName
          username
        }
      }
    }
  }
`);

export const BLOCK_FAN_MUTATION = graphql(`
  mutation BlockFan($input: BlockFanInput!) {
    blockFan(input: $input)
  }
`);

export const UNBLOCK_FAN_MUTATION = graphql(`
  mutation UnBlockFan($input: BlockFanInput!) {
    blockFan(input: $input)
  }
`);

export const RESTRICT_FAN_MUTATION = graphql(`
  mutation RestrictFan($input: RestrictFanInput!) {
    restrictFan(input: $input)
  }
`);

export const UNRESTRICT_FAN_MUTATION = graphql(`
  mutation UnRestrictFan($input: RestrictFanInput!) {
    restrictFan(input: $input)
  }
`);

export const GET_RESTRICTED_FANS_QUERY = graphql(`
  query GetRestrictedUsers($input: PaginationInput!) {
    getRestrictedUsers(input: $input) {
      creatorId
      fanId
      id
      restrictedAt
      unRestrictedAt
      fanProfile {
        fanId
        user {
          avatarUrl
          firstName
          lastName
          username
        }
      }
    }
  }
`);
