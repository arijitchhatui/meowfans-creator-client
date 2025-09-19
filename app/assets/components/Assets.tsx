'use client';

import { Separator } from '@/components/ui/separator';
import { GET_CREATOR_ASSETS_QUERY } from '@/packages/gql/api/assetsAPI';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { useQuery } from '@apollo/client/react';
import { AssetsHeader } from './Header';
import { AssetsThread } from './Thread';

export const Assets = () => {
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
    await fetchMore({
      variables: { input: { offset: assets?.getCreatorAssets.length, limit: 10 } },
      updateQuery: (prev, { fetchMoreResult }) => ({
        getCreatorAssets: [...prev.getCreatorAssets, ...fetchMoreResult.getCreatorAssets]
      })
    });
  };

  return (
    <PageWrapper>
      <AssetsHeader />
      <Separator />
      <AssetsThread assets={assets} onUpload={handleRefetch} onLoadMore={handleLoadMore} />
    </PageWrapper>
  );
};
