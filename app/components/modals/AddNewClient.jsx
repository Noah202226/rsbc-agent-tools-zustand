import { formStore } from "@/app/store/useCtbcFormStore";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";

const AddNewClient = ({ addClientModal, setAddClientModal }) => {
  const { user, db } = formStore((state) => state);

  const saveNewClient = (data) => {
    addDoc(collection(db, "clients"), data)
      .then((data) => {
        setAddClientModal(false);
        setNewClient("");
      })
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
          className="w-full rounded-lg placeholder:italic input-bordered border-black outline-1 outline-emerald-400 placeholder:text-slate-400 p-2  shadow-sm  focus:border-sky-500 text-gray-800 focus:ring-sky-500 my-2"
          placeholder="Client name"
          onChange={(e) => setNewClient(e.target.value)}
        />

        {/* <!-- Modal footer --> */}

        <form method="dialog" className="modal-backdrop flex flex-row">
          <button
            onClick={() =>
              saveNewClient({
                clientName: newClient,
                clientBy: user?.uid,
                dateStated: serverTimestamp(),
                status: "Inquiry",
                renderPdfToken: 5,
                formDataRecieved: "",
              })
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mr-4 w-full"
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
    </dialog>
  );
};

export default AddNewClient;
