'use client';

import { Separator } from '@/components/ui/separator';
import { GET_CREATOR_ASSETS_QUERY } from '@/packages/gql/api/assetsAPI';
import { AssetType } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { useAssetsStore } from '@/zustand/assets.store';
import { useQuery } from '@apollo/client/react';
import { useEffect, useState } from 'react';
import { AssetsHeader } from './Header';
import { SlideShow } from './SlideShow';
import { AssetsThread } from './Thread';

export const Assets = () => {
  const [slideShow, setSlideShow] = useState<boolean>(false);
  const [slideUrls, setSlideUrls] = useState<string[]>([]);
  const [assetType, setAssetType] = useState<AssetType>(AssetType.Private);
  const { updated } = useAssetsStore();

  const {
    data: assets,
    refetch,
    fetchMore
  } = useQuery(GET_CREATOR_ASSETS_QUERY, {
    variables: { input: { limit: 30, offset: 0, assetType: assetType } }
  });

  const handleRefetch = async () => {
    await refetch();
  };

  const handleLoadMore = async () => {
    const { data } = await fetchMore({
      variables: { input: { offset: assets?.getCreatorAssets.length, limit: 30, assetType: assetType } },
      updateQuery: (prev, { fetchMoreResult }) => ({
        getCreatorAssets: [...prev.getCreatorAssets, ...fetchMoreResult.getCreatorAssets]
      })
    });
    setSlideUrls((prev) => [...prev, ...(data?.getCreatorAssets.map(({ asset }) => asset.rawUrl) ?? [])]);
  };

  const handleFetchSlideUrls = () => {
    setSlideUrls(assets?.getCreatorAssets.map(({ asset }) => asset.rawUrl) ?? []);
  };

  useEffect(() => {
    handleFetchSlideUrls();
  }, []); //eslint-disable-line

  useEffect(() => {
    handleRefetch();
  }, [updated]); //eslint-disable-line

  return (
    <PageWrapper>
      <AssetsHeader
        onSlideShowOff={() => setSlideShow(false)}
        assetType={assetType}
        setAssetType={setAssetType}
        onRefresh={handleRefetch}
      />
      <Separator />
      {slideShow ? (
        <Div className="w-full flex md:flex-row flex-col md:w-[calc(100vw-var(--sidebar-width))] h-full">
          <SlideShow slideUrls={slideUrls} onLoadMore={handleLoadMore} />
        </Div>
      ) : (
        <AssetsThread
          assets={assets}
          onUpload={handleRefetch}
          onLoadMore={handleLoadMore}
          onSlideShow={() => {
            handleFetchSlideUrls();
            setSlideShow((prev) => !prev);
          }}
          onDelete={handleRefetch}
        />
      )}
    </PageWrapper>
  );
};
