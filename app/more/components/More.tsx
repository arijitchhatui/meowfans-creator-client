import { DeleteAllAssetsModal } from '@/components/modals/DeleteAllAssetsModal';
import { TerminateAccountModal } from '@/components/modals/TerminateAccountModal';
import { Separator } from '@/components/ui/separator';
import { Div } from '@/wrappers/HTMLWrappers';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { Bell, Settings, Star, Sun } from 'lucide-react';
import { useState } from 'react';
import { Account } from './Account';
import { Display } from './Display';
import { Featured } from './Featured';
import { Footer } from './Footer';
import { Header } from './Header';
import Logout from './Logout';
import { Notifications } from './Notifications';
import { QuickActions } from './QuickActions';
import TerminateAccount from './TerminateAccount';

export type Feature = {
  id: string;
  title: string;
  desc: string;
  featured?: boolean;
  icon?: React.ReactNode;
};

const features: Feature[] = [
  { id: 'privacy', title: 'Privacy Hub', desc: 'Manage who sees your profile and assets.', featured: true, icon: <Settings size={18} /> },
  { id: 'theme', title: 'Appearance', desc: 'Light, dark or system theme controls.', featured: true, icon: <Sun size={18} /> },
  { id: 'notifications', title: 'Notifications', desc: 'Control push and email notifications.', icon: <Bell size={18} /> },
  { id: 'rewards', title: 'Rewards', desc: 'View badges, achievements and perks.', icon: <Star size={18} /> }
];

export const More = () => {
  const [terminateAccountModal, setTerminateAccountModal] = useState<boolean>(false);
  const [deleteAllAssetsModal, setDeleteAllAssetsModal] = useState<boolean>(false);

  return (
    <PageWrapper>
      <Div className="min-h-screen bg-surface-50 p-6 md:p-10 lg:p-16">
        <Div className="max-w-7xl mx-auto space-y-1">
          <Header />
          <Separator />
          <Account />
          <QuickActions setDeleteAllAssetsModal={setDeleteAllAssetsModal} />
          <Display />
          <Featured features={features} />
          <Notifications />
          <TerminateAccount setTerminateAccountModal={setTerminateAccountModal} />
          <Logout />
          <Separator />
          <Footer />
        </Div>
      </Div>
      <DeleteAllAssetsModal isOpen={deleteAllAssetsModal} setOpen={setDeleteAllAssetsModal} />
      <TerminateAccountModal setOpen={setTerminateAccountModal} isOpen={terminateAccountModal} />
    </PageWrapper>
  );
};
