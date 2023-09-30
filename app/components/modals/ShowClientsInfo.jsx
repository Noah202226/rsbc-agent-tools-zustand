"use client";
import { formStore } from "@/app/store/useCtbcFormStore";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const ShowClientsInfo = () => {
  const { db } = formStore((state) => state);
  const deleteUserClient = (id) => {
    deleteDoc(doc(db, "clients", id))
      .then(setShowUserClientInfoModal(null))
      .catch((e) => console.log(e));
  };
  const {
    userClientInfo,
    showUserClientInfoModal,
    setShowUserClientInfoModal,
  } = formStore((state) => state);

  const [userClientState, setUserClientState] = useState(null);

  const updateUserClientInfo = () => {
    setDoc(
      doc(db, "clients", userClientInfo?.id),
      { status: userClientState },
      { merge: true }
    )
      .then(() => {
        setShowUserClientInfoModal(null);
        setUserClientState(userClientInfo?.status);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setUserClientState(userClientInfo?.status);
  }, []);
  return (
    <dialog
      id="my_modal_2"
      className={`modal ${showUserClientInfoModal ? "modal-open" : ""} w-full`}
    >
      <div className="modal-box">
        <button
          onClick={() => setShowUserClientInfoModal(null)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-800"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">
          Client info for: {userClientInfo?.clientName}
        </h3>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select a new status</span>
            <span className="label-text-alt">
              Last status: {userClientInfo?.status}
            </span>
          </label>
          <select
            className="select select-bordered mb-2 w-full"
            value={userClientState}
            onChange={(e) => setUserClientState(e.target.value)}
          >
            <option disabled selected>
              Pick one
            </option>
            <option>Inquiry</option>
            <option>Follow-up</option>
            <option>In-process</option>
            <option>C.I</option>
            <option>Approved</option>
          </select>
        </div>

        <div className="flex flex-row w-fit items-center justify-between">
          <button
            onClick={() => updateUserClientInfo(userClientInfo?.id)}
            className="btn btn-info text-white hover:text-black bg-emerald-500 mr-10"
          >
            Update Info
          </button>
          <button
            onClick={() => deleteUserClient(userClientInfo?.id)}
            className="btn btn-error hover:text-white"
          >
            Delete Client
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setShowUserClientInfoModal(null)}>close</button>
      </form>
    </dialog>
  );
};

export default ShowClientsInfo;
