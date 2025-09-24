import { create } from 'zustand';

type VaultsStore = {
  openSettingsModal: boolean;
  setOpenSettingsModal: (open: boolean) => void;
  openImportSheet: boolean;
  setOpenImportSheet: (opn: boolean) => void;
};

export const useVaultsStore = create<VaultsStore>()((set) => ({
  openSettingsModal: false,
  setOpenSettingsModal: (openSettingsModal: boolean) => set(() => ({ openSettingsModal })),
  openImportSheet: false,
  setOpenImportSheet: () => set((state) => ({ openImportSheet: !state.openImportSheet }))
}));
