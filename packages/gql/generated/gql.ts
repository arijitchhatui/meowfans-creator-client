/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetCreatorAssets($input: PaginationInput!) {\n    getCreatorAssets(input: $input) {\n      assetId\n      createdAt\n      creatorId\n      deletedAt\n      id\n      type\n      asset {\n        blurredUrl\n        createdAt\n        creatorId\n        fileType\n        id\n        mediaType\n        mimeType\n        rawUrl\n        updatedAt\n      }\n    }\n  }\n": typeof types.GetCreatorAssetsDocument,
    "\n  mutation DeleteCreatorAssets($input: DeleteCreatorAsset!) {\n    deleteCreatorAssets(input: $input)\n  }\n": typeof types.DeleteCreatorAssetsDocument,
    "\n  mutation DeleteAllAssets {\n    deleteAllAssets\n  }\n": typeof types.DeleteAllAssetsDocument,
    "\n  mutation CreateChannel($input: CreateChannelInput!) {\n    createChannel(input: $input) {\n      createdAt\n      deletedAt\n      id\n      isMessagingBlocked\n      isMuted\n      isPinned\n      isRestricted\n      label\n      lastMessageId\n      totalEarning\n    }\n  }\n": typeof types.CreateChannelDocument,
    "\n  query GetPostCommentsByPostId($input: PaginationInput!) {\n    getPostCommentsByPostId(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n      fanProfile {\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n": typeof types.GetPostCommentsByPostIdDocument,
    "\n  query GetAllComments($input: PaginationInput!) {\n    getAllComments(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n      fanProfile {\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n": typeof types.GetAllCommentsDocument,
    "\n  query GetCreatorProfile {\n    getCreatorProfile {\n      allowsComment\n      allowsMessaging\n      bio\n      creatorId\n      displayOnlineStatus\n      displayTotalPost\n      displayTotalSubscriber\n      themeColor\n      totalExclusivePost\n      totalPost\n      totalPublicPost\n      totalSubscriber\n      user {\n        avatarUrl\n        bannerUrl\n        createdAt\n        deletedAt\n        firstName\n        id\n        lastLoginAt\n        lastName\n        roles\n        updatedAt\n        username\n      }\n    }\n  }\n": typeof types.GetCreatorProfileDocument,
    "\n  mutation UpdateCreatorProfile($input: UpdateCreatorProfileInput!) {\n    updateCreatorProfile(input: $input) {\n      allowsComment\n      allowsMessaging\n      bio\n      creatorId\n      displayOnlineStatus\n      displayTotalPost\n      displayTotalSubscriber\n      themeColor\n      totalExclusivePost\n      totalPost\n      totalPublicPost\n      totalSubscriber\n    }\n  }\n": typeof types.UpdateCreatorProfileDocument,
    "\n  query GetBlockedUsers($input: PaginationInput!) {\n    getBlockedUsers(input: $input) {\n      blockedAt\n      creatorId\n      fanId\n      id\n      unBlockedAt\n      fanProfile {\n        fanId\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n": typeof types.GetBlockedUsersDocument,
    "\n  mutation BlockFan($input: BlockFanInput!) {\n    blockFan(input: $input)\n  }\n": typeof types.BlockFanDocument,
    "\n  mutation UnBlockFan($input: BlockFanInput!) {\n    blockFan(input: $input)\n  }\n": typeof types.UnBlockFanDocument,
    "\n  mutation RestrictFan($input: RestrictFanInput!) {\n    restrictFan(input: $input)\n  }\n": typeof types.RestrictFanDocument,
    "\n  mutation UnRestrictFan($input: RestrictFanInput!) {\n    restrictFan(input: $input)\n  }\n": typeof types.UnRestrictFanDocument,
    "\n  query GetRestrictedUsers($input: PaginationInput!) {\n    getRestrictedUsers(input: $input) {\n      creatorId\n      fanId\n      id\n      restrictedAt\n      unRestrictedAt\n      fanProfile {\n        fanId\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n": typeof types.GetRestrictedUsersDocument,
    "\n  query getFanProfile {\n    getFanProfile {\n      fanId\n      appliedAt\n      user {\n        firstName\n        lastName\n        username\n        avatarUrl\n        bannerUrl\n      }\n    }\n  }\n": typeof types.GetFanProfileDocument,
    "\n  mutation UpdateFanProfile($input:UpdateUserProfileInput!) {\n    updateFanProfile(input:$input) {\n      appliedAt\n      createdAt\n      deletedAt\n      fanId\n      isBanned\n      updatedAt\n      user {\n        avatarUrl\n        bannerUrl\n        createdAt\n        deletedAt\n        firstName\n        id\n        lastLoginAt\n        lastName\n        roles\n        updatedAt\n        username\n      }\n    }\n  }\n": typeof types.UpdateFanProfileDocument,
    "\n  query Initiate($input: CreateImportInput!) {\n    initiate(input: $input)\n  }\n": typeof types.InitiateDocument,
    "\n  query GetPosts($input: PaginationInput!) {\n    getPosts(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": typeof types.GetPostsDocument,
    "\n  query GetPostsInfo($input: PaginationInput!) {\n    getPostsInfo(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      latestComment\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": typeof types.GetPostsInfoDocument,
    "\n  mutation CreatePost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": typeof types.CreatePostDocument,
    "\n  mutation CreateComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n    }\n  }\n": typeof types.CreateCommentDocument,
    "\n  mutation UpdateComment($input: UpdateCommentInput!) {\n    updateComment(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n    }\n  }\n": typeof types.UpdateCommentDocument,
    "\n  mutation DeleteComment($input: DeleteCommentInput!) {\n    deleteComment(input: $input)\n  }\n": typeof types.DeleteCommentDocument,
    "\n  mutation UpdatePost($input: UpdatePostInput!) {\n    updatePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": typeof types.UpdatePostDocument,
    "\n  mutation DeletePost($input: DeletePostInput!) {\n    deletePost(input: $input)\n  }\n": typeof types.DeletePostDocument,
    "\n  mutation DeletePosts($input: DeletePostsInput!) {\n    deletePosts(input: $input)\n  }\n": typeof types.DeletePostsDocument,
    "\n  mutation LikePost($input: LikePostInput!) {\n    likePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": typeof types.LikePostDocument,
    "\n  mutation SavePost($input: SavePostInput!) {\n    savePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": typeof types.SavePostDocument,
    "\n  mutation DeleteUser {\n    deleteUser\n  }\n": typeof types.DeleteUserDocument,
};
const documents: Documents = {
    "\n  query GetCreatorAssets($input: PaginationInput!) {\n    getCreatorAssets(input: $input) {\n      assetId\n      createdAt\n      creatorId\n      deletedAt\n      id\n      type\n      asset {\n        blurredUrl\n        createdAt\n        creatorId\n        fileType\n        id\n        mediaType\n        mimeType\n        rawUrl\n        updatedAt\n      }\n    }\n  }\n": types.GetCreatorAssetsDocument,
    "\n  mutation DeleteCreatorAssets($input: DeleteCreatorAsset!) {\n    deleteCreatorAssets(input: $input)\n  }\n": types.DeleteCreatorAssetsDocument,
    "\n  mutation DeleteAllAssets {\n    deleteAllAssets\n  }\n": types.DeleteAllAssetsDocument,
    "\n  mutation CreateChannel($input: CreateChannelInput!) {\n    createChannel(input: $input) {\n      createdAt\n      deletedAt\n      id\n      isMessagingBlocked\n      isMuted\n      isPinned\n      isRestricted\n      label\n      lastMessageId\n      totalEarning\n    }\n  }\n": types.CreateChannelDocument,
    "\n  query GetPostCommentsByPostId($input: PaginationInput!) {\n    getPostCommentsByPostId(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n      fanProfile {\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n": types.GetPostCommentsByPostIdDocument,
    "\n  query GetAllComments($input: PaginationInput!) {\n    getAllComments(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n      fanProfile {\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n": types.GetAllCommentsDocument,
    "\n  query GetCreatorProfile {\n    getCreatorProfile {\n      allowsComment\n      allowsMessaging\n      bio\n      creatorId\n      displayOnlineStatus\n      displayTotalPost\n      displayTotalSubscriber\n      themeColor\n      totalExclusivePost\n      totalPost\n      totalPublicPost\n      totalSubscriber\n      user {\n        avatarUrl\n        bannerUrl\n        createdAt\n        deletedAt\n        firstName\n        id\n        lastLoginAt\n        lastName\n        roles\n        updatedAt\n        username\n      }\n    }\n  }\n": types.GetCreatorProfileDocument,
    "\n  mutation UpdateCreatorProfile($input: UpdateCreatorProfileInput!) {\n    updateCreatorProfile(input: $input) {\n      allowsComment\n      allowsMessaging\n      bio\n      creatorId\n      displayOnlineStatus\n      displayTotalPost\n      displayTotalSubscriber\n      themeColor\n      totalExclusivePost\n      totalPost\n      totalPublicPost\n      totalSubscriber\n    }\n  }\n": types.UpdateCreatorProfileDocument,
    "\n  query GetBlockedUsers($input: PaginationInput!) {\n    getBlockedUsers(input: $input) {\n      blockedAt\n      creatorId\n      fanId\n      id\n      unBlockedAt\n      fanProfile {\n        fanId\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n": types.GetBlockedUsersDocument,
    "\n  mutation BlockFan($input: BlockFanInput!) {\n    blockFan(input: $input)\n  }\n": types.BlockFanDocument,
    "\n  mutation UnBlockFan($input: BlockFanInput!) {\n    blockFan(input: $input)\n  }\n": types.UnBlockFanDocument,
    "\n  mutation RestrictFan($input: RestrictFanInput!) {\n    restrictFan(input: $input)\n  }\n": types.RestrictFanDocument,
    "\n  mutation UnRestrictFan($input: RestrictFanInput!) {\n    restrictFan(input: $input)\n  }\n": types.UnRestrictFanDocument,
    "\n  query GetRestrictedUsers($input: PaginationInput!) {\n    getRestrictedUsers(input: $input) {\n      creatorId\n      fanId\n      id\n      restrictedAt\n      unRestrictedAt\n      fanProfile {\n        fanId\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n": types.GetRestrictedUsersDocument,
    "\n  query getFanProfile {\n    getFanProfile {\n      fanId\n      appliedAt\n      user {\n        firstName\n        lastName\n        username\n        avatarUrl\n        bannerUrl\n      }\n    }\n  }\n": types.GetFanProfileDocument,
    "\n  mutation UpdateFanProfile($input:UpdateUserProfileInput!) {\n    updateFanProfile(input:$input) {\n      appliedAt\n      createdAt\n      deletedAt\n      fanId\n      isBanned\n      updatedAt\n      user {\n        avatarUrl\n        bannerUrl\n        createdAt\n        deletedAt\n        firstName\n        id\n        lastLoginAt\n        lastName\n        roles\n        updatedAt\n        username\n      }\n    }\n  }\n": types.UpdateFanProfileDocument,
    "\n  query Initiate($input: CreateImportInput!) {\n    initiate(input: $input)\n  }\n": types.InitiateDocument,
    "\n  query GetPosts($input: PaginationInput!) {\n    getPosts(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": types.GetPostsDocument,
    "\n  query GetPostsInfo($input: PaginationInput!) {\n    getPostsInfo(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      latestComment\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": types.GetPostsInfoDocument,
    "\n  mutation CreatePost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation CreateComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n    }\n  }\n": types.CreateCommentDocument,
    "\n  mutation UpdateComment($input: UpdateCommentInput!) {\n    updateComment(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n    }\n  }\n": types.UpdateCommentDocument,
    "\n  mutation DeleteComment($input: DeleteCommentInput!) {\n    deleteComment(input: $input)\n  }\n": types.DeleteCommentDocument,
    "\n  mutation UpdatePost($input: UpdatePostInput!) {\n    updatePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": types.UpdatePostDocument,
    "\n  mutation DeletePost($input: DeletePostInput!) {\n    deletePost(input: $input)\n  }\n": types.DeletePostDocument,
    "\n  mutation DeletePosts($input: DeletePostsInput!) {\n    deletePosts(input: $input)\n  }\n": types.DeletePostsDocument,
    "\n  mutation LikePost($input: LikePostInput!) {\n    likePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": types.LikePostDocument,
    "\n  mutation SavePost($input: SavePostInput!) {\n    savePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n": types.SavePostDocument,
    "\n  mutation DeleteUser {\n    deleteUser\n  }\n": types.DeleteUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCreatorAssets($input: PaginationInput!) {\n    getCreatorAssets(input: $input) {\n      assetId\n      createdAt\n      creatorId\n      deletedAt\n      id\n      type\n      asset {\n        blurredUrl\n        createdAt\n        creatorId\n        fileType\n        id\n        mediaType\n        mimeType\n        rawUrl\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCreatorAssets($input: PaginationInput!) {\n    getCreatorAssets(input: $input) {\n      assetId\n      createdAt\n      creatorId\n      deletedAt\n      id\n      type\n      asset {\n        blurredUrl\n        createdAt\n        creatorId\n        fileType\n        id\n        mediaType\n        mimeType\n        rawUrl\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteCreatorAssets($input: DeleteCreatorAsset!) {\n    deleteCreatorAssets(input: $input)\n  }\n"): (typeof documents)["\n  mutation DeleteCreatorAssets($input: DeleteCreatorAsset!) {\n    deleteCreatorAssets(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteAllAssets {\n    deleteAllAssets\n  }\n"): (typeof documents)["\n  mutation DeleteAllAssets {\n    deleteAllAssets\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateChannel($input: CreateChannelInput!) {\n    createChannel(input: $input) {\n      createdAt\n      deletedAt\n      id\n      isMessagingBlocked\n      isMuted\n      isPinned\n      isRestricted\n      label\n      lastMessageId\n      totalEarning\n    }\n  }\n"): (typeof documents)["\n  mutation CreateChannel($input: CreateChannelInput!) {\n    createChannel(input: $input) {\n      createdAt\n      deletedAt\n      id\n      isMessagingBlocked\n      isMuted\n      isPinned\n      isRestricted\n      label\n      lastMessageId\n      totalEarning\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostCommentsByPostId($input: PaginationInput!) {\n    getPostCommentsByPostId(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n      fanProfile {\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostCommentsByPostId($input: PaginationInput!) {\n    getPostCommentsByPostId(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n      fanProfile {\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllComments($input: PaginationInput!) {\n    getAllComments(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n      fanProfile {\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllComments($input: PaginationInput!) {\n    getAllComments(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n      fanProfile {\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCreatorProfile {\n    getCreatorProfile {\n      allowsComment\n      allowsMessaging\n      bio\n      creatorId\n      displayOnlineStatus\n      displayTotalPost\n      displayTotalSubscriber\n      themeColor\n      totalExclusivePost\n      totalPost\n      totalPublicPost\n      totalSubscriber\n      user {\n        avatarUrl\n        bannerUrl\n        createdAt\n        deletedAt\n        firstName\n        id\n        lastLoginAt\n        lastName\n        roles\n        updatedAt\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCreatorProfile {\n    getCreatorProfile {\n      allowsComment\n      allowsMessaging\n      bio\n      creatorId\n      displayOnlineStatus\n      displayTotalPost\n      displayTotalSubscriber\n      themeColor\n      totalExclusivePost\n      totalPost\n      totalPublicPost\n      totalSubscriber\n      user {\n        avatarUrl\n        bannerUrl\n        createdAt\n        deletedAt\n        firstName\n        id\n        lastLoginAt\n        lastName\n        roles\n        updatedAt\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateCreatorProfile($input: UpdateCreatorProfileInput!) {\n    updateCreatorProfile(input: $input) {\n      allowsComment\n      allowsMessaging\n      bio\n      creatorId\n      displayOnlineStatus\n      displayTotalPost\n      displayTotalSubscriber\n      themeColor\n      totalExclusivePost\n      totalPost\n      totalPublicPost\n      totalSubscriber\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCreatorProfile($input: UpdateCreatorProfileInput!) {\n    updateCreatorProfile(input: $input) {\n      allowsComment\n      allowsMessaging\n      bio\n      creatorId\n      displayOnlineStatus\n      displayTotalPost\n      displayTotalSubscriber\n      themeColor\n      totalExclusivePost\n      totalPost\n      totalPublicPost\n      totalSubscriber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBlockedUsers($input: PaginationInput!) {\n    getBlockedUsers(input: $input) {\n      blockedAt\n      creatorId\n      fanId\n      id\n      unBlockedAt\n      fanProfile {\n        fanId\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBlockedUsers($input: PaginationInput!) {\n    getBlockedUsers(input: $input) {\n      blockedAt\n      creatorId\n      fanId\n      id\n      unBlockedAt\n      fanProfile {\n        fanId\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation BlockFan($input: BlockFanInput!) {\n    blockFan(input: $input)\n  }\n"): (typeof documents)["\n  mutation BlockFan($input: BlockFanInput!) {\n    blockFan(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnBlockFan($input: BlockFanInput!) {\n    blockFan(input: $input)\n  }\n"): (typeof documents)["\n  mutation UnBlockFan($input: BlockFanInput!) {\n    blockFan(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RestrictFan($input: RestrictFanInput!) {\n    restrictFan(input: $input)\n  }\n"): (typeof documents)["\n  mutation RestrictFan($input: RestrictFanInput!) {\n    restrictFan(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnRestrictFan($input: RestrictFanInput!) {\n    restrictFan(input: $input)\n  }\n"): (typeof documents)["\n  mutation UnRestrictFan($input: RestrictFanInput!) {\n    restrictFan(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetRestrictedUsers($input: PaginationInput!) {\n    getRestrictedUsers(input: $input) {\n      creatorId\n      fanId\n      id\n      restrictedAt\n      unRestrictedAt\n      fanProfile {\n        fanId\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRestrictedUsers($input: PaginationInput!) {\n    getRestrictedUsers(input: $input) {\n      creatorId\n      fanId\n      id\n      restrictedAt\n      unRestrictedAt\n      fanProfile {\n        fanId\n        user {\n          avatarUrl\n          firstName\n          lastName\n          username\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getFanProfile {\n    getFanProfile {\n      fanId\n      appliedAt\n      user {\n        firstName\n        lastName\n        username\n        avatarUrl\n        bannerUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query getFanProfile {\n    getFanProfile {\n      fanId\n      appliedAt\n      user {\n        firstName\n        lastName\n        username\n        avatarUrl\n        bannerUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateFanProfile($input:UpdateUserProfileInput!) {\n    updateFanProfile(input:$input) {\n      appliedAt\n      createdAt\n      deletedAt\n      fanId\n      isBanned\n      updatedAt\n      user {\n        avatarUrl\n        bannerUrl\n        createdAt\n        deletedAt\n        firstName\n        id\n        lastLoginAt\n        lastName\n        roles\n        updatedAt\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateFanProfile($input:UpdateUserProfileInput!) {\n    updateFanProfile(input:$input) {\n      appliedAt\n      createdAt\n      deletedAt\n      fanId\n      isBanned\n      updatedAt\n      user {\n        avatarUrl\n        bannerUrl\n        createdAt\n        deletedAt\n        firstName\n        id\n        lastLoginAt\n        lastName\n        roles\n        updatedAt\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Initiate($input: CreateImportInput!) {\n    initiate(input: $input)\n  }\n"): (typeof documents)["\n  query Initiate($input: CreateImportInput!) {\n    initiate(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPosts($input: PaginationInput!) {\n    getPosts(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetPosts($input: PaginationInput!) {\n    getPosts(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostsInfo($input: PaginationInput!) {\n    getPostsInfo(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      latestComment\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetPostsInfo($input: PaginationInput!) {\n    getPostsInfo(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      latestComment\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePost($input: CreatePostInput!) {\n    createPost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      lastCommentId\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateComment($input: CreateCommentInput!) {\n    createComment(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateComment($input: UpdateCommentInput!) {\n    updateComment(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateComment($input: UpdateCommentInput!) {\n    updateComment(input: $input) {\n      comment\n      createdAt\n      deletedAt\n      fanId\n      id\n      postId\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteComment($input: DeleteCommentInput!) {\n    deleteComment(input: $input)\n  }\n"): (typeof documents)["\n  mutation DeleteComment($input: DeleteCommentInput!) {\n    deleteComment(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePost($input: UpdatePostInput!) {\n    updatePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePost($input: UpdatePostInput!) {\n    updatePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePost($input: DeletePostInput!) {\n    deletePost(input: $input)\n  }\n"): (typeof documents)["\n  mutation DeletePost($input: DeletePostInput!) {\n    deletePost(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePosts($input: DeletePostsInput!) {\n    deletePosts(input: $input)\n  }\n"): (typeof documents)["\n  mutation DeletePosts($input: DeletePostsInput!) {\n    deletePosts(input: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LikePost($input: LikePostInput!) {\n    likePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation LikePost($input: LikePostInput!) {\n    likePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SavePost($input: SavePostInput!) {\n    savePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation SavePost($input: SavePostInput!) {\n    savePost(input: $input) {\n      caption\n      commentCount\n      createdAt\n      creatorId\n      deletedAt\n      id\n      likeCount\n      saveCount\n      shareCount\n      totalEarning\n      types\n      unlockPrice\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUser {\n    deleteUser\n  }\n"): (typeof documents)["\n  mutation DeleteUser {\n    deleteUser\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;