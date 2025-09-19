import { create } from 'zustand';

type AssetsStore = {
  deleteModal: boolean;
  setDeleteModal: (deleteModal: boolean) => void;
  canSelect: boolean;
  setCanSelect: (canSelect: boolean) => void;
  openUploadModal: boolean;
  setOpenUploadModal: (open: boolean) => void;
  selectedAssets: string[];
  toggleSelect: (assets: string) => void;
  rangeSelection: boolean;
  setRangeSelection: (rangeSelection: boolean) => void;
  setSelectedAssets: (assets: string[]) => void;
};

export const useAssetsStore = create<AssetsStore>()((set) => ({
  rangeSelection: false,
  setRangeSelection: () => set((state) => ({ rangeSelection: !state.rangeSelection })),
  deleteModal: false,
  setDeleteModal: () => set((state) => ({ deleteModal: !state.deleteModal })),
  canSelect: false,
  setCanSelect: () => set((state) => ({ canSelect: !state.canSelect })),
  openUploadModal: false,
  setOpenUploadModal: () => set((state) => ({ openUploadModal: !state.openUploadModal })),
  selectedAssets: [],
  setSelectedAssets: (assets: string[]) => set({ selectedAssets: assets }),
  toggleSelect: (assetId) =>
    set((state) => {
      const isSelected = state.selectedAssets.includes(assetId);
      return {
        selectedAssets: isSelected ? state.selectedAssets.filter((id) => id !== assetId) : [...state.selectedAssets, assetId]
      };
    })
}));
