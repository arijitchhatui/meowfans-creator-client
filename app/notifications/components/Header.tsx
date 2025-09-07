import { ApplyNotificationContentFilterModal } from '@/components/modals/ApplyNotificationContentFilterModal';
import { TriggerModal } from '@/components/modals/TriggerModal';
import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { Bell, Funnel } from 'lucide-react';
import { useState } from 'react';

export const NotificationsHeader = () => {
  const [contentFilterOpen, setContentFilterOpen] = useState<boolean>(false);
  return (
    <Div className="mb-1 px-1 mt-1 sticky top-0 flex flex-row md:flex-row justify-between bg-gray-100 dark:bg-black w-full rounded-2xl">
      <Div className="flex flex-col justify-between m-1">
        <Typography className="font-extrabold text-xl md:text-2xl ml-3 flex flex-row items-center">
          <Bell />
          Notifications
        </Typography>
        <Typography className="font-bold text-xs md:text-xl ml-3.5">Be updated all the time</Typography>
      </Div>
      <TriggerModal onChangeModalState={setContentFilterOpen} modalIcon={{ icon: Funnel }} />
      <ApplyNotificationContentFilterModal open={contentFilterOpen} setOpen={setContentFilterOpen} />
    </Div>
  );
};
