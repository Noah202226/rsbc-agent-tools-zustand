import React, { useState } from "react";
import ShowClientsInfo from "./modals/ShowClientsInfo";
import { formStore } from "../store/useCtbcFormStore";

const UserClients = ({ filteredClients }) => {
  const { showUserClientInfoModal, setShowUserClientInfoModal } = formStore(
    (state) => state || {}
  );

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text successfully copied to clipboard");
    } catch (err) {
      alert("Failed to copy text: ", err);
    }
  };

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
              Date stated
            </th>
          </tr>
        </thead>

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
                className="px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white "
                onClick={() => setShowUserClientInfoModal(item)}
              >
                {item.status}
              </td>

              <td
                className="px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white tooltip"
                data-tip="Click to copy to status ID"
                onClick={() => copyToClipboard(`${item.id}`)}
              >
                {`${item.id}`}
              </td>

              <td
                className="px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white "
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

              <td className="px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white">
                {item.dateStated?.toDate().toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ShowClientsInfo />
    </div>
  );
};

export default UserClients;
