"use client";
import { useEffect, useRef, useState } from "react";
import { formStore } from "./store/useCtbcFormStore";

import Welcome from "./components/Welcome";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import AddNewClient from "./components/modals/AddNewClient";
import AllClients from "./components/AllClients";
import UserClients from "./components/UserClients";
import { driver } from "driver.js";

import dashboardBg from "./../public/plant-bg.jpg";

import "driver.js/dist/driver.css";
import CtbcFormData from "./components/modals/CtbcFormData";

export default function Home() {
  const {
    isLoading,
    user,
    auth,
    handleLogin,
    handleLogOut,

    userClients,
    subscribeToData,

    userProfile,
    handleAgentPdfToken,
    subscribeToProfileData,
  } = formStore((state) => state || {});

  const [addClientModal, setAddClientModal] = useState(false);

  // DriverJS
  const dashboardDriver = driver({
    showProgress: true,
    showButtons: ["next", "previous", "close"],
    steps: [
      {
        element: "#dashboard-tour",
        popover: {
          title: "Welcome to your Dashboard",
          description: "Here, you can track and manage your clients.",
          side: "right",
          align: "end",
        },
      },
      {
        element: ".dashboard-agent-profile",
        popover: {
          title: "Your profile",
          description:
            "This are show your personal profile, and some important details for your account.",
          side: "right",
          align: "end",
        },
      },
      {
        element: ".dashboard-add-client",
        popover: {
          title: "Add your client",
          description:
            "You can use this button, to add your new clients. This will open form then fill up your client info",
          side: "right",
          align: "end",
        },
      },
      {
        element: ".dashboard-client-form-link",
        popover: {
          title: "Form Link",
          description:
            "After adding your new client, that client will have their personal form link.Find your new client, and just click the link to copy it, then you can send it to your client and they can fill up the form.",
          side: "right",
          align: "end",
        },
      },
      {
        element: ".dashboard-application-status",
        popover: {
          title: "Application status app",
          description:
            "This link will open a new web application that your can give also to your client to track the status of their application.",
          side: "right",
          align: "end",
        },
      },
      {
        element: ".dashboard-application-status-link",
        popover: {
          title: "Application status link",
          description:
            "This is the link you can give to your client to track their application status.You can also click it to copy it.",
          side: "right",
          align: "end",
        },
      },
      {
        element: ".dashboard-application-status-state",
        popover: {
          title: "Application Status",
          description:
            "Here you can update the application status of your client, Change it and this will automatically track on the application status app. This will help you to prevent the client asking for their application status.",
          side: "right",
          align: "end",
        },
      },
      {
        element: ".dashboard-open-sidebar-button",
        popover: {
          title: "Sidebar more features",
          description:
            "You can view here some features, like FAQ(Frequently ask question) to easily give response to your clients.",
          side: "right",
          align: "end",
        },
      },
      {
        element: ".dashboard-last-step",
        popover: {
          title: "Logout",
          description:
            "If you are in others device, you just can logout your account here to stay your account secure and not used by others.",
          side: "top",
          align: "start",
        },
      },
    ],
  });

  // const welcomeDriver = driver({
  //   showProgress: true,
  //   showButtons: ["next", "previous", "close"],
  //   steps: [
  //     {
  //       element: "#tour-example",
  //       popover: {
  //         title: "Animated Tour Example",
  //         description:
  //           "Here is the code example showing animated tour. Let's walk you through it.",
  //         side: "right",
  //         align: "end",
  //       },
  //     },
  //     {
  //       element: ".last-step",
  //       popover: {
  //         title: "Login",
  //         description:
  //           "First you need to login with google account, to create your personal dashboard.",
  //         side: "top",
  //         align: "start",
  //       },
  //     },
  //   ],
  // });

  // Filter clients by user UID
  const filteredClients = userClients?.filter(
    (client) => client.clientBy == user?.uid
  );

  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [period, setPeriod] = useState("");
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
    console.log(user, filteredClients);
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        handleLogin(user);
        dashboardDriver.drive();
        // handleIsLoading(false);
        subscribeToProfileData(user?.uid);
        handleAgentPdfToken(userProfile?.pdfToken);
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

  useEffect(() => {
    console.log(db);
    const interval = setInterval(() => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      // Convert 24-hour time to 12-hour time format
      const formattedHours = hours % 12 || 12;

      setTime({
        hours: formattedHours,
        minutes: minutes,
        seconds: seconds,
      });
      setPeriod(ampm);
    }, 1000);

    const unsubscribe = subscribeToData();

    const currentDate = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = currentDate.getDay();
    setWeekday(daysOfWeek[dayIndex]);

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mt-1 md:mt-0">
      {isLoading ? (
        <div className="flex text-center justify-center h-full">
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-md"></span>
        </div>
      ) : user ? (
        <div
          className="p-4 h-screen bg-green-300"
          style={{ backgroundImage: dashboardBg }}
        >
          {/* <AllClients /> */}
          <div className="flex flex-row items-center justify-between p-2">
            <div className="dashboard-agent-profile">
              <p>User: {user?.displayName}</p>
              {/* <p>UserID: {user?.uid}</p> */}
              <p>Generate PDF Token: {userProfile?.pdfToken}</p>
            </div>

            <div className="flex flex-col items-end justify-between">
              <p className="font-mono text-2xl mr-2">
                {new Date().toLocaleDateString()} {weekday}
              </p>
              <span className="countdown font-mono text-4xl">
                <span style={{ "--value": time.hours }}></span>:
                <span style={{ "--value": time.minutes }}></span> {period}
                {/* <span style={{ "--value": time.seconds }}></span>s */}
              </span>
            </div>
          </div>

          {/* <!-- Button to trigger modal --> */}
          <button
            className="bg-emerald-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full dashboard-add-client"
            // onClick={() => setAddClientModal(true)}
            onClick={() => setAddClientModal(!addClientModal)}
          >
            Add New Client
          </button>

          <label
            for="my-drawer"
            className="dashboard-open-sidebar-button btn btn-primary drawer-button absolute right-4 dashboard-last-step"
          >
            More
          </label>

          <UserClients filteredClients={filteredClients} />

          {addClientModal && (
            <AddNewClient
              addClientModal={addClientModal}
              setAddClientModal={setAddClientModal}
            />
          )}

          <CtbcFormData />
        </div>
      ) : (
        <Welcome />
      )}
    </div>
  );
}
