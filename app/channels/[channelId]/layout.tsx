import React from 'react';

interface Props {
  children: React.ReactNode;
  params: Promise<{ channelId: string }>;
}

export default async function ChannelThreadLayout({ children, params }: Props) {
  const { channelId } = await params;
  return <>{children}</>;
}
