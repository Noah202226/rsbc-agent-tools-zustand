import React from "react";
import { useUserStore } from "../store/zustand";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
    <div className="flex items-center justify-between">
      <div>
        <p>Logo</p>
      </div>
      <div className="flex items-center justify-end w-2/4">
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
