"use client";
import { useUserStore } from "../store/zustand";

const Navbar = () => {
  const { count } = useUserStore((state) => state);
  return (
    <div className="fixed top-0 left-0 right-0 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p>Logo</p>
        </div>
        <div className="flex items-center justify-between w-2/4">
          <p>Clients</p>
          <p>Tools</p>
          <p className="bg-slate-500 p-2 rounded-sm">
            Notifications: <sup className="text-red-600">{count}</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
