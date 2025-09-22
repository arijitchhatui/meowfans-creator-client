'use client';

import { UPLOAD_TO_VAULT_MUTATION } from '@/packages/gql/api/vaultsAPI';
import { Div } from '@/wrappers/HTMLWrappers';
import { useMutation } from '@apollo/client/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { LoadingButton } from '../LoadingButton';
import { Button } from '../ui/button';
import { Modal } from './Modal';

interface Props {
  onJobAdded: () => unknown;
  onCancel: () => unknown;
  vaultObjectIds: string[];
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UploadToVaultModal: React.FC<Props> = ({ isOpen, setOpen, vaultObjectIds, onCancel, onJobAdded }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadVaults] = useMutation(UPLOAD_TO_VAULT_MUTATION);

  const handleClose = () => {
    setOpen(false);
    onCancel();
  };

  const handleUploadToVault = async () => {
    if (!vaultObjectIds.length) return;
    setLoading(true);
    try {
      await uploadVaults({
        variables: {
          input: {
            vaultObjectIds
          }
        }
      });
      onJobAdded();
      toast.success('Added to queue');
    } catch (error) {
      toast.error('Something wrong happened!');
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      title={`Upload ${vaultObjectIds.length} objects to queue for processing`}
      description={'Jobs are to be added, come back after a while'}
    >
      <Div className="flex flex-col justify-between">
        <Div className="flex flex-row justify-between">
          <Button onClick={handleClose} variant={'default'} size={'lg'}>
            Cancel
          </Button>
          <LoadingButton onClick={handleUploadToVault} size="lg" title="Upload" loading={loading} />
        </Div>
      </Div>
    </Modal>
  );
};
