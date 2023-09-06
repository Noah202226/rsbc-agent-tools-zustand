"use client";
import { useEffect, useState } from "react";
import { useUserStore } from "./store/zustand";

import Welcome from "./components/Welcome";

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

  useEffect(() => {
    console.log(user);
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
    console.log(userClients);
    const unsubscribe = subscribeToData();
    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, [userClients]);
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

          <h1>Your Firestore Data:</h1>
          <ul>
            {userClients.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>

          {addClientModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* <!-- Modal backdrop --> */}
              <div className="fixed inset-0 bg-gray-800 opacity-50"></div>

              {/* <!-- Modal content --> */}
              <div className="bg-white p-8 rounded-lg shadow-lg z-10">
                {/* <!-- Modal header --> */}
                <div className="text-xl font-semibold mb-4">Modal Title</div>

                {/* <!-- Modal body --> */}
                <p>This is a modal example created with Tailwind CSS.</p>

                {/* <!-- Modal footer --> */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setAddClientModal(!addClientModal)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mr-4"
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-400 hover:bg-gray-600 text-gray-800 font-semibold py-2 px-4 rounded-full"
                    onClick={() => setAddClientModal(!addClientModal)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
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
