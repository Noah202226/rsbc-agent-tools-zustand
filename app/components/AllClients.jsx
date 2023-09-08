import React from "react";
import { useUserStore } from "../store/zustand";

const AllClients = () => {
  const { userClients } = useUserStore((state) => state);

  return (
    <div className="p-1 bg-neutral-600">
      <h1 className="text-2xl text-center ">All Clients</h1>

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

        <tbody className="bg-cyan-300 divide-y divide-gray-200">
          {userClients.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-slate-950 hover:text-green-500 cursor-pointer"
            >
              <td className="px-6 py-1 whitespace-no-wrap text-gray-500">
                {item.clientName}
              </td>
              <td className="px-6 py-1 whitespace-no-wrap text-gray-500">
                {item.status}
              </td>
              <td className="px-6 py-1 whitespace-no-wrap text-gray-500">
                {item.dateStated?.toDate().toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllClients;
