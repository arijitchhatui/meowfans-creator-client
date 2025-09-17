'use client';

import { Separator } from '@/components/ui/separator';
import { GET_CREATOR_ASSETS_QUERY } from '@/packages/gql/api/assetsAPI';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { useQuery } from '@apollo/client/react';
import { AssetsHeader } from './Header';
import { AssetsThread } from './Thread';

export const Assets = () => {
  const { data: assets, refetch } = useQuery(GET_CREATOR_ASSETS_QUERY, {
    variables: { input: { limit: 60 } }
  });

  const handleRefetch = async () => {
    await refetch();
  };

  return (
    <PageWrapper>
      <AssetsHeader />
      <Separator />
      <AssetsThread assets={assets} onUpload={handleRefetch} />
    </PageWrapper>
  );
};
