import { AssetsEntity } from '@/packages/gql/generated/graphql';
import { create } from 'zustand';

type AssetsStore = {
  openUploadModal: boolean;
  setOpenUploadModal: (open: boolean) => void;
  selectAssets: AssetsEntity[] | null;
  setSelectedAssets: (assets: AssetsEntity[] | null) => void;
};

export const useAssetsStore = create<AssetsStore>()((set) => ({
  openUploadModal: false,
  setOpenUploadModal: () => set((state) => ({ openUploadModal: !state.openUploadModal })),
  selectAssets: [],
  setSelectedAssets: (assets: AssetsEntity[] | null) =>
    set((state) => ({
      selectAssets: assets ? [...(state.selectAssets || []), ...assets] : state.selectAssets
    }))
}));
