import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { Bell } from 'lucide-react';

export const NotificationsHeader = () => {
  const notificationFilters = [{ title: 'All' }, { title: 'Purchases' }, { title: 'Earnings' }, { title: 'Followers' }];
  return (
    <Div className="mb-1 px-1 mt-1 sticky top-15 flex flex-col md:flex-row justify-between bg-gray-100 w-full rounded-2xl">
      <Div className="flex flex-col justify-between m-1">
        <Typography className="font-extrabold text-4xl ml-3 flex flex-row items-center">
          <Bell />
          Notifications
        </Typography>
        <Typography className="font-bold text-xl ml-3.5">Be updated all the time</Typography>
      </Div>
      <Div className="flex flex-wrap gap-3 h-fit">
        {notificationFilters.map((_filter) => (
          <Div key={_filter.title} className="px-4 py-2 rounded-full bg-indigo-50 font-medium shadow cursor-pointer hover:bg-indigo-200">
            {_filter.title}
          </Div>
        ))}
      </Div>
    </Div>
  );
};
