'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface Props {
  url: string;
  className?: string;
  fallback?: string;
}

export const SAvatar: React.FC<Props> = ({ url, fallback, className }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={url || 'https://github.com/evilrabbit.png'} alt="@evilrabbit" />
      <AvatarFallback>{fallback || 'ER'}</AvatarFallback>
    </Avatar>
  );
};
