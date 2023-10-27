import { formStore } from "@/app/store/useCtbcFormStore";
import { useEffect, useState } from "react";
import LoanInfo from "../forms/LoanInfo";
import PersonalInfo from "../forms/PersonalInfo";
import Finances from "../forms/Finances";
import References from "../forms/References";
import GeneratePdf from "../forms/GeneratePdf";
import { Card } from "@mui/material";

import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "@/app/firebase";

const CtbcFormData = () => {
  const {
    clientDataID,
    handleClientSignatureImage,
    clientFormData,
    agentPdfToken,
    clientBy,

    handleDesiredAmount,
    handleLoanTerm,
    handleLoanType,
    handlePurposeOfLoan,
    handleSourceOfLoan,
    handleIsOthers,
    handleOtherSourceName,

    handleGender,
    setTitle,
    setFirstName,
    setMiddleName,
    setLastName,

    setAliasName,
    setBirthDate,
    setPlaceOfBirth,

    setMaritalStatus,
    setSpouseName,
    setIsSpouseWorking,
    setNoOfChild,
    setNoOfDependents,
    setMothersFirstName,
    setMothersMiddleName,
    setMothersLastName,
    setIsPhResident,
    setNationality,
    setSssNo,
    setTinNo,
    setEducationAttain,

    setResidenceType,
    setIsMortization,
    setAmortizationPerMonth,
    setIsRented,
    setRentPerMonth,

    setIsOtherResidency,
    setotherResidensy,

    setCurrentHomeAddress,

    setYrAtPresentAddress,
    setMnAtPresentAddress,

    setResidenceAreaCode,
    setResidensePhone1,
    setResidensePhone2,
    setResidenseMobile,

    setFax,
    setPersonalEmail,
    setPermanentHomeAddress,
    setpermanentYrAtPresentAddress,
    setpermanentMnAtPresentAddress,

    setPermanentResidenceAreaCode,
    setPermanentResidensePhone1,
    setPermanentResidensePhone2,
    setPermanentResidenseMobile,

    setPreviousHomeAddress,
    setYrsAtPreviousHomeAddress,
    setMmAtPreviousHomeAddress,

    setProvincialHomeAddress,
    setProvincialAreaCode,
    setProvincialPhone1,
    setProvincialPhone2,
    setProvincialMobile,

    setSourceOfIncome,
    setIsPermanent,

    setPartOwner,
    setIsPartOwner,
    setPercentOfOwnership,
    setCompanyType,
    setOthersCompanyType,
    setIsOtherCompanyType,

    setEmployerOrBusinessName,
    setNatureOfBusiness,
    setYourPosition,
    setRank,
    setEmployerOrBusinessAddress,
    setYrsAtPresentCompany,
    setMonthsAtPresentCompany,

    setOfficeAreaCode,
    setOfficePhone1,
    setOfficePhone2,
    setOfficeMobile,
    setOfficeFax,
    setOfficeEmail,

    setMonthlyBasicIncome,
    setMonthlyAllowance,
    setMonthlyFamilyIncome,
    setMonthlyHouseHoldExpense,
    setPreviousEmployerOrBusinessName,
    setYrsAtPreviousCompany,
    setMonthsAtPreviousCompany,
    setPreviousCompanyAreaCode,
    setPreviousCompanyPhone1,
    setPreviousCompanyMobile,

    setSpouseEmployerOrBusinessName,
    setspouseTitleOrRank,
    setSpouseMonthlyIncome,
    setspouseOfficeAreaCode,
    setSpouseOfficePhone1,
    setspouseOfficePhone2,
    setSpouseOfficeMobile,
    setSpouseYrsAtPresentCompany,
    setspouseMonthsAtPresentCompany,

    setBankName,
    setBankBranchName,
    setBankAccountType,
    setBankAccountNumber,

    setcreditCardNo,
    setIssuerNameOrBankName,
    setMemberSinceAndLoanGranted,
    setCreditCardExpiryAndLoanMaturity,
    setCardLimitAndLoanAmount,

    setPersonalReferenceName,
    setPersonalReferenceRelation,
    setPersonalReferenceMobile,
    setPersonalReferenceAddress,

    setPersonalReferenceName2,
    setPersonalReferenceRelation2,
    setPersonalReferenceMobile2,
    setPersonalReferenceAddress2,

    setPersonalReferenceName3,
    setPersonalReferenceRelation3,
    setPersonalReferenceMobile3,
    setPersonalReferenceAddress3,

    setClientMobileNo,
    setClientBestTimeToCall,
    setClientHeadEmail,

    handleClientSignature,
  } = formStore((state) => state);

  useEffect(() => {
    handleDesiredAmount(clientFormData?.desiredAmount);
    handleLoanTerm(clientFormData?.loanTerm);
    handleLoanType(clientFormData?.loanType);
    handlePurposeOfLoan(clientFormData?.purposeOfLoan);
    handleSourceOfLoan(clientFormData?.sourceOfLoan);
    handleIsOthers(clientFormData?.isOthers);
    handleOtherSourceName(clientFormData?.otherSourceName);

    handleGender(clientFormData?.gender);
    setTitle(clientFormData?.title);
    setFirstName(clientFormData?.firstName);
    setMiddleName(clientFormData?.middleName);
    setLastName(clientFormData?.lastName);

    setAliasName(clientFormData?.aliasName);
    setBirthDate(clientFormData?.birthdate);
    setPlaceOfBirth(clientFormData?.placeOfBirth);

    setMaritalStatus(clientFormData?.maritalStatus);
    setSpouseName(clientFormData?.spouseName);
    setIsSpouseWorking(clientFormData?.isSpouseWorking);
    setNoOfChild(clientFormData?.noOfChild);
    setNoOfDependents(clientFormData?.noOfDependents);
    setMothersFirstName(clientFormData?.mothersFirstname);
    setMothersMiddleName(clientFormData?.mothersMiddleName);
    setMothersLastName(clientFormData?.mothersLastname);
    setIsPhResident(clientFormData?.isPhResident);
    setNationality(clientFormData?.nationality);
    setSssNo(clientFormData?.sssNo);
    setTinNo(clientFormData?.tinNo);
    setEducationAttain(clientFormData?.educationAttain);

    setResidenceType(clientFormData?.residenceType);
    setIsMortization(clientFormData?.isMortization);
    setAmortizationPerMonth(clientFormData?.amortizationPerMonth);
    setIsRented(clientFormData?.isRented);
    setRentPerMonth(clientFormData?.rentPerMonth);

    setIsOtherResidency(clientFormData?.isOtherResidency);
    setotherResidensy(clientFormData?.otherResidensy);

    setCurrentHomeAddress(clientFormData?.currentHomeAddress);

    setYrAtPresentAddress(clientFormData?.yrAtPresentAddress);
    setMnAtPresentAddress(clientFormData?.mnAtPresentAddress);

    setResidenceAreaCode(clientFormData?.residenceAreaCode);
    setResidensePhone1(clientFormData?.residensePhone1);
    setResidensePhone2(clientFormData?.residensePhone2);
    setResidenseMobile(clientFormData?.residenseMobile);

    setFax(clientFormData?.fax);
    setPersonalEmail(clientFormData?.personalEmail);
    setPermanentHomeAddress(clientFormData?.permanentHomeAddress);
    setpermanentYrAtPresentAddress(clientFormData?.permanentYrAtPresentAddress);
    setpermanentMnAtPresentAddress(clientFormData?.permanentMnAtPresentAddress);

    setPermanentResidenceAreaCode(clientFormData?.permanentResidenceAreaCode);
    setPermanentResidensePhone1(clientFormData?.permanentResidensePhone1);
    setPermanentResidensePhone2(clientFormData?.permanentResidensePhone2);
    setPermanentResidenseMobile(clientFormData?.permanentResidenseMobile);

    setPreviousHomeAddress(clientFormData?.previousHomeAddress);
    setYrsAtPreviousHomeAddress(clientFormData?.yrsAtPreviousHomeAddress);
    setMmAtPreviousHomeAddress(clientFormData?.mmAtPreviousHomeAddress);

    setProvincialHomeAddress(clientFormData?.provincialHomeAddress);
    setProvincialAreaCode(clientFormData?.provincialAreaCode);
    setProvincialPhone1(clientFormData?.provincialPhone1);
    setProvincialPhone2(clientFormData?.provincialPhone2);
    setProvincialMobile(clientFormData?.provincialMobile);

    setSourceOfIncome(clientFormData?.sourceOfIncome);
    setIsPermanent(clientFormData?.isPermanent);

    setPartOwner(clientFormData?.partOwner);
    setIsPartOwner(clientFormData?.isPartOwner);
    setPercentOfOwnership(clientFormData?.percentOfOwnership);
    setCompanyType(clientFormData?.companyType);
    setOthersCompanyType(clientFormData?.othersCompanyType);
    setIsOtherCompanyType(clientFormData?.isOtherCompanyType);

    setEmployerOrBusinessName(clientFormData?.employerOrBusinessName);
    setNatureOfBusiness(clientFormData?.natureOfBusiness);
    setYourPosition(clientFormData?.yourPosition);
    setRank(clientFormData?.rank);
    setEmployerOrBusinessAddress(clientFormData?.employerOrBusinessAddress);
    setYrsAtPresentCompany(clientFormData?.yrsAtPresentCompany);
    setMonthsAtPresentCompany(clientFormData?.monthsAtPresentCompany);

    setOfficeAreaCode(clientFormData?.officeAreaCode);
    setOfficePhone1(clientFormData?.officePhone1);
    setOfficePhone2(clientFormData?.officePhone2);
    setOfficeMobile(clientFormData?.officeMobile);
    setOfficeFax(clientFormData?.officeFax);
    setOfficeEmail(clientFormData?.officeEmail);

    setMonthlyBasicIncome(clientFormData?.monthlyBasicIncome);
    setMonthlyAllowance(clientFormData?.monthlyAllowance);
    setMonthlyFamilyIncome(clientFormData?.monthlyFamilyIncome);
    setMonthlyHouseHoldExpense(clientFormData?.monthlyHouseHoldExpense);
    setPreviousEmployerOrBusinessName(
      clientFormData?.previousEmployerOrBusinessName
    );
    setYrsAtPreviousCompany(clientFormData?.yrsAtPreviousCompany);
    setMonthsAtPreviousCompany(clientFormData?.monthsAtPreviousCompany);
    setPreviousCompanyAreaCode(clientFormData?.previousCompanyAreaCode);
    setPreviousCompanyPhone1(clientFormData?.previousCompanyPhone1);
    setPreviousCompanyMobile(clientFormData?.previousCompanyMobile);

    setSpouseEmployerOrBusinessName(
      clientFormData?.spouseEmployerOrBusinessName
    );
    setspouseTitleOrRank(clientFormData?.spouseTitleOrRank);
    setSpouseMonthlyIncome(clientFormData?.spouseMonthlyIncome);
    setspouseOfficeAreaCode(clientFormData?.spouseOfficeAreaCode);
    setSpouseOfficePhone1(clientFormData?.spouseOfficePhone1);
    setspouseOfficePhone2(clientFormData?.spouseOfficePhone2);
    setSpouseOfficeMobile(clientFormData?.spouseOfficeMobile);
    setSpouseYrsAtPresentCompany(clientFormData?.spouseYrsAtPresentCompany);
    setspouseMonthsAtPresentCompany(
      clientFormData?.spouseMonthsAtPresentCompany
    );

    setBankName(clientFormData?.bankName);
    setBankBranchName(clientFormData?.bankBranchName);
    setBankAccountType(clientFormData?.bankAccountType);
    setBankAccountNumber(clientFormData?.bankAccountNumber);

    setcreditCardNo(clientFormData?.creditCardNo);
    setIssuerNameOrBankName(clientFormData?.issuerNameOrBankName);
    setMemberSinceAndLoanGranted(clientFormData?.memberSinceAndLoanGranted);
    setCreditCardExpiryAndLoanMaturity(
      clientFormData?.creditCardExpiryAndLoanMaturity
    );
    setCardLimitAndLoanAmount(clientFormData?.cardLimitAndLoanAmount);

    setPersonalReferenceName(clientFormData?.personalReferenceName);
    setPersonalReferenceRelation(clientFormData?.personalReferenceRelation);
    setPersonalReferenceMobile(clientFormData?.personalReferenceMobile);
    setPersonalReferenceAddress(clientFormData?.personalReferenceAddress);

    setPersonalReferenceName2(clientFormData?.personalReferenceName2);
    setPersonalReferenceRelation2(clientFormData?.personalReferenceRelation2);
    setPersonalReferenceMobile2(clientFormData?.personalReferenceMobile2);
    setPersonalReferenceAddress2(clientFormData?.personalReferenceAddress2);

    setPersonalReferenceName3(clientFormData?.personalReferenceName3);
    setPersonalReferenceRelation3(clientFormData?.personalReferenceRelation3);
    setPersonalReferenceMobile3(clientFormData?.personalReferenceMobile3);
    setPersonalReferenceAddress3(clientFormData?.personalReferenceAddress3);

    setClientMobileNo(clientFormData?.clientMobileNo);
    setClientBestTimeToCall(clientFormData?.clientBestTimeTocall);
    setClientHeadEmail(clientFormData?.clientHeadEmail);

    handleClientSignature(clientFormData?.clientSignature);

    listAll(ref(storage, "client-signatures")).then((res) => {
      console.log(clientFormData?.clientSignature);
      res.items
        .filter((item) => item.name == clientFormData?.clientSignature)
        .forEach((item) =>
          getDownloadURL(item).then((url) => handleClientSignatureImage(url))
        );
    });
  }, [clientFormData]);

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
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal container mx-1 relative">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-md btn-circle btn-error absolute top-1 right-0 z-50">
            ✕
          </button>
        </form>
        <div className="modal-box w-full max-w-full">
          <Card
            sx={{
              padding: 1,
              display: "flex",
              flexDirection: "column",
            }}
            className="bg-slate-50"
          >
            <h1 className="text-3xl sm:text-5xl text-center my-2">
              CTBC APPLICATION FORM
            </h1>
            <h3 className="font-bold text-lg">
              Your client data! {clientDataID}
              Client by: {clientBy}
            </h3>

            <div className="flex flex-col sm:flex-col  w-full">
              <ul className="steps my-5">
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
        </div>
      </dialog>
    </div>
  );
};
export default CtbcFormData;
