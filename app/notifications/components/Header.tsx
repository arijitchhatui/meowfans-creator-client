import { Bell } from "lucide-react";

export const NotificationsHeader = () => {
  const notificationFilters = [{ title: 'All' }, { title: 'Purchases' }, { title: 'Earnings' }, { title: 'Followers' }];
  return (
    <div className="mb-1 px-1 mt-1 sticky top-15 flex flex-col md:flex-row  justify-between bg-gray-100 w-full rounded-2xl">
       <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5" /> Notifications
      </h2>
      <div className="flex flex-wrap gap-3">
        {notificationFilters.map((_filter) => (
          <div key={_filter.title} className="px-4 py-2 rounded-full bg-indigo-50 font-medium shadow cursor-pointer hover:bg-indigo-200">
            {_filter.title}
          </div>
        ))}
      </div>
    </div>
  );
};
