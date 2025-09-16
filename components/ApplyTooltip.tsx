'use client';

import { buttonSize, buttonVariant } from '@/util/helpers';
import { Component, LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface Props {
  children: React.ReactNode;
  content: string;
}

export const ApplyTooltip: React.FC<Props> = ({ children, content }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
        </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );
};

interface TootTipProps {
  onClick?: () => unknown;
  buttonProps?: { icon: LucideIcon; size?: buttonSize; variant?: buttonVariant; buttonText?: string };
  tootTipTitle: string;
}

export const ApplyButtonTooltip: React.FC<TootTipProps> = ({
  onClick,
  buttonProps = { icon: Component, size: 'default', variant: 'default', buttonText: '' },
  tootTipTitle
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={buttonProps.variant} onClick={onClick} size={buttonProps.size}>
          {buttonProps && <buttonProps.icon className="" />}
          {buttonProps.buttonText}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tootTipTitle}</p>
      </TooltipContent>
    </Tooltip>
  );
};
