"use client";
import React, { useEffect } from "react";
import { useUserStore } from "../store/zustand";

const page = () => {
  const { handleIsLoading, user } = useUserStore((state) => state);
  useEffect(() => {
    handleIsLoading();
    console.log(user);
  }, []);
  return (
    <div>
      <h1>Forms</h1>
      <div>
        <a href="/forms/ctbc">CTBC</a>
        <a href="/security">Security Bank</a>
        <a href="/eastwest">East west</a>
      </div>
    </div>
  );
};

export default page;
