import React from "react";
import { formStore } from "../store/useCtbcFormStore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { doc, setDoc } from "firebase/firestore";

const Login = ({ welcomeDriver }) => {
  const { handleLogin, auth, db } = formStore((state) => state);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {
      console.log("after log", user);
      handleLogin(user.user);

      try {
        setDoc(doc(db, "users", user.user.uid), {
          userID: user.user.uid,
          pdfToken: 30,
          agentCode: user.user.displayName,
        }).then(() => welcomeDriver?.destroy());
      } catch (e) {
        console.log(e);
      }
    });
  };
  return (
    <div className="navbar bg-slate-400 absolute bg-opacity-0">
      <div className="flex-1">
        <a className="btn btn-ghost text-white normal-case text-xl" href="/">
          RSBC AGENT APP
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="last-step ">
            <a className="btn btn-primary" onClick={login}>
              <div className="h-full w-full flex flex-row items-center justify-between ">
                Login
                <Image src={"/google.svg"} width={20} height={20} />
              </div>
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
