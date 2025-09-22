import { LoadingButton } from '@/components/LoadingButton';
import { UploadToVaultModal } from '@/components/modals/UploadtoVaultModal';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GET_CREATOR_VAULT_OBJECTS_QUERY } from '@/packages/gql/api/vaultsAPI';
import { DownloadStates } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import { useQuery } from '@apollo/client/react';
import { Download, LucideLassoSelect, RefreshCcw } from 'lucide-react';
import { useState } from 'react';
import { VaultUrls } from './VaultUrls';

export const Vaults = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedUrls, setSelectedUrls] = useState<string[]>([]);
  const [hasSelectedThirty, setHasSelectedThirty] = useState<boolean>(false);
  const [uploadVaultModal, setUploadVaultModal] = useState<boolean>(false);
  const canNotDownload = DownloadStates.Fulfilled || DownloadStates.Processing;

  const { data, refetch, fetchMore } = useQuery(GET_CREATOR_VAULT_OBJECTS_QUERY, {
    variables: { input: { limit: 30, offset: 0 } }
  });

  const handleRefetch = async () => {
    await refetch();
  };

  const handleFetchMore = async () => {
    await fetchMore({
      variables: { input: { offset: data?.getCreatorVaultObjects.length, limit: 30 } },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => ({
        getCreatorVaultObjects: [...previousQueryResult.getCreatorVaultObjects, ...fetchMoreResult.getCreatorVaultObjects]
      })
    });
  };

  const handleToggle = (id: string) => {
    setSelectedUrls((prev) => {
      const hasSelected = prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id];
      return hasSelected;
    });
  };

  const handleSelectThirty = async (hasSelected: boolean) => {
    setHasSelectedThirty(hasSelected);
    setSelectedUrls(
      !hasSelectedThirty
        ? data?.getCreatorVaultObjects
            .filter((vault) => vault.status !== canNotDownload)
            .map((v) => v.id)
            .slice(0, 30) ?? []
        : []
    );
  };

  return (
    <Div className="w-full">
      <Div className="flex items-center justify-between py-4 space-x-1">
        {hasSelectedThirty ? (
          <Button
            variant="outline"
            className="ml-auto transition-all duration-300 ease-in-out animate-slide-up"
            onClick={() => handleSelectThirty(false)}
          >
            Deselect all
          </Button>
        ) : (
          <Button variant="outline" className="ml-auto" onClick={() => handleSelectThirty(true)}>
            Select(30)
            <LucideLassoSelect />
          </Button>
        )}
        <Div className="flex flex-row space-x-2">
          <LoadingButton
            variant="outline"
            className="ml-auto animate-bounce"
            onClick={() => setUploadVaultModal(true)}
            disabled={!selectedUrls.length}
            title={String(selectedUrls.length)}
            Icon={Download}
            loading={loading}
          />
          <Button variant="outline" className="ml-auto" onClick={handleRefetch}>
            <RefreshCcw />
          </Button>
        </Div>
      </Div>
      {data?.getCreatorVaultObjects.length ? (
        <ScrollArea className="overflow-y-auto h-[calc(100vh-140px)] w-full p-1">
          {data?.getCreatorVaultObjects.map((vault, idx) => (
            <Div key={idx} className="flex flex-col rounded-md border my-1 p-2">
              <VaultUrls idx={idx} isLoading={loading} onToggle={(id) => handleToggle(id)} selectedUrls={selectedUrls} vault={vault} />
            </Div>
          ))}
          <Div className="flex items-center justify-center space-x-2">
            <Div className="space-x-2">
              <Button variant="outline" size="sm" onClick={handleFetchMore}>
                Next
              </Button>
            </Div>
          </Div>
        </ScrollArea>
      ) : (
        <Div className="text-center">
          <p>Looks like there is nothing here</p>
        </Div>
      )}
      <UploadToVaultModal
        onJobAdded={handleRefetch}
        isOpen={uploadVaultModal}
        onCancel={() => setSelectedUrls([])}
        setOpen={setUploadVaultModal}
        vaultObjectIds={selectedUrls}
      />
    </Div>
  );
};
