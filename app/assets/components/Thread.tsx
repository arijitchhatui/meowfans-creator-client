import { DeleteAssetsModal } from '@/components/modals/DeleteAssetsModal';
import { UploadAssetsModal } from '@/components/modals/UploadAssetsModal';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/useMobile';
import { cn } from '@/lib/utils';
import { CreatorAssetsEntity, GetCreatorAssetsQuery } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import { useAssetsStore } from '@/zustand/assets.store';
import { LassoIcon, Lock, X } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import { MouseEvent, useEffect, useState } from 'react';

interface Props {
  assets?: GetCreatorAssetsQuery;
  onUpload: () => unknown;
}

export const AssetsThread: React.FC<Props> = ({ assets, onUpload }) => {
  const { canSelect, selectedAssets, toggleSelect, rangeSelection } = useAssetsStore();
  const [preview, setPreview] = useState<CreatorAssetsEntity | null>(null);
  const isMobile = useIsMobile();

  const handleSelectRange = (fromId: string, toId: string) => {
    if (!assets?.getCreatorAssets) return;

    const fromIndex = assets.getCreatorAssets.findIndex((asset) => asset.assetId === fromId);
    const toIndex = assets.getCreatorAssets.findIndex((asset) => asset.assetId === toId);

    if (fromIndex === -1 || toIndex === -1) return;

    const [start, end] = fromIndex < toIndex ? [fromIndex, toIndex] : [toIndex, fromIndex];
    const rangeAssets = assets.getCreatorAssets.slice(start, end + 1);

    const rangeIds = rangeAssets.map((a) => a.assetId);

    useAssetsStore.setState((state) => ({
      selectedAssets: Array.from(new Set([...state.selectedAssets, ...rangeIds]))
    }));
  };

  const handleToggle = (assetId: string, e: MouseEvent, asset: CreatorAssetsEntity) => {
    e.stopPropagation();
    if (selectedAssets.includes(assetId)) toggleSelect(assetId);
    else if (rangeSelection && canSelect) {
      if (selectedAssets.length > 0) {
        const lastSelected = selectedAssets[selectedAssets.length - 1];
        handleSelectRange(lastSelected, assetId);
      } else {
        toggleSelect(assetId);
      }
    } else if (canSelect) {
      toggleSelect(assetId);
    } else {
      setPreview(asset);
    }
  };

  useEffect(() => {
    setPreview(null);
  }, [canSelect]);

  return (
    <Div className="flex flex-row justify-between gap-1 m-1 ">
      <ScrollArea className={cn('h-[calc(100vh-136px)]', preview ? 'w-full md:w-[60%]' : 'w-full')}>
        <div className={cn('grid gap-4 grid-cols-2', preview ? 'md:grid-cols-4' : 'md:grid-cols-5')}>
          {assets?.getCreatorAssets.map((creatorAsset) => (
            <div key={creatorAsset.id} className="relative flex">
              {canSelect && (
                <Div>
                  <Button
                    size="icon"
                    variant={selectedAssets.includes(creatorAsset.assetId) ? 'destructive' : 'default'}
                    className="absolute top-0 left-0"
                    onClick={(e) => handleToggle(creatorAsset.assetId, e, Object.assign(creatorAsset))}
                  >
                    <LassoIcon />
                  </Button>
                  <Button size="icon" variant="default" className="absolute top-0 right-0">
                    <Lock />
                  </Button>
                </Div>
              )}
              <Image
                onClick={(e) => handleToggle(creatorAsset.assetId, e, Object.assign(creatorAsset))}
                src={creatorAsset.asset.rawUrl}
                className={cn('cursor-pointer rounded-lg object-cover object-center h-70 w-70', preview ? 'md:h-50 md:w-50' : '')}
                alt="gallery-image"
                width={300}
                height={400}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </ScrollArea>
      {preview && preview.asset.rawUrl && !isMobile && (
        <Card className="h-fit flex">
          <CardHeader>
            <CardAction>
              <Button size={'icon'} onClick={() => setPreview(null)}>
                <X />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="w-full h-full">
            {preview && preview.asset.rawUrl && (
              <Image
                className="h-90 w-90 max-w-full rounded-lg object-cover object-center"
                src={preview.asset.rawUrl}
                alt="preview"
                width={360}
                height={360}
                loading="lazy"
                style={{ minHeight: 360, minWidth: 360 }}
              />
            )}
          </CardContent>
          <CardFooter className="flex flex-col">
            <Div className="grid grid-cols-2 w-full">
              <p className="flex text-left">{preview.type}</p>
              <p className="flex text-right">{preview.asset.mediaType}</p>
            </Div>
            <p className="text-right">{moment(preview.createdAt).format('LT L')}</p>
          </CardFooter>
        </Card>
      )}
      <UploadAssetsModal onUpload={onUpload} />
      <DeleteAssetsModal />
    </Div>
  );
};
