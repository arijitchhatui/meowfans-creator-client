import { UploadAssetsModal } from '@/components/modals/UploadAssetsModal';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { AssetsEntity, GetCreatorAssetsQuery } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import moment from 'moment';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  assets?: GetCreatorAssetsQuery;
  onUpload: () => unknown;
}

export const AssetsThread: React.FC<Props> = ({ assets, onUpload }) => {
  const [selectedAsset, setSelectedAsset] = useState<Partial<AssetsEntity> | null>(null);
  return (
    <Div className="flex flex-row justify-between gap-1 m-1 ">
      <ScrollArea className={cn('h-[calc(100vh-136px)]', selectedAsset ? 'w-full md:w-[60%]' : 'w-full')}>
        <div className={cn('grid gap-4 grid-cols-2', selectedAsset ? 'md:grid-cols-4' : 'md:grid-cols-5')}>
          {assets?.getCreatorAssets.map(({ asset }, index) => (
            <div key={index}>
              <Image
                onClick={() => setSelectedAsset(asset)}
                src={asset.rawUrl}
                className={cn('cursor-pointer rounded-lg object-cover object-center h-70 w-70', selectedAsset ? 'md:h-50 md:w-50' : '')}
                alt="gallery-image"
                width={300}
                height={400}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </ScrollArea>
      {selectedAsset && selectedAsset.rawUrl && (
        <Card className="h-fit hidden md:flex">
          <CardContent className="w-full h-full">
            <Image
              className="h-90 w-90 max-w-full rounded-lg object-cover object-center"
              src={selectedAsset.rawUrl}
              alt="preview"
              width={360}
              height={360}
              loading="lazy"
              style={{ minHeight: 360, minWidth: 360 }}
            />
          </CardContent>
          <CardFooter className="flex flex-col">
            <Div className="grid grid-cols-2 w-full">
              <p className="flex text-left">{selectedAsset.fileType}</p>
              <p className="flex text-right">{selectedAsset.mediaType}</p>
            </Div>
            <p className="text-right">{moment(selectedAsset.createdAt).format('LT L')}</p>
          </CardFooter>
        </Card>
      )}
      <UploadAssetsModal onUpload={onUpload} />
    </Div>
  );
};
