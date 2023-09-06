"use client";
import { useEffect } from "react";
import { useUserStore } from "./store/zustand";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Home() {
  const {
    count,
    incrementCount,
    decrementCount,
    resetCount,
    user,
    auth,
    handleLogin,
    handleLogOut,
  } = useUserStore((state) => state);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {
      console.log("after log", user);
      handleLogin(user.user);
    });
  };

  useEffect(() => {
    console.log(user);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        handleLogin(user);
      } else {
        // User is signed out.
        handleLogOut();
      }
    });

    return () => {
      // Unsubscribe from the Firebase Auth observer when the component unmounts.
      unsubscribe();
    };
  }, [user]);

  return (
    <div className="mt-20">
      <h1 className="font-semibold text-lg">RSBC AGENT TOOLS</h1>
      <p className="text-sm">Building with NextJs, Zustand and Tailwind</p>

      <p>Bears: {user?.displayName}</p>

      <button
        className="border-2 border-purple-500 p-2"
        onClick={incrementCount}
      >
        Increment Count
      </button>
      <button
        className=" border-2 border-purple-50 p-2"
        onClick={decrementCount}
      >
        Decrement Count
      </button>
      <button className=" border-2 border-purple-50 p-2" onClick={resetCount}>
        Reset
      </button>

      <button onClick={login}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}
