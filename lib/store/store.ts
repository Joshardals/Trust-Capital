import { create } from "zustand";
import {
  navStoreState,
  sideStoreState,
  supportStoreState,
} from "../../typings";

export const useNavStore = create<navStoreState>((set) => ({
  navBar: false,
  setNavBar: () => set((state) => ({ navBar: !state.navBar })),
}));

export const usesideBarStore = create<sideStoreState>((set) => ({
  sideBar: false,
  setSideBar: () => set((state) => ({ sideBar: !state.sideBar })),
}));

export const useSupportStore = create<supportStoreState>((set) => ({
  support: false,
  setSupport: () => set((state) => ({ support: !state.support })),
}));
