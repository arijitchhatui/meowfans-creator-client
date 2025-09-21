import { DeleteAssetsModal } from '@/components/modals/DeleteAssetsModal';
import { UploadAssetsModal } from '@/components/modals/UploadAssetsModal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { GetCreatorAssetsQuery } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import { useAssetsStore } from '@/zustand/assets.store';
import { FileSliders, Fullscreen, LassoIcon, Lock } from 'lucide-react';
import Image from 'next/image';
import { MouseEvent } from 'react';

interface Props {
  assets?: GetCreatorAssetsQuery;
  onUpload: () => unknown;
  onLoadMore: () => unknown;
  onSlideShow: () => unknown;
  onDelete: () => unknown;
}

export const AssetsThread: React.FC<Props> = ({ assets, onUpload, onLoadMore, onSlideShow, onDelete }) => {
  const { canSelect, selectedAssets, toggleSelect, rangeSelection, setCanSelect } = useAssetsStore();

  const handleOpenFullscreen = (elem: HTMLElement | null) => {
    if (elem && elem.requestFullscreen) elem.requestFullscreen();
  };

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

  const handleToggle = (assetId: string, e: MouseEvent) => {
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
    }
  };

  return (
    <Div className="flex flex-row justify-between gap-1 m-1 ">
      <ScrollArea className={cn('h-[calc(100vh-136px)]', 'w-full')}>
        <div className={cn('grid gap-4 grid-cols-2', 'md:grid-cols-5')}>
          {assets?.getCreatorAssets.map((creatorAsset) => (
            <div key={creatorAsset.id} className="relative flex">
              {canSelect ? (
                <Div>
                  <Button
                    size="icon"
                    variant={selectedAssets.includes(creatorAsset.assetId) ? 'destructive' : 'default'}
                    className="absolute top-0 left-0 bg-transparent"
                    onClick={(e) => handleToggle(creatorAsset.assetId, e)}
                  >
                    <LassoIcon />
                  </Button>
                  <Button size="icon" variant="default" className="absolute top-0 right-0 bg-transparent">
                    <Lock />
                  </Button>
                </Div>
              ) : (
                <Div className="flex flex-col justify-between">
                  <Button className="absolute top-0 left-0 bg-transparent" size={'icon'} onClick={onSlideShow}>
                    <FileSliders />
                  </Button>
                  <Button
                    className="absolute top-0 right-0 cursor-pointer bg-transparent border-dashed"
                    size={'icon'}
                    onClick={() => handleOpenFullscreen(document.getElementById(creatorAsset.asset.rawUrl))}
                  >
                    <Fullscreen />
                  </Button>
                </Div>
              )}
              <Image
                onClick={(e) => handleToggle(creatorAsset.assetId, e)}
                src={creatorAsset.asset.rawUrl}
                id={creatorAsset.asset.rawUrl}
                className={cn('cursor-pointer rounded-lg object-cover object-center h-70 w-70')}
                alt="gallery-image"
                width={300}
                height={400}
                loading="lazy"
              />
              <Badge className="absolute bottom-0 right-0 bg-blue-500">{creatorAsset.type}</Badge>
            </div>
          ))}
          <Div className="flex">
            <Button className="" onClick={onLoadMore}>
              Load More
            </Button>
          </Div>
        </div>
      </ScrollArea>
      <UploadAssetsModal onUpload={onUpload} />
      <DeleteAssetsModal onDelete={onDelete} />
    </Div>
  );
};
