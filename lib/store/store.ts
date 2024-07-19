import { create } from "zustand";
import {
  editStoreState,
  emailStoreState,
  navStoreState,
  refStoreState,
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

export const useEditStore = create<editStoreState>((set) => ({
  editAcct: false,
  setEditAcct: () =>
    set((state) => ({
      editAcct: !state.editAcct,
    })),
}));

export const useRefState = create<refStoreState>((set) => ({
  refCode: "",
  updateRefCode: (refCode) => set(() => ({ refCode: refCode })),
}));

export const emailState = create<emailStoreState>((set) => ({
  email: "",
  setEmail: (email) => set(() => ({ email: email })),
}));
