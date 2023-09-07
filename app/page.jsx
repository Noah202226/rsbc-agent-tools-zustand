"use client";
import { useEffect, useState } from "react";
import { useUserStore } from "./store/zustand";

import Welcome from "./components/Welcome";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import AddNewClient from "./components/modals/AddNewClient";
import AllClients from "./components/AllClients";

export default function Home() {
  const {
    isLoading,
    user,
    auth,
    handleLogin,
    handleLogOut,

    userClients,
    subscribeToData,
  } = useUserStore((state) => state);

  const [addClientModal, setAddClientModal] = useState(false);

  // Filter clients by user UID
  const filteredClients = userClients.filter(
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
    <div className="mt-20">
      {isLoading ? (
        <div className="flex text-center justify-center h-full">
          <div className="bg-opacity-70 text-center justify-center ">
            <svg
              className="animate-spin h-10 w-10 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-50"
                cx="10"
                cy="10"
                r="3"
                stroke="currentColor"
                strokeWidth="1"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.863 3.169 8.029l2.83-2.738z"
              ></path>
            </svg>
          </div>
        </div>
      ) : user ? (
        <>
          <h1 className="font-semibold text-lg">RSBC AGENT TOOLS</h1>
          <p className="text-sm">Building with NextJs, Zustand and Tailwind</p>

          <p>User: {user?.displayName}</p>
          <p>ID: {user?.uid}</p>

          <AllClients />
          <h1>Your clients only:</h1>
          <ul>
            {filteredClients.map((client) => {
              console.log(client);
              return <li key={client.id}>{client.clientName}</li>; // Adjust to display the client data structure
            })}
          </ul>

          {addClientModal && (
            <AddNewClient
              addClientModal={addClientModal}
              setAddClientModal={setAddClientModal}
            />
          )}

          {/* <!-- Button to trigger modal --> */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
            onClick={() => setAddClientModal(true)}
          >
            Open Modal
          </button>
        </>
      ) : (
        <Welcome />
      )}
    </div>
  );
}
