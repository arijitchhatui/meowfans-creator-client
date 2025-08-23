'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { ChannelList } from './ChannelList';
import { ChannelHeader } from './Header';
import { NoChatSelected } from './NoChatSelected';
import { useState } from 'react';
import { Background } from '@/components/ApplyShadcnBackground';
export interface Channel {
  id: string;
  name: string;
  path: string;
  description?: string;
  members: number;
  isPrivate: boolean;
  lastMessage?: {
    text: string;
    timestamp: string;
    sender: string;
  };
}

export const demoChannels: Channel[] = [
  {
    id: 'general',
    path: '/channels',
    name: 'General',
    description: 'General discussions, announcements, and casual talks.',
    members: 128,
    isPrivate: false,
    lastMessage: {
      text: 'Welcome to the General channel!',
      timestamp: '2025-08-20T10:32:00Z',
      sender: 'Admin'
    }
  },
  {
    id: 'dev-team',
    path: '/channels',
    name: 'Development Team',
    description: 'Code discussions, commits, and tech updates.',
    members: 12,
    isPrivate: true,
    lastMessage: {
      text: 'Pushed the latest feature to GitHub 🚀',
      timestamp: '2025-08-20T09:45:00Z',
      sender: 'Alice'
    }
  },
  {
    id: 'design',
    path: '/channels',
    name: 'Design',
    description: 'UI/UX, wireframes, and assets discussions.',
    members: 8,
    isPrivate: false,
    lastMessage: {
      text: 'Updated the Figma board with new mockups 🎨',
      timestamp: '2025-08-19T17:20:00Z',
      sender: 'Bob'
    }
  },
  {
    id: 'random',
    path: '/channels',
    name: 'Random',
    description: 'Memes, jokes, and off-topic fun.',
    members: 42,
    isPrivate: false,
    lastMessage: {
      text: 'Did you see the new meme I posted? 😂',
      timestamp: '2025-08-20T08:00:00Z',
      sender: 'Charlie'
    }
  },
  {
    id: 'support',
    path: '/channels',
    name: 'Support',
    description: 'Ask questions, get help, and troubleshoot issues.',
    members: 25,
    isPrivate: false,
    lastMessage: {
      text: 'Issue resolved! Thanks for the quick fix 🙌',
      timestamp: '2025-08-19T22:10:00Z',
      sender: 'Diana'
    }
  }
];

export const Channels = () => {
  const [animatedBg, setAnimatedBg] = useState<Background | null>(null)
  const isMobile = useIsMobile();
  return (
    <PageWrapper>
      <ChannelHeader setAnimatedBg={setAnimatedBg} />
      {!isMobile && <NoChatSelected background={animatedBg} />}
      {isMobile && <ChannelList channels={demoChannels} />}
    </PageWrapper>
  );
};
