import React, { useEffect } from "react";
import { useUserStore } from "../store/zustand";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const Welcome = () => {
  const { handleLogin, auth } = useUserStore((state) => state);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {
      console.log("after log", user);
      handleLogin(user.user);
    });
  };

  const welcomeDriver = driver({
    showProgress: true,
    showButtons: ["next", "previous"],
    steps: [
      {
        element: "#tour-example",
        popover: {
          title: "Animated Tour Example",
          description:
            "Here is the code example showing animated tour. Let's walk you through it.",
          side: "right",
          align: "end",
        },
      },
      {
        element: ".second-step",
        popover: {
          title: "Import the Library",
          description:
            "It works the same in vanilla JavaScript as well as frameworks.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "code .line:nth-child(2)",
        popover: {
          title: "Importing CSS",
          description:
            "Import the CSS which gives you the default styling for popover and overlay.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "code .line:nth-child(4) span:nth-child(7)",
        popover: {
          title: "Create Driver",
          description:
            "Simply call the driver function to create a driver.js instance",
          side: "left",
          align: "start",
        },
      },
      {
        element: ".last-step",
        popover: {
          title: "Start Tour",
          description:
            "Call the drive method to start the tour and your tour will be started.",
          side: "top",
          align: "start",
        },
      },
    ],
  });

  useEffect(() => {
    setTimeout(() => {
      welcomeDriver.drive();
    }, 2000);
  }, []);
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
            getting clients info
          </p>
          <button className="btn btn-primary second-step">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
