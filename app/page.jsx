"use client";
import { useUserStore } from "./store/zustand";

export default function Home() {
  const { count, incrementCount, decrementCount, resetCount } = useUserStore(
    (state) => state
  );

  return (
    <div className="mt-20">
      <h1 className="font-semibold text-lg">RSBC AGENT TOOLS</h1>
      <p className="text-sm">Building with NextJs, Zustand and Tailwind</p>

      <p>Bears: {count}</p>

      <button
        className=" border-2 border-purple-50 p-2"
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
    </div>
  );
}
