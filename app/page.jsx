"use client";
import { useEffect, useState } from "react";
import { useUserStore } from "./store/zustand";

import Welcome from "./components/Welcome";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import AddNewClient from "./components/modals/AddNewClient";
import AllClients from "./components/AllClients";
import UserClients from "./components/UserClients";

export default function Home() {
  const {
    isLoading,
    user,
    auth,
    handleLogin,
    handleLogOut,

    userClients,
    subscribeToData,
  } = useUserStore((state) => state || {});

  const [addClientModal, setAddClientModal] = useState(false);

  // Filter clients by user UID
  const filteredClients = userClients?.filter(
    (client) => client.clientBy == user?.uid
  );

  useEffect(() => {
    console.log(user, filteredClients);
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        handleLogin(user);
        // handleIsLoading(false);
      } else {
        // User is signed out.
        handleLogOut();
      }
    });

    return () => {
      // Unsubscribe from the Firebase Auth observer when the component unmounts.
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    const unsubscribe = subscribeToData();
    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, []);
  return (
    <div className="mt-1">
      {isLoading ? (
        <div className="flex text-center justify-center h-full">
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-md"></span>
        </div>
      ) : user ? (
        <>
          <AllClients />
          <p>User: {user?.displayName}</p>

          {/* <!-- Button to trigger modal --> */}
          <button
            className="bg-emerald-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full "
            // onClick={() => setAddClientModal(true)}
            onClick={() => setAddClientModal(!addClientModal)}
          >
            Add New Client
          </button>

          <label
            for="my-drawer"
            className="btn btn-primary drawer-button absolute right-0"
          >
            Open drawer
          </label>

          <UserClients filteredClients={filteredClients} />

          {addClientModal && (
            <AddNewClient
              addClientModal={addClientModal}
              setAddClientModal={setAddClientModal}
            />
          )}
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
}
