"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";

// Assets
// import pdfFile from "/rotated.pdf?asset";
// import checkIcon from "/check.png?asset";

import LoanInfo from "./formpages/LoanInfo";
import PersonalInfo from "./formpages/PersonalInfo";
import Finances from "./formpages/Finances";
import References from "./formpages/References";
import GeneratePdf from "./formpages/GeneratePdf";
import Navbar from "@/app/components/Navbar";
import { useUserStore } from "@/app/store/zustand";

const CtbcForm = () => {
  const { handleIsLoading, user } = useUserStore((state) => state);
  useEffect(() => {
    handleIsLoading();
    console.log(user);
  }, []);

  const [stepsdata, setStepsdata] = useState([
    {
      stepName: "Loan information",
      done: true,
      index: 0,
      activeform: true,
      formFields: <LoanInfo />,
    },
    {
      stepName: "Personal Information",
      done: false,
      index: 1,
      activeform: false,
      formFields: <PersonalInfo />,
    },
    {
      stepName: "Work And Finances",
      done: false,
      index: 2,
      activeform: false,
      formFields: <Finances />,
    },
    {
      stepName: "References",
      done: false,
      index: 3,
      activeform: false,
      formFields: <References />,
    },
    {
      stepName: "Generate PDF",
      done: false,
      index: 4,
      activeform: false,
      formFields: <GeneratePdf />,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateStep = (e, index, isDone) => {
    e.preventDefault();
    console.log(index, currentIndex);
    if (index == stepsdata.length - 1) return;
    else {
      // Create a new array with updated data
      const updatedStepsdata = stepsdata.map((step) => {
        if (step.index === index) {
          return { ...step, activeform: isDone, done: true };
        } else if (step.index === index + 1) {
          return { ...step, activeform: true, done: true };
        } else {
          return { ...step, activeform: false };
        }
      });

      // Update the state with the new array
      setStepsdata(updatedStepsdata);
      setCurrentIndex(currentIndex + 1);
      console.log(stepsdata);
    }
  };

  const goToPreviousStep = (e, index, isDone) => {
    e.preventDefault();
    console.log("go back", index);
    if (index >= 0) {
      setTimeout(() => {
        // Create a new array with updated data
        const updatedStepsdata = stepsdata.map((step) => {
          if (step.index === index) {
            return { ...step, activeform: false, done: false };
          } else if (step.index === index - 1) {
            return { ...step, activeform: true }; // Set the previous step's done property
          } else {
            return { ...step, activeform: false }; // Keep the other steps unchanged
          }
        });

        // Update the state with the new array
        setStepsdata(updatedStepsdata);
        console.log(stepsdata);
        setCurrentIndex(currentIndex - 1);
      }, 100);
    }
  };
  return (
    <Card
      sx={{
        padding: 1,
        display: "flex",
        flexDirection: "column",
      }}
      className="bg-slate-50 container mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl text-center ">
        CTBC APPLICATION FORM
      </h1>

      <div className="flex flex-col sm:flex-col  w-full">
        <ul className="steps my-3">
          {stepsdata.map((step) => {
            return (
              <li
                key={step.index}
                className={`step ${
                  step.done ? "step-success" : ""
                } flex flex-col ${
                  step.activeform ? "after:text-2xl underline" : ""
                }
                  
                `}
              >
                <p className="hidden lg:block">{step.stepName}</p>
              </li>
            );
          })}
        </ul>

        <form>
          <div className="card  bg-slate-200 text-neutral-content relative">
            <div className="card-actions justify-between m-2 ">
              {currentIndex != 0 ? (
                <button
                  className="btn"
                  onClick={(e) => goToPreviousStep(e, currentIndex)}
                >
                  Back
                </button>
              ) : (
                <p></p>
              )}

              {currentIndex <= 3 ? (
                <button
                  className="btn  btn-success"
                  onClick={(e) => updateStep(e, currentIndex)}
                >
                  Next
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl text-black">
                {
                  stepsdata.filter((step) => step.activeform === true)[0]
                    .stepName
                }
              </h2>

              {
                stepsdata.filter((step) => step.activeform === true)[0]
                  .formFields
              }
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default CtbcForm;
