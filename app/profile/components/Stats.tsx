'use client';

import { Div, Span } from '@/wrappers/HTMLWrappers';

export const Stats = () => {
  return (
    <Div className="grid grid-cols-5 gap-3 text-center">
      <Div>
        <Span className="text-xl font-bold">120.5K</Span>
        <p className="text-sm text-muted-foreground">Likes</p>
      </Div>
      <Div>
        <Span className="text-xl font-bold">39.5K</Span>
        <p className="text-sm text-muted-foreground">Followers</p>
      </Div>
      <Div>
        <Span className="text-xl font-bold">254</Span>
        <p className="text-sm text-muted-foreground">Posts</p>
      </Div>
      <Div>
        <Span className="text-xl font-bold">254</Span>
        <p className="text-sm text-muted-foreground">Subscribers</p>
      </Div>
      <Div>
        <Span className="text-xl font-bold">254</Span>
        <p className="text-sm text-muted-foreground">Posts</p>
      </Div>
    </Div>
  );
};
