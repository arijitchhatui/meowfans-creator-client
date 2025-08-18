import { Footer } from '@/components/Footer';
import { NotificationsHeader } from './Header';
import { NotificationThreads } from './Thread';

export const Notifications = () => {
  return (
    <div className="w-full">
      <NotificationsHeader />
      <NotificationThreads />
      <Footer buttonTitles={['Load More']}/>
    </div>
  );
};
