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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* <!-- Modal backdrop --> */}
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>

      {/* <!-- Modal content --> */}
      <div className="bg-red-500 p-8 rounded-lg shadow-lg z-10">
        {/* <!-- Modal header --> */}
        <div className="text-xl font-semibold mb-4">Add new client</div>

        {/* <!-- Modal body --> */}
        <p>This is a modal example created with Tailwind CSS.</p>
        <input
          type="text"
          className="w-full rounded-lg placeholder:italic placeholder:text-slate-400 p-2  shadow-sm focus:outline-none focus:border-sky-500 text-gray-800 focus:ring-sky-500 focus:ring-1"
          placeholder="Client name"
          onChange={(e) => setNewClient(e.target.value)}
        />

        {/* <!-- Modal footer --> */}
        <div className="mt-4 flex justify-end">
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
        </div>
      </div>
    </div>
  );
};

export default AddNewClient;
