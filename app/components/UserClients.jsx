import React, { useEffect, useState } from "react";
import ShowClientsInfo from "./modals/ShowClientsInfo";
import { formStore } from "../store/useCtbcFormStore";

const UserClients = ({ filteredClients }) => {
  const [gettingData, setGettingData] = useState(true);

  const {
    showUserClientInfoModal,
    setShowUserClientInfoModal,
    handleClientFormData,
    handleClientPdfRender,
    handleClientDataID,
    handleClientBy,
    userProfile,
  } = formStore((state) => state || {});

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text successfully copied to clipboard");
    } catch (err) {
      alert("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    if (filteredClients) {
      setTimeout(() => {
        setGettingData(false);
      }, 2000);
    }
  }, [filteredClients]);

  return (
    <div>
      <h1>Your clients only:</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Client Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Loan Status Link
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              CTBC Form Link
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              CTBC Form Data Recieved
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Date stated
            </th>
          </tr>
        </thead>
        {gettingData ? (
          <div className="flex absolute w-full h-60 items-center justify-center">
            <span className="loading loading-spinner loading-sm md:loading-lg"></span>
          </div>
        ) : (
          <tbody className="bg-emerald-300 divide-y-8 divide-emerald-400">
            {filteredClients.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-emerald-400 hover:text-white cursor-pointer"
              >
                <td className="px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white">
                  {item.clientName}
                </td>

                <td
                  className="dashboard-application-status-state px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white "
                  onClick={() => setShowUserClientInfoModal(item)}
                >
                  {item.status}
                </td>

                <td
                  className="dashboard-application-status-link px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white tooltip"
                  data-tip="Click to copy to status ID"
                  onClick={() => copyToClipboard(`${item.id}`)}
                >
                  {`${item.id}`}
                </td>

                <td
                  className="dashboard-client-form-link px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white "
                  onClick={() =>
                    copyToClipboard(
                      `https://ctbc-application-form.vercel.app/?id=${item.id}`
                    )
                  }
                >
                  {`https://ctbc-application-form.vercel.app/?id=${item.id}`.substring(
                    25
                  )}
                </td>

                <td
                  className="px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white"
                  onClick={
                    item.formDataRecieved === undefined ||
                    item.formDataRecieved === ""
                      ? () => console.log("nothing")
                      : () => {
                          document.getElementById("my_modal_3")?.showModal();
                          handleClientFormData(item.formDataRecieved);
                          handleClientPdfRender(item.renderPdfToken);
                          handleClientDataID(item.id);
                          handleClientBy(userProfile?.userID);
                        }
                  }
                  style={
                    item.formDataRecieved === undefined ||
                    item.formDataRecieved === ""
                      ? { color: "grey" }
                      : { color: "firebrick" }
                  }
                >
                  {item.formDataRecieved === undefined ||
                  item.formDataRecieved === ""
                    ? "Data empty"
                    : `Data recieved`}
                </td>
                <td className="px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white">
                  {item.dateStated?.toDate().toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      <ShowClientsInfo />
    </div>
  );
};

export default UserClients;
