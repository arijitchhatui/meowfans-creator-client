'use client';

import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import { JSX } from 'react';

type NotificationType = 'info' | 'success' | 'warning' | 'error';

const typeConfig: Record<NotificationType, { icon: JSX.Element; color: string }> = {
  info: { icon: <Info className="w-4 h-4 text-blue-500" />, color: 'bg-gray-300' },
  success: { icon: <CheckCircle className="w-4 h-4 text-green-500" />, color: 'bg-gray-300' },
  warning: { icon: <AlertCircle className="w-4 h-4 text-yellow-500" />, color: 'bg-gray-300' },
  error: { icon: <XCircle className="w-4 h-4 text-red-500" />, color: 'bg-gray-300' }
};

export const NotificationThreads = () => {
  const notifications = Array(15)
    .fill(0)
    .map((_, idx) => ({
      id: idx,
      fullName: idx % 2 === 0 ? 'Superman' : 'BatMan',
      title: idx % 2 === 0 ? 'Weekly Digest' : 'Security Alert',
      message: idx % 2 === 0 ? 'You gained 120 new followers this week 🎉' : 'You purchased a burger',
      type: (['info', 'success', 'warning', 'error'] as NotificationType[])[idx % 4],
      isRead: idx % 3 === 0 ? false : true,
      createdAt: '13:02'
    }));

  return (
    <div className="w-full">
      <div className="border rounded-2xl bg-neutral-50 overflow-y-auto p-3 space-y-1">
        {notifications.map((notification) => {
          const config = typeConfig[notification.type];
          return (
            <div
              key={notification.id}
              className={`flex flex-col p-3 rounded-2xl shadow-sm transition hover:shadow-md ${
                notification.isRead ? 'bg-white' : config.color
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {config.icon}
                  <p className={'font-bold'}>{notification.fullName}</p>
                </div>
                <span className="w-3 h-3 bg-indigo-500 rounded-full" />
              </div>

              <p className="text-lg font-semibold">{notification.message}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <span className="bg-white px-2 py-0.5 rounded-full">{notification.title}</span>
                <span>{notification.createdAt}</span>
              </div>

              <div className="flex gap-2 mt-2">
                <Button className="text-xs" variant={'outline'}>
                  Mark as Read
                </Button>
                <Button className="text-xs" variant={'default'}>
                  Dismiss
                </Button>
              </div>
            </div>
          );
        })}

        {notifications.length === 0 && <p className="text-center text-gray-500 py-4">No new notifications 🎉</p>}
      </div>
    </div>
  );
};
