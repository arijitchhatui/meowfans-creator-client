'use client';

import { Div } from '@/wrappers/HTMLWrappers';
import { useAssetsStore } from '@/zustand/assets.store';
import {
  Archive,
  BarChart3,
  Bell,
  CreditCard,
  DollarSign,
  Edit,
  FileDown,
  FilePlus2,
  Filter,
  Image as ImageIcon,
  LassoSelect,
  Lock,
  MailPlus,
  Search,
  Settings,
  SunMoon,
  Trash,
  UploadCloud,
  UserX
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { ApplyButtonTooltip } from './ApplyTooltip';
import { TriggerModal } from './modals/TriggerModal';

export const ApplyHeaderOptions = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { setOpenUploadModal } = useAssetsStore();

  switch (pathname) {
    case '/home':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Search" buttonProps={{ icon: Search }} />
          <ApplyButtonTooltip tootTipTitle="Notifications" buttonProps={{ icon: Bell }} />
          <ApplyButtonTooltip tootTipTitle="Settings" buttonProps={{ icon: Settings }} onClick={() => router.push('/settings')} />
        </Div>
      );

    case '/profile':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Edit profile" buttonProps={{ icon: Edit }} />
          <ApplyButtonTooltip tootTipTitle="Images" buttonProps={{ icon: ImageIcon }} />
          <ApplyButtonTooltip tootTipTitle="Analytics" buttonProps={{ icon: BarChart3 }} />
          <ApplyButtonTooltip tootTipTitle="Settings" buttonProps={{ icon: Settings }} onClick={() => router.push('/settings')} />
        </Div>
      );

    case '/assets':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Delete" buttonProps={{ icon: Trash }} />
          <ApplyButtonTooltip tootTipTitle="Select" buttonProps={{ icon: LassoSelect }} />
          <TriggerModal
            onChangeModalState={() => setOpenUploadModal(true)}
            modalIcon={{ icon: UploadCloud }}
            applyTooltip={{ title: 'Upload assets' }}
          />
        </Div>
      );

    case '/more':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Settings" buttonProps={{ icon: Settings }} />
          <ApplyButtonTooltip tootTipTitle="Privacy & Security" buttonProps={{ icon: Lock }} />
          <ApplyButtonTooltip tootTipTitle="Payments" buttonProps={{ icon: CreditCard }} />
          <ApplyButtonTooltip tootTipTitle="Theme" buttonProps={{ icon: SunMoon }} />
        </Div>
      );

    case '/channels':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="New message" buttonProps={{ icon: MailPlus }} />
          <ApplyButtonTooltip tootTipTitle="Search chats" buttonProps={{ icon: Search }} />
          <ApplyButtonTooltip tootTipTitle="Archive" buttonProps={{ icon: Archive }} />
          <ApplyButtonTooltip tootTipTitle="Blocked users" buttonProps={{ icon: UserX }} />
        </Div>
      );

    case '/subscriptions':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="View plans" buttonProps={{ icon: FilePlus2 }} />
          <ApplyButtonTooltip tootTipTitle="Set pricing" buttonProps={{ icon: DollarSign }} />
          <ApplyButtonTooltip tootTipTitle="Add creator" buttonProps={{ icon: UserX }} />
        </Div>
      );

    case '/cards':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Add card" buttonProps={{ icon: CreditCard }} />
          <ApplyButtonTooltip tootTipTitle="Remove card" buttonProps={{ icon: Trash }} />
          <ApplyButtonTooltip tootTipTitle="Card settings" buttonProps={{ icon: Settings }} />
        </Div>
      );

    case '/analytics':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Filter" buttonProps={{ icon: Filter }} />
          <ApplyButtonTooltip tootTipTitle="Export" buttonProps={{ icon: FileDown }} />
          <ApplyButtonTooltip tootTipTitle="Search" buttonProps={{ icon: Search }} />
          <ApplyButtonTooltip tootTipTitle="Insights" buttonProps={{ icon: BarChart3 }} />
        </Div>
      );

    default:
      return (
        <Div className="flex items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Settings" buttonProps={{ icon: Settings }} onClick={() => router.push('/settings')} />
        </Div>
      );
  }
};
