import React, { useState } from "react";
import ShowClientsInfo from "./modals/ShowClientsInfo";
import { useUserStore } from "../store/zustand";

const UserClients = ({ filteredClients }) => {
  const { showUserClientInfoModal, setShowUserClientInfoModal } = useUserStore(
    (state) => state || {}
  );

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
              Date stated
            </th>
          </tr>
        </thead>

        <tbody className="bg-emerald-300 divide-y-8 divide-emerald-400">
          {filteredClients.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-emerald-900 hover:text-white cursor-pointer"
              onClick={() => setShowUserClientInfoModal(item)}
            >
              <td className="px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white">
                {item.clientName}
              </td>
              <td className="px-6 py-1 whitespace-no-wrap text-gray-500 hover:text-white">
                {item.status}
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
