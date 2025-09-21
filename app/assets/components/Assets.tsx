'use client';

import { Separator } from '@/components/ui/separator';
import { GET_CREATOR_ASSETS_QUERY } from '@/packages/gql/api/assetsAPI';
import { Div } from '@/wrappers/HTMLWrappers';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { useQuery } from '@apollo/client/react';
import { useEffect, useState } from 'react';
import { AssetsHeader } from './Header';
import { SlideShow } from './SlideShow';
import { AssetsThread } from './Thread';

export const Assets = () => {
  const [slideShow, setSlideShow] = useState<boolean>(false);
  const [slideUrls, setSlideUrls] = useState<string[]>([]);

  const {
    data: assets,
    refetch,
    fetchMore
  } = useQuery(GET_CREATOR_ASSETS_QUERY, {
    variables: { input: { limit: 10, offset: 0 } }
  });

  const handleRefetch = async () => {
    await refetch();
  };

  const handleLoadMore = async () => {
    const { data } = await fetchMore({
      variables: { input: { offset: assets?.getCreatorAssets.length, limit: 10 } },
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

  return (
    <PageWrapper>
      <AssetsHeader onSlideShowOff={() => setSlideShow(false)} />
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
