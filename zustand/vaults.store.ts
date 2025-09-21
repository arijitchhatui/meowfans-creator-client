import { create } from 'zustand';

type VaultsStore = {
  openImportSheet: boolean;
  setOpenImportSheet: (opn: boolean) => void;
};

export const useVaultsStore = create<VaultsStore>()((set) => ({
  openImportSheet: false,
  setOpenImportSheet: () => set((state) => ({ openImportSheet: !state.openImportSheet }))
}));
