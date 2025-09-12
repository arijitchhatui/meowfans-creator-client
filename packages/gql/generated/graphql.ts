export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type AssetsEntity = {
  __typename?: 'AssetsEntity';
  blurredUrl: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorAssets: Array<CreatorAssetsEntity>;
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  fanAssets: Array<FanAssetsEntity>;
  fileType: FileType;
  id: Scalars['String']['output'];
  mediaType: MediaType;
  messageAssets: Array<MessageAssetsEntity>;
  mimeType: Scalars['String']['output'];
  postAssets: Array<PostAssetsEntity>;
  rawUrl: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BlockFanInput = {
  fanId: Scalars['String']['input'];
};

export type CreateChannelInput = {
  creatorId: Scalars['String']['input'];
  fanId: Scalars['String']['input'];
};

export type CreateCommentInput = {
  comment: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type CreatePostInput = {
  assetIds: Array<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  types: Array<PostTypes>;
  unlockPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateScrapeInput = {
  fileType?: FileType;
  hasBranch?: Scalars['Boolean']['input'];
  qualityType?: DocumentQualityType;
  totalContent?: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreatorAssetsEntity = {
  __typename?: 'CreatorAssetsEntity';
  asset: AssetsEntity;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
};

export type CreatorBlocksEntity = {
  __typename?: 'CreatorBlocksEntity';
  blockedAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  unBlockedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreatorFollowsEntity = {
  __typename?: 'CreatorFollowsEntity';
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  followedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  unFollowedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreatorInterfacesEntity = {
  __typename?: 'CreatorInterfacesEntity';
  backgroundImage: Scalars['String']['output'];
  canReceiveCall: Scalars['Boolean']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  id: Scalars['String']['output'];
  isPGFilterOn: Scalars['Boolean']['output'];
  mode: Scalars['String']['output'];
};

export type CreatorPaymentProfilesEntity = {
  __typename?: 'CreatorPaymentProfilesEntity';
  canTransfer: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  id: Scalars['String']['output'];
  stripe_connect_id: Scalars['String']['output'];
  subscriptions: Array<SubscriptionsEntity>;
};

export type CreatorProfile = {
  __typename?: 'CreatorProfile';
  avatarUrl: Scalars['String']['output'];
  creatorId: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type CreatorProfileOutput = {
  __typename?: 'CreatorProfileOutput';
  avatarUrl: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type CreatorProfilesEntity = {
  __typename?: 'CreatorProfilesEntity';
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  allowsComment: Scalars['Boolean']['output'];
  allowsMessaging: Scalars['Boolean']['output'];
  assets: Array<AssetsEntity>;
  bio?: Maybe<Scalars['String']['output']>;
  channels: Array<MessageChannelsEntity>;
  createdAt: Scalars['DateTime']['output'];
  creatorAssets: Array<CreatorAssetsEntity>;
  creatorBlocks: Array<CreatorBlocksEntity>;
  creatorId: Scalars['String']['output'];
  creatorPayMentProfile: Array<CreatorPaymentProfilesEntity>;
  creatorRestricts: Array<CreatorRestrictsEntity>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  displayOnlineStatus: Scalars['Boolean']['output'];
  displayTotalPost: Scalars['Boolean']['output'];
  displayTotalSubscriber: Scalars['Boolean']['output'];
  followers: Array<CreatorFollowsEntity>;
  groupMessages: Array<GroupsEntity>;
  groups: Array<GroupsEntity>;
  interfaces: Array<CreatorInterfacesEntity>;
  payments: Array<PaymentsEntity>;
  posts: Array<PostsEntity>;
  rejectedAt?: Maybe<Scalars['DateTime']['output']>;
  socialAccount: Array<SocialAccountsEntity>;
  subscriptionPlans: Array<SubscriptionPlansEntity>;
  subscriptions: Array<SubscriptionsEntity>;
  themeColor: Scalars['String']['output'];
  totalExclusivePost: Scalars['Float']['output'];
  totalPost: Scalars['Float']['output'];
  totalPublicPost: Scalars['Float']['output'];
  totalSubscriber: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UsersEntity;
  verified: Scalars['Boolean']['output'];
};

export type CreatorRestrictsEntity = {
  __typename?: 'CreatorRestrictsEntity';
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  restrictedAt: Scalars['DateTime']['output'];
  unRestrictedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DeleteCommentInput = {
  commentId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type DeleteCreatorAsset = {
  assetId: Scalars['String']['input'];
};

export type DeleteFollowerInput = {
  fanId: Scalars['String']['input'];
};

export type DeleteMessageInput = {
  messageId: Scalars['String']['input'];
};

export type DeleteMessagesInput = {
  messageIds: Array<Scalars['ID']['input']>;
};

export type DeletePostInput = {
  postId: Scalars['String']['input'];
};

export type DeletePostsInput = {
  postIds: Array<Scalars['ID']['input']>;
};

export type DeleteSharePostInput = {
  postId: Scalars['String']['input'];
  shareId: Scalars['String']['input'];
};

export enum DocumentQualityType {
  DefaultDefinition = 'DEFAULT_DEFINITION',
  HighDefinition = 'HIGH_DEFINITION',
  LowDefinition = 'LOW_DEFINITION'
}

export type FanAssetsEntity = {
  __typename?: 'FanAssetsEntity';
  asset: AssetsEntity;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
};

export type FanPaymentProfilesEntity = {
  __typename?: 'FanPaymentProfilesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  stripeCustomerId: Scalars['String']['output'];
};

export type FanProfile = {
  __typename?: 'FanProfile';
  avatarUrl: Scalars['String']['output'];
  fanId: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type FanProfileOutput = {
  __typename?: 'FanProfileOutput';
  avatarUrl: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type FanProfilesEntity = {
  __typename?: 'FanProfilesEntity';
  appliedAt?: Maybe<Scalars['DateTime']['output']>;
  blockedByCreators: Array<CreatorBlocksEntity>;
  channels: Array<MessageChannelsEntity>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanAssets: Array<FanAssetsEntity>;
  fanId: Scalars['String']['output'];
  fanPaymentProfiles: Array<FanPaymentProfilesEntity>;
  following: Array<CreatorFollowsEntity>;
  groupMessageReplies: Array<GroupMessageRepliesEntity>;
  groupReceivers: Array<GroupMessagesEntity>;
  isBanned: Scalars['Boolean']['output'];
  messagePurchases: Array<MessagePurchasesEntity>;
  moderatorGroups: Array<GroupsEntity>;
  participantGroups: Array<GroupsEntity>;
  payments: Array<PaymentsEntity>;
  postComments: Array<PostCommentsEntity>;
  postLikes: Array<MessageRepliesEntity>;
  postPurchases: Array<PostPurchasesEntity>;
  postSaves: Array<PostSavesEntity>;
  postShares: Array<PostSharesEntity>;
  postUnlocks: Array<PremiumPostUnlocksEntity>;
  restrictedByCreators: Array<CreatorRestrictsEntity>;
  subscriptions: Array<SubscriptionsEntity>;
  updatedAt: Scalars['DateTime']['output'];
  user: UsersEntity;
};

export enum FileType {
  Audio = 'AUDIO',
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type FollowCreatorInput = {
  creatorId: Scalars['String']['input'];
};

export type GetChannelInput = {
  channelId: Scalars['String']['input'];
};

export type GetChannelOutput = {
  __typename?: 'GetChannelOutput';
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorLastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  creatorLastSentAt?: Maybe<Scalars['DateTime']['output']>;
  creatorProfile?: Maybe<CreatorProfile>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanLastSeenAt: Scalars['DateTime']['output'];
  fanLastSentAt: Scalars['DateTime']['output'];
  fanProfile?: Maybe<FanProfile>;
  id: Scalars['String']['output'];
  isMessagingBlocked: Scalars['Boolean']['output'];
  isMuted: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  isRestricted: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  totalEarning: Scalars['Float']['output'];
};

export type GetChannelsOutput = {
  __typename?: 'GetChannelsOutput';
  createdAt: Scalars['DateTime']['output'];
  creatorFullName: Scalars['String']['output'];
  creatorId: Scalars['String']['output'];
  creatorLastSeenAt?: Maybe<Scalars['DateTime']['output']>;
  creatorLastSentAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanFullName: Scalars['String']['output'];
  fanId: Scalars['String']['output'];
  fanLastSeenAt: Scalars['DateTime']['output'];
  fanLastSentAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isMessagingBlocked: Scalars['Boolean']['output'];
  isMuted: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  isRestricted: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  lastMessage?: Maybe<Scalars['String']['output']>;
  totalEarning: Scalars['Float']['output'];
};

export type GetCommentsOutput = {
  __typename?: 'GetCommentsOutput';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfileOutput;
  id: Scalars['String']['output'];
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GetPostsInfoOutput = {
  __typename?: 'GetPostsInfoOutput';
  caption?: Maybe<Scalars['String']['output']>;
  commentCount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  lastCommentId?: Maybe<Scalars['String']['output']>;
  latestComment?: Maybe<Scalars['String']['output']>;
  likeCount: Scalars['Float']['output'];
  saveCount: Scalars['Float']['output'];
  shareCount: Scalars['Float']['output'];
  totalEarning: Scalars['Float']['output'];
  types: Array<PostTypes>;
  unlockPrice?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GetRestrictedUsersOutput = {
  __typename?: 'GetRestrictedUsersOutput';
  avatarUrl: Scalars['String']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  restrictedAt: Scalars['DateTime']['output'];
  unRestrictedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type GroupMessageRepliesEntity = {
  __typename?: 'GroupMessageRepliesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  groupMessage: GroupMessagesEntity;
  id: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
  repliers: Array<FanProfilesEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GroupMessagesEntity = {
  __typename?: 'GroupMessagesEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  group: GroupsEntity;
  groupId: Scalars['String']['output'];
  groupMessageReplies: Array<GroupMessageRepliesEntity>;
  id: Scalars['String']['output'];
  isCreator: Scalars['Boolean']['output'];
  isExclusive: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  receivers: Array<FanProfilesEntity>;
  senderId: Scalars['String']['output'];
  unlockPrice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GroupsEntity = {
  __typename?: 'GroupsEntity';
  admin: CreatorProfilesEntity;
  adminId: Scalars['String']['output'];
  backgroundColor: Scalars['String']['output'];
  bannerUrl: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  groupMessages: Array<GroupMessagesEntity>;
  groupName: Scalars['String']['output'];
  iconUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isMuted: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  isRestricted: Scalars['Boolean']['output'];
  moderators: Array<FanProfilesEntity>;
  participants: Array<FanProfilesEntity>;
};

export type LikePostInput = {
  postId: Scalars['String']['input'];
};

export enum MediaType {
  MessageMedia = 'MESSAGE_MEDIA',
  PostMedia = 'POST_MEDIA',
  ProfileMedia = 'PROFILE_MEDIA'
}

export type MessageAssetsEntity = {
  __typename?: 'MessageAssetsEntity';
  asset: AssetsEntity;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: MessagesEntity;
  messageId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MessageChannelsEntity = {
  __typename?: 'MessageChannelsEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  isMessagingBlocked: Scalars['Boolean']['output'];
  isMuted: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  isRestricted: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  lastMessage: MessagesEntity;
  lastMessageId?: Maybe<Scalars['String']['output']>;
  messages: Array<MessagesEntity>;
  totalEarning: Scalars['Float']['output'];
};

export type MessagePurchasesEntity = {
  __typename?: 'MessagePurchasesEntity';
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  message: MessagesEntity;
  messageId: Scalars['String']['output'];
  purchasedAt: Scalars['String']['output'];
};

export type MessageReactionsEntity = {
  __typename?: 'MessageReactionsEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  message: MessagesEntity;
  messageId: Scalars['String']['output'];
  reaction: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type MessageRepliesEntity = {
  __typename?: 'MessageRepliesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  message: MessagesEntity;
  messageId: Scalars['String']['output'];
  replierId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MessagesEntity = {
  __typename?: 'MessagesEntity';
  channel: MessageChannelsEntity;
  channelId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  hasAccess: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  isExclusive: Scalars['Boolean']['output'];
  messageAssets: Array<MessageAssetsEntity>;
  messagePurchases: Array<MessagePurchasesEntity>;
  reaction: MessageReactionsEntity;
  recipientUserId: Scalars['String']['output'];
  repliedTo?: Maybe<MessagesEntity>;
  replies: Array<MessageRepliesEntity>;
  senderId: Scalars['String']['output'];
  unlockPrice?: Maybe<Scalars['Float']['output']>;
  unlockedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  blockFan: Scalars['Boolean']['output'];
  createChannel: MessageChannelsEntity;
  createComment: PostCommentsEntity;
  createPost: PostsEntity;
  deleteComment: Scalars['Boolean']['output'];
  deleteCreatorAsset: Scalars['Boolean']['output'];
  deleteFollower: Scalars['Boolean']['output'];
  deleteMessage: Scalars['Boolean']['output'];
  deleteMessages: Scalars['Boolean']['output'];
  deletePost: Scalars['Boolean']['output'];
  deletePosts: Scalars['Boolean']['output'];
  deleteShare: Scalars['Boolean']['output'];
  followCreator: CreatorFollowsEntity;
  likePost: PostsEntity;
  restrictFan: Scalars['Boolean']['output'];
  savePost: PostsEntity;
  sendMessageFromCreator: MessagesEntity;
  sendMessageFromFan: MessagesEntity;
  sendOrDeleteMessageReaction: MessageReactionsEntity;
  sendReplyFromCreator: MessagesEntity;
  sendReplyFromFan: MessagesEntity;
  sharePost: PostSharesEntity;
  unBlockFan: Scalars['Boolean']['output'];
  unFollowCreator: Scalars['Boolean']['output'];
  unRestrictFan: Scalars['Boolean']['output'];
  updateChannel: MessageChannelsEntity;
  updateComment: PostCommentsEntity;
  updateCreatorProfile: CreatorProfilesEntity;
  updateFanProfile: FanProfilesEntity;
  updateMessage: MessagesEntity;
  updatePost: PostsEntity;
};

export type MutationBlockFanArgs = {
  input: BlockFanInput;
};

export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};

export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};

export type MutationDeleteCreatorAssetArgs = {
  input: DeleteCreatorAsset;
};

export type MutationDeleteFollowerArgs = {
  input: DeleteFollowerInput;
};

export type MutationDeleteMessageArgs = {
  input: DeleteMessageInput;
};

export type MutationDeleteMessagesArgs = {
  input: DeleteMessagesInput;
};

export type MutationDeletePostArgs = {
  input: DeletePostInput;
};

export type MutationDeletePostsArgs = {
  input: DeletePostsInput;
};

export type MutationDeleteShareArgs = {
  input: DeleteSharePostInput;
};

export type MutationFollowCreatorArgs = {
  input: FollowCreatorInput;
};

export type MutationLikePostArgs = {
  input: LikePostInput;
};

export type MutationRestrictFanArgs = {
  input: RestrictFanInput;
};

export type MutationSavePostArgs = {
  input: SavePostInput;
};

export type MutationSendMessageFromCreatorArgs = {
  input: SendMessageFromCreatorInput;
};

export type MutationSendMessageFromFanArgs = {
  input: SendMessageFromFanInput;
};

export type MutationSendOrDeleteMessageReactionArgs = {
  input: SendReactionInput;
};

export type MutationSendReplyFromCreatorArgs = {
  input: SendMessageFromCreatorInput;
};

export type MutationSendReplyFromFanArgs = {
  input: SendMessageFromFanInput;
};

export type MutationSharePostArgs = {
  input: LikePostInput;
};

export type MutationUnBlockFanArgs = {
  input: BlockFanInput;
};

export type MutationUnFollowCreatorArgs = {
  input: UnFollowCreatorInput;
};

export type MutationUnRestrictFanArgs = {
  input: RestrictFanInput;
};

export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};

export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};

export type MutationUpdateCreatorProfileArgs = {
  input: UpdateCreatorProfileInput;
};

export type MutationUpdateFanProfileArgs = {
  input: UpdateUserProfileInput;
};

export type MutationUpdateMessageArgs = {
  input: UpdateMessageInput;
};

export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  postTypes?: InputMaybe<Array<PostTypes>>;
  relatedEntityId?: InputMaybe<Scalars['ID']['input']>;
  relatedUserId?: InputMaybe<Scalars['ID']['input']>;
};

export type PaymentsEntity = {
  __typename?: 'PaymentsEntity';
  amountInCents: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  currency: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  relatedEntityId: Scalars['String']['output'];
  status: Scalars['String']['output'];
  stripePaymentId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostAssetsEntity = {
  __typename?: 'PostAssetsEntity';
  asset: AssetsEntity;
  assetId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostCommentsEntity = {
  __typename?: 'PostCommentsEntity';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PostLikesEntity = {
  __typename?: 'PostLikesEntity';
  createdAt: Scalars['DateTime']['output'];
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
};

export type PostPurchasesEntity = {
  __typename?: 'PostPurchasesEntity';
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
  purchasedAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type PostSavesEntity = {
  __typename?: 'PostSavesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
};

export type PostSharesEntity = {
  __typename?: 'PostSharesEntity';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  post: PostsEntity;
  postId: Scalars['String']['output'];
};

export enum PostTypes {
  Archived = 'ARCHIVED',
  Banned = 'BANNED',
  Exclusive = 'EXCLUSIVE',
  Hidden = 'HIDDEN',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type PostsEntity = {
  __typename?: 'PostsEntity';
  caption?: Maybe<Scalars['String']['output']>;
  commentCount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  lastCommentId?: Maybe<Scalars['String']['output']>;
  latestComment?: Maybe<PostCommentsEntity>;
  likeCount: Scalars['Float']['output'];
  postAssets: Array<PostAssetsEntity>;
  postComments: Array<PostCommentsEntity>;
  postLikes: Array<PostLikesEntity>;
  postPurchases: Array<PostPurchasesEntity>;
  postSaves: Array<PostSavesEntity>;
  postShares: Array<PostSharesEntity>;
  postUnlocks: Array<PremiumPostUnlocksEntity>;
  saveCount: Scalars['Float']['output'];
  shareCount: Scalars['Float']['output'];
  totalEarning: Scalars['Float']['output'];
  types: Array<PostTypes>;
  unlockPrice?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PremiumPostUnlocksEntity = {
  __typename?: 'PremiumPostUnlocksEntity';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  fanId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllComments: Array<GetCommentsOutput>;
  getBlockedUsers: Array<CreatorBlocksEntity>;
  getChannel: GetChannelOutput;
  getChannelMessages: Array<MessagesEntity>;
  getChannels: Array<GetChannelsOutput>;
  getCreatorAssets: Array<CreatorAssetsEntity>;
  getCreatorProfile: CreatorProfilesEntity;
  getFanProfile: FanProfilesEntity;
  getFollowers: Array<CreatorFollowsEntity>;
  getFollowing: Array<CreatorFollowsEntity>;
  getPost: PostsEntity;
  getPostCommentsByPostId: Array<GetCommentsOutput>;
  getPosts: Array<PostsEntity>;
  getPostsInfo: Array<GetPostsInfoOutput>;
  getRestrictedUsers: Array<GetRestrictedUsersOutput>;
  initiate: Scalars['String']['output'];
};

export type QueryGetAllCommentsArgs = {
  input: PaginationInput;
};

export type QueryGetBlockedUsersArgs = {
  input: PaginationInput;
};

export type QueryGetChannelArgs = {
  input: GetChannelInput;
};

export type QueryGetChannelMessagesArgs = {
  input: PaginationInput;
};

export type QueryGetChannelsArgs = {
  input: PaginationInput;
};

export type QueryGetCreatorAssetsArgs = {
  input: PaginationInput;
};

export type QueryGetFollowersArgs = {
  input: PaginationInput;
};

export type QueryGetFollowingArgs = {
  input: PaginationInput;
};

export type QueryGetPostArgs = {
  input: PaginationInput;
};

export type QueryGetPostCommentsByPostIdArgs = {
  input: PaginationInput;
};

export type QueryGetPostsArgs = {
  input: PaginationInput;
};

export type QueryGetPostsInfoArgs = {
  input: PaginationInput;
};

export type QueryGetRestrictedUsersArgs = {
  input: PaginationInput;
};

export type QueryInitiateArgs = {
  input: CreateScrapeInput;
};

export type RestrictFanInput = {
  fanId: Scalars['String']['input'];
};

export type SavePostInput = {
  postId: Scalars['String']['input'];
};

export type SendMessageFromCreatorInput = {
  assetIds: Array<Scalars['ID']['input']>;
  content: Scalars['String']['input'];
  isExclusive?: Scalars['Boolean']['input'];
  messageId?: InputMaybe<Scalars['String']['input']>;
  recipientUserId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
  unlockAmount: Scalars['Int']['input'];
};

export type SendMessageFromFanInput = {
  content: Scalars['String']['input'];
  messageId?: InputMaybe<Scalars['String']['input']>;
  recipientUserId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
};

export type SendReactionInput = {
  messageId: Scalars['String']['input'];
  reaction: Scalars['String']['input'];
};

export type SocialAccountsEntity = {
  __typename?: 'SocialAccountsEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  faceBook?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type SubscriptionPlansEntity = {
  __typename?: 'SubscriptionPlansEntity';
  bannerUrl: Scalars['String']['output'];
  creatorId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  subscribedAt: Scalars['DateTime']['output'];
  subscription: SubscriptionsEntity;
  syncedAt: Scalars['DateTime']['output'];
  tier: Scalars['String']['output'];
};

export type SubscriptionsEntity = {
  __typename?: 'SubscriptionsEntity';
  createdAt: Scalars['DateTime']['output'];
  creatorId: Scalars['String']['output'];
  creatorPaymentProfile: CreatorPaymentProfilesEntity;
  creatorPaymentProfileId: Scalars['String']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanId: Scalars['String']['output'];
  fanProfile: FanProfilesEntity;
  id: Scalars['String']['output'];
  months: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  stripeSubscriptionId: Scalars['String']['output'];
  subscriptionPlan: SubscriptionPlansEntity;
  subscriptionPlanId: Scalars['String']['output'];
  syncedAt: Scalars['DateTime']['output'];
};

export type UnFollowCreatorInput = {
  creatorId: Scalars['String']['input'];
};

export type UpdateChannelInput = {
  channelId: Scalars['String']['input'];
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  isMessagingBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  isMuted?: InputMaybe<Scalars['Boolean']['input']>;
  isRestricted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCommentInput = {
  comment: Scalars['String']['input'];
  commentId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type UpdateCreatorProfileInput = {
  allowsComment?: InputMaybe<Scalars['Boolean']['input']>;
  allowsMessaging?: InputMaybe<Scalars['Boolean']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bannerUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  displayOnlineStatus?: InputMaybe<Scalars['Boolean']['input']>;
  displayTotalPost?: InputMaybe<Scalars['Boolean']['input']>;
  displayTotalSubscriber?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMessageInput = {
  content: Scalars['String']['input'];
  messageId: Scalars['String']['input'];
};

export type UpdatePostInput = {
  caption?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
  types?: Array<PostTypes>;
  unlockPrice?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserProfileInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bannerUrl?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRoles {
  Admin = 'ADMIN',
  Creator = 'CREATOR',
  Fan = 'FAN',
  SuperViewer = 'SUPER_VIEWER'
}

export type UsersEntity = {
  __typename?: 'UsersEntity';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  bannerUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  creatorProfile: CreatorProfilesEntity;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fanProfile: FanProfilesEntity;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastLoginAt?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  roles: Array<UserRoles>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};
