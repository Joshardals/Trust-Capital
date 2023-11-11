import { create } from "zustand";
import { navStoreState } from "../typings";

export const useNavStore = create<navStoreState>((set) => ({
  navBar: false,
  setNavBar: () => set((state) => ({ navBar: !state.navBar })),
}));
