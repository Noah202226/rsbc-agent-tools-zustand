import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-emerald-500">
      <div className="hero flex flex-col items-center h-full justify-around">
        <h1 className="font-semibold text-6xl">RSBC AGENT TOOLS</h1>
        <p className="text-5xl">More organize, more task you cand do</p>
      </div>

      {/* Section */}
      <div className="flex">
        <h2>Tools that help you manage your target leads</h2>
      </div>
    </div>
  );
};

export default Welcome;
