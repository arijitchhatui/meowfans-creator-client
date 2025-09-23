import { LoadingButton } from '@/components/LoadingButton';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DownloadStates, VaultObjectsEntity } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import { Download } from 'lucide-react';
import moment from 'moment';

interface Props {
  idx: number;
  vault: VaultObjectsEntity;
  selectedUrls: string[];
  onToggle: (url: string) => unknown;
  isLoading: boolean;
}

export const VaultUrls: React.FC<Props> = ({ idx, vault, selectedUrls, onToggle, isLoading }) => {
  return (
    <>
      <Div className="flex flex-row justify-between">
        <Badge variant="secondary">{idx + 1}</Badge>
        <Div className="items-center content-center  flex flex-row space-x-1">
          {(() => {
            switch (vault.status) {
              case DownloadStates.Pending:
                return (
                  <Badge variant="secondary" className="animate-pulse">
                    Pending
                  </Badge>
                );

              case DownloadStates.Fulfilled:
                return (
                  <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
                    Fulfilled
                  </Badge>
                );

              case DownloadStates.Processing:
                return (
                  <Badge variant="secondary" className="bg-orange-500 text-white dark:bg-emerald-400">
                    Processing
                  </Badge>
                );

              case DownloadStates.Rejected:
                return <Badge variant="destructive">Failed</Badge>;
            }
          })()}

          {vault.status !== DownloadStates.Processing && vault.status !== DownloadStates.Fulfilled && (
            <Checkbox
              className="h-5 w-5"
              checked={selectedUrls.includes(vault.id)}
              onCheckedChange={() => onToggle(vault.id)}
              disabled={selectedUrls.length >= 30}
            />
          )}
        </Div>
      </Div>
      <Div className="max-w-sm p-2 text-xs">{<p className="break-all">{vault.objectUrl.slice(-46)}</p>}</Div>
      <Div className="flex flex-row justify-between">
        <p className="text-xs">{moment(vault.createdAt).format('LT L')}</p>
        {vault.status === DownloadStates.Processing && (
          <LoadingButton size="icon" variant={'outline'} className="cursor-pointer animate-bounce" Icon={Download} loading />
        )}
      </Div>
    </>
  );
};
