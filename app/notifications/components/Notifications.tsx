import { AppHeader } from '@/components/AppHeader';
import { Footer } from '@/components/Footer';
import { NotificationsHeader } from './Header';
import { NotificationThreads } from './Thread';

const buttonProps = [
  { variant: 'outline' as const, title: 'Read All' },
  { variant: 'outline' as const, title: 'Delete All' }
];

export const Notifications = () => {
  return (
    <div className="w-full">
      <AppHeader headerProps={buttonProps} />
      <NotificationsHeader />
      <NotificationThreads />
      <Footer />
    </div>
  );
};
