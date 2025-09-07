import { ApplyNotificationContentFilter } from '@/components/modals/ApplyNotificationContentFilter';
import { Modal } from '@/components/modals/Modal';
import { TriggerModal } from '@/components/modals/TriggerModal';
import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { Bell, Funnel } from 'lucide-react';
import { useState } from 'react';

export const NotificationsHeader = () => {
  const [modal, setModal] = useState<boolean | null>(null);
  return (
    <Div className="mb-1 px-1 mt-1 sticky top-0 flex flex-row md:flex-row justify-between bg-gray-100 dark:bg-black w-full rounded-2xl">
      <Div className="flex flex-col justify-between m-1">
        <Typography className="font-extrabold text-xl md:text-2xl ml-3 flex flex-row items-center">
          <Bell />
          Notifications
        </Typography>
        <Typography className="font-bold text-xs md:text-xl ml-3.5">Be updated all the time</Typography>
      </Div>
      <TriggerModal onChangeModalState={setModal} modalIcon={{ icon: Funnel }} />
      <Modal
        isOpen={!!modal}
        onClose={() => setModal(false)}
        title={'Apply Filter'}
        description={'Find comments based on your personalization'}
      >
        <ApplyNotificationContentFilter />
      </Modal>
    </Div>
  );
};
