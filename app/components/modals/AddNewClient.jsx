import { useUserStore } from "@/app/store/zustand";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";

const AddNewClient = ({ addClientModal, setAddClientModal }) => {
  const { user, db } = useUserStore((state) => state);

  const saveNewClient = (data) => {
    addDoc(collection(db, "clients"), data)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  const [newClient, setNewClient] = useState("");
  return (
    <dialog id="my_modal_2" className="modal modal-open">
      {/* <!-- Modal content --> */}
      <div className="modal-box">
        {/* <!-- Modal header --> */}
        <div className="text-xl font-semibold mb-4">Add new client</div>

        {/* <!-- Modal body --> */}
        <p>Press ESC key or click outside to close.</p>
        <input
          type="text"
          className="w-full rounded-lg placeholder:italic placeholder:text-slate-400 p-2  shadow-sm focus:outline-none focus:border-sky-500 text-gray-800 focus:ring-sky-500 focus:ring-1"
          placeholder="Client name"
          onChange={(e) => setNewClient(e.target.value)}
        />

        {/* <!-- Modal footer --> */}
        <div className="">
          <form method="dialog" className="modal-backdrop">
            <button
              onClick={() =>
                saveNewClient({
                  clientName: newClient,
                  clientBy: user?.uid,
                  dateStated: serverTimestamp(),
                  status: "Inquiry",
                })
              }
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
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddNewClient;
