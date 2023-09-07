"use client";
import { useUserStore } from "../store/zustand";
import Login from "./Login";

const Navbar = () => {
  const { user, isLoading, handleLogOut } = useUserStore((state) => state);
  return (
    <div className="fixed top-0 left-0 right-0 p-4">
      {isLoading ? (
        ""
      ) : user ? (
        <div className="md:flex sm:block items-center justify-between">
          <div>
            <p>Logo</p>
          </div>
          <div className="flex items-center justify-between w-1/4">
            <p>Clients</p>
            <p>Tools</p>
            <p className="bg-slate-500 p-2 rounded-md hover:text-cyan-950 cursor-pointer">
              Notifications: <sup className="text-red-600">{1}</sup>
            </p>
            <button onClick={handleLogOut}>Logout</button>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Navbar;
