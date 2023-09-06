"use client";
import { create } from "zustand";

import { signOut } from "firebase/auth";

import { auth } from "../firebase";

export const useUserStore = create((set, get) => ({
  user: null,
  auth: auth,
  handleLogin: (user) => {
    set({ user });
  },

  handleLogOut: () => {
    signOut(auth);
    set({ user: null });
  },
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
}));
