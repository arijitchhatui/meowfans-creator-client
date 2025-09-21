import { LoadingButton } from '@/components/LoadingButton';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DownloadStates, VaultsEntity } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import { Download } from 'lucide-react';
import moment from 'moment';

interface Props {
  idx: number;
  vault: VaultsEntity;
  selectedUrls: string[];
  onToggle: (url: string) => unknown;
  onUploadToVault: (urls: string[]) => unknown;
  isLoading: boolean;
}

export const VaultUrls: React.FC<Props> = ({ idx, vault, selectedUrls, onToggle, isLoading, onUploadToVault }) => {
  return (
    <>
      <Div className="flex flex-row justify-between">
        <Badge variant="secondary">{idx + 1}</Badge>
        <Div className="items-center content-center  flex flex-row space-x-1">
          {vault.status === DownloadStates.Pending ? (
            <Badge variant="secondary" className="animate-pulse">
              {vault.status}
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
              {vault.status}
            </Badge>
          )}
          {vault.status === DownloadStates.Pending && (
            <Checkbox
              checked={selectedUrls.includes(vault.url)}
              onCheckedChange={() => onToggle(vault.url)}
              disabled={selectedUrls.length >= 30}
            />
          )}
        </Div>
      </Div>
      <Div className="max-w-sm p-2">{<p className="break-all">{vault.url.substring(101)}</p>}</Div>
      <Div className="flex flex-row justify-between">
        <p className="text-xs">{moment(vault.createdAt).format('LT L')}</p>
        {vault.status === DownloadStates.Pending && (
          <LoadingButton
            size="icon"
            variant={'outline'}
            className="cursor-pointer"
            onClick={() => onUploadToVault([vault.url])}
            Icon={Download}
            loading={isLoading}
          />
        )}
      </Div>
    </>
  );
};
