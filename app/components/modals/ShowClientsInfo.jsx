"use client";
import { useUserStore } from "@/app/store/zustand";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";

const ShowClientsInfo = () => {
  const { db } = useUserStore((state) => state);
  const deleteUserClient = (id) => {
    deleteDoc(doc(db, "clients", id))
      .then(setShowUserClientInfoModal(null))
      .catch((e) => console.log(e));
  };
  const {
    userClientInfo,
    showUserClientInfoModal,
    setShowUserClientInfoModal,
  } = useUserStore((state) => state);

  return (
    <dialog
      id="my_modal_2"
      className={`modal ${showUserClientInfoModal ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Client info for: {userClientInfo?.clientName}
        </h3>
        <p className="py-4">Press ESC key or click outside to close!</p>
        <button onClick={() => deleteUserClient(userClientInfo?.id)}>
          Close
        </button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => setShowUserClientInfoModal(null)}>close</button>
      </form>
    </dialog>
  );
};

export default ShowClientsInfo;
