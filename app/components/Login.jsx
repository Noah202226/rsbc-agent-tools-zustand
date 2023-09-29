import React from "react";
import { useUserStore } from "../store/zustand";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";

const Login = () => {
  const { handleLogin, auth } = useUserStore((state) => state);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {
      console.log("after log", user);
      handleLogin(user.user);
    });
  };
  return (
    <div className="navbar bg-slate-400 absolute">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          RSBC AGENT APP
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className="btn btn-primary flex flex-col items-center justify-center "
              onClick={login}
            >
              Login with
              <Image src={"/google.svg"} width={20} height={20} />
            </a>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Login;
