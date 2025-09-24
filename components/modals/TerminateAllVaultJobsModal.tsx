'use client';

import { TERMINATE_ALL_JOBS_MUTATION } from '@/packages/gql/api/vaultsAPI';
import { Div } from '@/wrappers/HTMLWrappers';
import { useVaultsStore } from '@/zustand/vaults.store';
import { useMutation } from '@apollo/client/react';
import { BotOff } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { LoadingButton } from '../LoadingButton';
import { Button } from '../ui/button';
import { Modal } from './Modal';

export const TerminateAllVaultJobsModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { openSettingsModal, setOpenSettingsModal } = useVaultsStore();

  const [terminateAllJobs] = useMutation(TERMINATE_ALL_JOBS_MUTATION);

  const handleTerminate = async () => {
    setLoading(true);
    try {
      await terminateAllJobs();
      toast.success('All jobs terminated!');
    } catch {
      toast.error('Something wrong happened!');
    } finally {
      setLoading(false);
      setOpenSettingsModal(false);
    }
  };

  return (
    <Modal
      isOpen={openSettingsModal}
      onClose={() => setOpenSettingsModal(false)}
      description="Are you sure you want to terminate all jobs?"
      title="Terminate all jobs"
    >
      <Div className="w-full flex flex-row justify-between">
        <Button variant={'secondary'} onClick={() => setOpenSettingsModal(false)}>
          Cancel
        </Button>
        <LoadingButton Icon={BotOff} loading={loading} destructive  title="Terminate" onClick={handleTerminate} />
      </Div>
    </Modal>
  );
};
