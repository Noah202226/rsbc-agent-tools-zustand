"use client";
import Link from "next/link";
import { useUserStore, formStore } from "../store/useCtbcFormStore";
import Login from "./Login";
import { driver } from "driver.js";
import { useEffect } from "react";

const Navbar = () => {
  // const { user, isLoading, handleLogOut } = useUserStore((state) => state);
  const { user, isLoading, handleLogOut } = formStore((state) => state);

  return (
    <div className="">
      {isLoading ? (
        "WHY"
      ) : user ? (
        <div className="navbar md:flex sm:block items-center justify-between bg-emerald-500 text-white">
          <div className="navbar-start">
            <a href="/">
              <p className="text-xl">RSCB</p>
            </a>

            <div className="dropdown text-black navbar-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li tabIndex={0} className="">
                  <a
                    href="https://loan-application-form-status.vercel.app/"
                    target="_blank"
                  >
                    Application Status
                  </a>
                </li>
                <li>
                  <a>Marketing</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 z-50 text-black">
              <li className="dashboard-application-status">
                <Link
                  target="_blank"
                  href={"https://loan-application-form-status.vercel.app/"}
                >
                  Application Status
                </Link>
              </li>
              <li>
                <a>Marketing</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <button className="btn dashboard-last-step" onClick={handleLogOut}>
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
