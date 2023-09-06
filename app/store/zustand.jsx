"use client";
import { create } from "zustand";

import { signOut } from "firebase/auth";

import { auth, db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const useUserStore = create((set, get) => ({
  // States
  isLoading: true,
  user: null,
  auth: auth,
  userClients: [],

  // Functions
  handleLogin: (user) => {
    set({ user, isLoading: false });
  },
  handleLogOut: () => {
    signOut(auth);
    set({ user: null, isLoading: false });
  },
  handleIsLoading: () => set((state) => (state.isLoading = false)),

  addClient: (client) =>
    set((state) => ({ userClients: [...state.userClients, client] })),

  subscribeToData: () => {
    const dbRef = collection(db, "clients");
    return onSnapshot(dbRef, (querySnapshot) => {
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({ id: doc.id, ...doc.data() });
      });
      set({ userClients: newData });
    });
  },
}));
