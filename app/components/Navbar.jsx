"use client";
import { useUserStore } from "../store/zustand";
import Login from "./Login";

const Navbar = () => {
  const { user, isLoading, handleLogOut } = useUserStore((state) => state);
  return (
    <div className="">
      {isLoading ? (
        ""
      ) : user ? (
        <div className="navbar md:flex sm:block items-center justify-between bg-info">
          <div className="navbar-start">
            <p>Logo</p>
          </div>

          <div className="navbar-center hidden lg:flex space-x-6">
            <p>Clients</p>
            <p>Tools</p>
            <p className="cursor-pointer">
              Notifications: <sup className="text-red-600">{1}</sup>
            </p>
          </div>

          <div className="navbar-end">
            <button className="btn" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Navbar;
