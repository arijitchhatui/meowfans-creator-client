'use client';

import { AssetOptionsMenu } from '@/app/assets/components/AssetOptionsMenu';
import { ImportSheet } from '@/app/vaults/components/ImportSheet';
import { useIsMobile } from '@/hooks/useMobile';
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
  Lasso,
  LassoSelect,
  Lock,
  MailPlus,
  Search,
  Settings,
  SunMoon,
  Trash,
  UploadCloud,
  UserX,
  X
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { ApplyButtonTooltip } from './ApplyTooltip';
import { TriggerModal } from './modals/TriggerModal';

export const ApplyHeaderOptions = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();
  const {
    setOpenUploadModal,
    setCanSelect,
    canSelect,
    setDeleteModal,
    selectedAssets,
    setSelectedAssets,
    setRangeSelection,
    rangeSelection,
    setOption
  } = useAssetsStore();
  const canCancel = canSelect || rangeSelection;

  switch (pathname) {
    case '/home':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Search" buttonProps={{ icon: Search }} />
          <ApplyButtonTooltip tootTipTitle="Notifications" buttonProps={{ icon: Bell }} />
          <ApplyButtonTooltip tootTipTitle="Settings" buttonProps={{ icon: Settings }} onClick={() => router.push('/more')} />
        </Div>
      );

    case '/profile':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Edit profile" buttonProps={{ icon: Edit }} />
          <ApplyButtonTooltip tootTipTitle="Images" buttonProps={{ icon: ImageIcon }} />
          <ApplyButtonTooltip tootTipTitle="Analytics" buttonProps={{ icon: BarChart3 }} />
          <ApplyButtonTooltip tootTipTitle="Settings" buttonProps={{ icon: Settings }} onClick={() => router.push('/more')} />
        </Div>
      );

    case '/assets':
      return (
        <Div className="flex flex-row items-center space-x-2">
          {canCancel && (
            <ApplyButtonTooltip
              tootTipTitle="Cancel"
              buttonProps={{ icon: X, size: 'icon' }}
              onClick={() => {
                setSelectedAssets([]);
                setCanSelect(false);
                setRangeSelection(false);
              }}
            />
          )}
          {!isMobile && (
            <>
              <TriggerModal
                applyTooltip={{ title: 'Delete assets' }}
                onChangeModalState={() => setDeleteModal(true)}
                modalIcon={{ icon: Trash, size: 'icon' }}
                className={selectedAssets.length ? 'bg-red-600' : ''}
                disabled={!selectedAssets.length}
              />
              <ApplyButtonTooltip
                tootTipTitle="Select"
                className={canSelect ? 'animate-pulse' : ''}
                buttonProps={{ icon: LassoSelect, variant: canSelect ? 'destructive' : 'default', size: 'icon' }}
                onClick={() => {
                  setSelectedAssets([]);
                  setCanSelect(!canSelect);
                  setRangeSelection(false)
                }}
              />
              <ApplyButtonTooltip
                tootTipTitle="Range selection"
                className={rangeSelection ? 'animate-pulse' : ''}
                buttonProps={{ icon: Lasso, variant: rangeSelection ? 'destructive' : 'default', size: 'icon' }}
                onClick={() => {
                  setSelectedAssets([]);
                  setCanSelect(true);
                  setRangeSelection(!rangeSelection);
                }}
              />
            </>
          )}
          <TriggerModal
            onChangeModalState={() => setOpenUploadModal(true)}
            modalIcon={{ icon: UploadCloud, size: 'icon' }}
            applyTooltip={{ title: 'Upload assets' }}
          />
          <AssetOptionsMenu />
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

    case '/vaults':
      return (
        <Div className="flex flex-row items-center space-x-2">
          <ImportSheet />
          <ApplyButtonTooltip tootTipTitle="Settings" buttonProps={{ icon: Settings }} onClick={() => router.push('/more')} />
        </Div>
      );

    default:
      return (
        <Div className="flex items-center space-x-2">
          <ApplyButtonTooltip tootTipTitle="Settings" buttonProps={{ icon: Settings }} onClick={() => router.push('/more')} />
        </Div>
      );
  }
};
