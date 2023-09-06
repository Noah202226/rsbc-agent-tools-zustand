import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
}));
