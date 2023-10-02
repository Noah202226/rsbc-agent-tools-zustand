"use client";
import { useEffect, useState } from "react";
import { formStore } from "./store/useCtbcFormStore";

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

    userProfile,
    handleUserProfile,
    subscribeToProfileData,
  } = formStore((state) => state || {});

  const [addClientModal, setAddClientModal] = useState(false);

  // Filter clients by user UID
  const filteredClients = userClients?.filter(
    (client) => client.clientBy == user?.uid
  );

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    console.log(user, filteredClients);
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        handleLogin(user);

        // handleIsLoading(false);
        subscribeToProfileData(user?.uid);
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
    console.log(db);
    const interval = setInterval(() => {
      const currentDate = new Date();
      setTime({
        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        seconds: currentDate.getSeconds(),
      });
    }, 1000);
    const unsubscribe = subscribeToData();

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
      clearInterval(interval);
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
          {/* <AllClients /> */}
          <div className="flex flex-row items-center justify-between p-2">
            <div>
              <p>User: {user?.displayName}</p>
              <p>UserID: {user?.uid}</p>
              <p>Generate PDF Token: {userProfile?.pdfToken}</p>
            </div>

            <div className="flex flex-col items-end justify-between">
              <p className="font-mono text-2xl mr-2">
                {new Date().toLocaleDateString()}
              </p>
              <span className="countdown font-mono text-3xl">
                <span style={{ "--value": time.hours }}></span>h
                <span style={{ "--value": time.minutes }}></span>m
                <span style={{ "--value": time.seconds }}></span>s
              </span>
            </div>
          </div>

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
            View all company transactions
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
