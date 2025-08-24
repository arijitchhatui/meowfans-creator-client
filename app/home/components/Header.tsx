import { ApplyHomeContentFilter } from '@/components/modals/ApplyHomeContentFilter';
import { Modal } from '@/components/modals/Modal';
import { TriggerModal } from '@/components/modals/TriggerModal';
import { Div, Typography } from '@/wrappers/HTMLWrappers';
import { FunnelPlus, House } from 'lucide-react';
import { useState } from 'react';

export const HomeHeader = () => {
  const [modal, setModal] = useState<boolean | null>(null);
  return (
    <Div className="flex flex-row bg-gray-100 dark:bg-black w-full justify-between rounded-xl">
      <Div className="flex flex-col justify-between m-1">
        <Typography className="font-extrabold text-xl md:text-2xl ml-3 flex flex-row items-center">
          <House />
          Home
        </Typography>
        <Typography className="font-bold text-xs md:text-xl ml-3.5">Discover new images and creators today.</Typography>
      </Div>
      <TriggerModal onChangeModalState={setModal} modalIcon={{ icon: FunnelPlus }} modalText={'Filters'} />
      <Modal
        isOpen={!!modal}
        onClose={() => setModal(false)}
        title={'Apply filters'}
        description={'Personalize contents based on your preference'}
      >
        <ApplyHomeContentFilter />
      </Modal>
    </Div>
  );
};
