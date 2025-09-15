'use client';

import { GetCreatorProfileQuery } from '@/packages/gql/generated/graphql';
import { Div, Span } from '@/wrappers/HTMLWrappers';

interface Props {
  creatorInfo?: GetCreatorProfileQuery;
}

export const Stats: React.FC<Props> = ({ creatorInfo }) => {
  return (
    <Div className="grid grid-cols-5 gap-3 text-center">
      <Div>
        <Span className="text-xl font-bold">120.5K</Span>
        <p className="text-sm text-muted-foreground">Likes</p>
      </Div>
      <Div>
        <Span className="text-xl font-bold">{creatorInfo?.getCreatorProfile.totalSubscriber}</Span>
        <p className="text-sm text-muted-foreground">Followers</p>
      </Div>
      <Div>
        <Span className="text-xl font-bold">{creatorInfo?.getCreatorProfile.totalPost}</Span>
        <p className="text-sm text-muted-foreground">Posts</p>
      </Div>
      <Div>
        <Span className="text-xl font-bold">{creatorInfo?.getCreatorProfile.totalPublicPost}</Span>
        <p className="text-sm text-muted-foreground">Subscribers</p>
      </Div>
      <Div>
        <Span className="text-xl font-bold">{creatorInfo?.getCreatorProfile.totalExclusivePost}</Span>
        <p className="text-sm text-muted-foreground">Exclusive</p>
      </Div>
    </Div>
  );
};
