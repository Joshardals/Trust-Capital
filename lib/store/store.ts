import { create } from "zustand";
import { navStoreState, supportStoreState } from "../../typings";

export const useNavStore = create<navStoreState>((set) => ({
  navBar: false,
  setNavBar: () => set((state) => ({ navBar: !state.navBar })),
}));

export const useSupportStore = create<supportStoreState>((set) => ({
  support: false,
  setSupport: () => set((state) => ({ support: !state.support })),
}));
