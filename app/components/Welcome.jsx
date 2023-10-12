import React, { useEffect } from "react";

const Welcome = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/top-view-finance-business-elements_23-2148793757.jpg?w=900&t=st=1696823687~exp=1696824287~hmac=06ae9a0e49a87d6b3460e69d0d97bad005ed330378367dd62bbedb4cc8161aaa)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div id="tour-example" className="md:w-full">
          <h1 className="mb-5 text-8xl font-bold">Hello, Agent</h1>
          <p className="mb-5 text-3xl">
            This web application can help you to easily manage your clients, and
            also provide you with some tools tools speed up your process in
            getting client informations. This update is from other device! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
