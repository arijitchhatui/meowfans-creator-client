import { LoadingButton } from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GET_CREATOR_VAULT_OBJECTS_QUERY, UPLOAD_TO_VAULT_MUTATION } from '@/packages/gql/api/vaultsAPI';
import { DownloadStates } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import { useMutation, useQuery } from '@apollo/client/react';
import { Download, LucideLassoSelect, RefreshCcw } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { VaultUrls } from './VaultUrls';

export const Vaults = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedUrls, setSelectedUrls] = useState<string[]>([]);
  const [hasSelectedThirty, setHasSelectedThirty] = useState<boolean>(false);
  const { data, refetch, fetchMore } = useQuery(GET_CREATOR_VAULT_OBJECTS_QUERY, {
    variables: { input: { limit: 30, offset: 0 } }
  });

  const [uploadVaults] = useMutation(UPLOAD_TO_VAULT_MUTATION);

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
            .filter((vault) => vault.status !== DownloadStates.Fulfilled)
            .map((v) => v.id)
            .slice(0, 30) ?? []
        : []
    );
  };

  const handleUploadToVault = async (vaultObjectIds: string[]) => {
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
      toast.success('Added to queue');
    } catch (error) {
      toast.error('Something wrong happened!');
    } finally {
      setLoading(false);
    }
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
          <Button
            variant="outline"
            className="ml-auto"
            onClick={() => handleSelectThirty(true)}
          >
            Select(30)
            <LucideLassoSelect />
          </Button>
        )}
        <Div className="flex flex-row space-x-2">
          <LoadingButton
            variant="outline"
            className="ml-auto animate-bounce"
            onClick={() => handleUploadToVault(selectedUrls)}
            disabled={!selectedUrls.length}
            title={selectedUrls.length.toString()}
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
              <VaultUrls
                idx={idx}
                isLoading={loading}
                onToggle={(id) => handleToggle(id)}
                onUploadToVault={(ids) => handleUploadToVault(ids)}
                selectedUrls={selectedUrls}
                vault={vault}
              />
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
    </Div>
  );
};
