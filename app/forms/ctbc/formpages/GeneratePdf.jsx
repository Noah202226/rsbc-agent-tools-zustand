import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";

import download from "downloadjs";
import { formStore } from "../../../store/useCtbcFormStore";
import { Stack } from "@mui/material";
import Image from "next/image";

const pdfFile = "/rotated.pdf";
const checkIcon = "/check.png";

const GeneratePdf = () => {
  //   Writing Configuration
  const style = {
    color: rgb(0.0, 0.0, 0.0),
    rotate: degrees(90),
  };

  const {
    desiredAmount,
    loanTerm,
    loanType,
    purposeOfLoan,
    sourceOfLoan,
    agencyName,
    branchName,
    gender,
    title,
    firstName,
    middleName,
    lastName,
    aliasName,
    birthdate,
    placeOfBirth,
    maritalStatus,

    spouseName,
    isSpouseWorking,
    noOfChild,
    noOfDependents,
    mothersFirstname,
    mothersMiddleName,
    mothersLastname,

    isPhResident,
    nationality,
    sssNo,
    educationAttain,

    residenceType,
    otherResidensy,
    currentHomeAddress,
    yrAtPresentAddress,
    mnAtPresentAddress,
    residenceAreaCode,
    residensePhone1,
    residensePhone2,
    residenseMobile,
    fax,
    personalEmail,
    permanentHomeAddress,
    permanentYrAtPresentAddress,
    permanentMnAtPresentAddress,
    permanentResidenceAreaCode,
    permanentResidensePhone1,
    permanentResidensePhone2,
    permanentResidenseMobile,

    previousHomeAddress,
    yrsAtPreviousHomeAddress,
    mmAtPreviousHomeAddress,

    provincialHomeAddress,
    provincialAreaCode,
    provincialPhone1,
    provincialPhone2,
    provincialMobile,

    sourceOfIncome,
    isPermanent,
    partOwner,
    percentOfOwnership,
    companyType,
    othersCompanyType,
    employerOrBusinessName,
    natureOfBusiness,
    yourPosition,
    rank,
    employerOrBusinessAddress,
    yrsAtPresentCompany,
    monthsAtPresentCompany,
    officeAreaCode,
    officePhone1,
    officePhone2,
    officeMobile,
    officeFax,
    officeEmail,
    monthlyBasicIncome,
    monthlyAllowance,
    monthlyFamilyIncome,
    monthlyHouseHoldExpense,
    previousEmployerOrBusinessName,
    yrsAtPreviousCompany,
    monthsAtPreviousCompany,
    previousCompanyAreaCode,
    previousCompanyPhone1,
    previousCompanyMobile,
    spouseEmployerOrBusinessName,
    spouseTitleOrRank,
    spouseMonthlyIncome,
    spouseOfficeAreaCode,
    spouseOfficePhone1,
    spouseOfficePhone2,
    spouseOfficeMobile,
    spouseYrsAtPresentCompany,
    spouseMonthsAtPresentCompany,
    bankName,
    bankBranchName,
    bankAccountType,
    bankAccountNumber,
    creditCardNo,
    issuerNameOrBankName,
    memberSinceAndLoanGranted,
    creditCardExpiryAndLoanMaturity,
    cardLimitAndLoanAmount,
    personalReferenceName,
    personalReferenceRelation,
    personalReferenceMobile,
    personalReferenceAddress,
    personalReferenceName2,
    personalReferenceRelation2,
    personalReferenceMobile2,
    personalReferenceAddress2,
    personalReferenceName3,
    personalReferenceRelation3,
    personalReferenceMobile3,
    personalReferenceAddress3,

    clientMobileNo,
    setClientMobileNo,
    clientBestTimeTocall,
    setClientBestTimeToCall,
    clientHeadEmail,
    setClientHeadEmail,
  } = formStore((state) => state);

  const modifyPdf = async (e) => {
    e.preventDefault();

    if (desiredAmount === "" || desiredAmount === undefined) {
      alert("amount is required");
      return;
    }

    const response = await fetch(pdfFile); // Update the file path accordingly
    const pdfBytes = await response.arrayBuffer();

    const imageResponce = await fetch(checkIcon);
    const checkImageBytes = await imageResponce.arrayBuffer();

    const pdfDoc = await PDFDocument.load(pdfBytes, { updateMetadata: false });
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    firstPage.setRotation(degrees(90));

    // Embed image
    const checkImage = await pdfDoc.embedPng(checkImageBytes);

    // Amount
    firstPage.drawText(desiredAmount.toLocaleString(), {
      x: 175,
      y: 20,
      size: 12,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Loan Term
    if (loanTerm == "12") {
      firstPage.drawImage(checkImage, {
        x: 159,
        y: 81,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanTerm == "18") {
      firstPage.drawImage(checkImage, {
        x: 170,
        y: 81,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanTerm == "24") {
      firstPage.drawImage(checkImage, {
        x: 180,
        y: 81,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanTerm == "36") {
      firstPage.drawImage(checkImage, {
        x: 190.5,
        y: 81,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Loan Type
    if (loanType == "new-application") {
      firstPage.drawImage(checkImage, {
        x: 159,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanType == "with-existing-loan") {
      firstPage.drawImage(checkImage, {
        x: 170,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanType == "with-previous-loan") {
      firstPage.drawImage(checkImage, {
        x: 180,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanType == "with-previous-application") {
      firstPage.drawImage(checkImage, {
        x: 190.5,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Purpose of Loan
    if (purposeOfLoan == "appliance") {
      firstPage.drawImage(checkImage, {
        x: 216,
        y: 12.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "balance-transfer") {
      firstPage.drawImage(checkImage, {
        x: 226,
        y: 12.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "education") {
      firstPage.drawImage(checkImage, {
        x: 236,
        y: 12.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "health-and-hospitalization") {
      firstPage.drawImage(checkImage, {
        x: 216,
        y: 73.1,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "home-improvement") {
      firstPage.drawImage(checkImage, {
        x: 226,
        y: 73.1,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "livelihood-and-working-capital") {
      firstPage.drawImage(checkImage, {
        x: 236.8,
        y: 73.1,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "travel") {
      firstPage.drawImage(checkImage, {
        x: 216,
        y: 152.6,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "personal") {
      firstPage.drawImage(checkImage, {
        x: 226,
        y: 153,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Source of Loan
    if (sourceOfLoan !== null || undefined) {
      firstPage.drawImage(checkImage, {
        x: 271,
        y: 143,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });

      firstPage.drawText("ORC RSBC".toUpperCase(), {
        x: 260,
        y: 72,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });

      firstPage.drawText("ORC RSBC".toUpperCase(), {
        x: 271,
        y: 72,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });

      firstPage.drawText("N/A", {
        x: 282,
        y: 120,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Gender
    if (gender == "male") {
      firstPage.drawImage(checkImage, {
        x: 296,
        y: 50,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (gender == "female") {
      firstPage.drawImage(checkImage, {
        x: 296,
        y: 76.3,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Title
    if (title == "mr") {
      firstPage.drawImage(checkImage, {
        x: 308.5,
        y: 37.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (title == "mrs") {
      firstPage.drawImage(checkImage, {
        x: 308.5,
        y: 64.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (title == "ms") {
      firstPage.drawImage(checkImage, {
        x: 308.5,
        y: 95,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Full name
    if (firstName.length > 10) {
      firstPage.drawText(firstName.toUpperCase(), {
        x: 330,
        y: 11.5,
        size: 7,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(middleName.toUpperCase(), {
        x: 330,
        y: 80,
        size: 7,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(lastName.toUpperCase(), {
        x: 330,
        y: 135,
        size: 7,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(firstName.toUpperCase(), {
        x: 330,
        y: 15,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(middleName.toUpperCase(), {
        x: 330,
        y: 80,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(lastName.toUpperCase(), {
        x: 330,
        y: 135,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Others Name or Alias
    if (aliasName === "") {
      firstPage.drawText("N/A", {
        x: 355.8,
        y: 60,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(aliasName.toLocaleUpperCase(), {
        x: 355.8,
        y: 60,
        size: 10,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Date of Birth
    firstPage.drawText(birthdate, {
      x: 383.8,
      y: 18,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Birth Place
    if (placeOfBirth.length < 18) {
      firstPage.drawText(placeOfBirth.toLocaleUpperCase(), {
        x: 383.8,
        y: 72,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Find the index of the first space character
      const firstSpaceIndex = placeOfBirth.indexOf(" ");

      if (firstSpaceIndex !== -1) {
        // Find the index of the second space character starting from after the first space
        const secondSpaceIndex = placeOfBirth.indexOf(" ", firstSpaceIndex + 1);

        if (secondSpaceIndex !== -1) {
          console.log("Index of the second space character:", secondSpaceIndex);

          const firstline = placeOfBirth.slice(0, secondSpaceIndex);
          const lastline = placeOfBirth.slice(
            secondSpaceIndex,
            placeOfBirth.length
          );
          firstPage.drawText(firstline.toLocaleUpperCase(), {
            x: 379.8,
            y: 70,
            size: 5,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
          firstPage.drawText(lastline.toUpperCase(), {
            x: 388.8,
            y: 68.5,
            size: 5,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
        } else {
          console.log("Second space not found in the text.");
        }
      } else {
        console.log("First space not found in the text.");
      }
    }

    // Marital Status
    if (maritalStatus == "single") {
      firstPage.drawImage(checkImage, {
        x: 379.5,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (maritalStatus == "married") {
      firstPage.drawImage(checkImage, {
        x: 390,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (maritalStatus == "widowed") {
      firstPage.drawImage(checkImage, {
        x: 379.5,
        y: 156,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (maritalStatus == "seperated") {
      firstPage.drawImage(checkImage, {
        x: 390,
        y: 156.3,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Spouse name
    if (spouseName === "") {
      firstPage.drawText("N/A", {
        x: 410,
        y: 46,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(spouseName.toLocaleUpperCase(), {
        x: 410,
        y: 46,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Spouse working
    if (isSpouseWorking == "yes") {
      firstPage.drawImage(checkImage, {
        x: 424.5,
        y: 54,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (isSpouseWorking == "no") {
      firstPage.drawImage(checkImage, {
        x: 424.8,
        y: 74.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // No of Children
    firstPage.drawText(noOfChild, {
      x: 425.2,
      y: 125,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // No of dependent
    firstPage.drawText(noOfDependents, {
      x: 425.2,
      y: 180,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Mothers Full Name
    firstPage.drawText(mothersFirstname.toLocaleUpperCase(), {
      x: 455,
      y: 20,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(mothersMiddleName.toLocaleUpperCase(), {
      x: 455,
      y: 85,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(mothersLastname.toLocaleUpperCase(), {
      x: 455,
      y: 140,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Philippines Resident
    if (isPhResident == "yes") {
      firstPage.drawImage(checkImage, {
        x: 475,
        y: 61.4,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (isPhResident == "no") {
      firstPage.drawImage(checkImage, {
        x: 475,
        y: 82,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Nationality
    firstPage.drawText(nationality.toLocaleUpperCase(), {
      x: 479,
      y: 129,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // SSS No.
    firstPage.drawText(sssNo, {
      x: 496,
      y: 18,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // TIN
    firstPage.drawText(sssNo, {
      x: 496,
      y: 120,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Education Attainment
    if (educationAttain == "high-school") {
      firstPage.drawImage(checkImage, {
        x: 516,
        y: 12.8,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (educationAttain == "college-level") {
      firstPage.drawImage(checkImage, {
        x: 516,
        y: 53.7,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (educationAttain == "college-graduate") {
      firstPage.drawImage(checkImage, {
        x: 516,
        y: 97.6,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (educationAttain == "post-graduate") {
      firstPage.drawImage(checkImage, {
        x: 516,
        y: 149.7,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Residensy Type
    if (residenceType == "owned-not-mortgaged") {
      firstPage.drawImage(checkImage, {
        x: 107,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (residenceType == "owned-mortgaged") {
      firstPage.drawImage(checkImage, {
        x: 117.5,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });

      if (amortizationPerMonth === "") {
        firstPage.drawText("N/A", {
          x: 117,
          y: 325,
          size: 12,
          font: helveticaFont,
          color: style.color,
          rotate: style.rotate,
        });
      } else {
        firstPage.drawText(amortizationPerMonth, {
          x: 117,
          y: 325,
          size: 8,
          font: helveticaFont,
          color: style.color,
          rotate: style.rotate,
        });
      }
    } else if (residenceType == "rented") {
      firstPage.drawImage(checkImage, {
        x: 128,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });

      if (rentPerMonth === "") {
        firstPage.drawText("N/A", {
          x: 128,
          y: 315,
          size: 12,
          font: helveticaFont,
          color: style.color,
          rotate: style.rotate,
        });
      } else {
        firstPage.drawText(rentPerMonth, {
          x: 128,
          y: 315,
          size: 8,
          font: helveticaFont,
          color: style.color,
          rotate: style.rotate,
        });
      }
    } else if (residenceType == "used-free") {
      firstPage.drawImage(checkImage, {
        x: 138.3,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (residenceType == "staying-with-parents") {
      firstPage.drawImage(checkImage, {
        x: 149,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (residenceType == "staying-with-relatives") {
      firstPage.drawImage(checkImage, {
        x: 159.4,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (residenceType == "others") {
      firstPage.drawImage(checkImage, {
        x: 170,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(otherResidensy, {
        x: 170,
        y: 233,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }
    if (
      residenceType != "others" &&
      residenceType != "rented" &&
      residenceType != "owned-mortgaged"
    ) {
      firstPage.drawText("N/A", {
        x: 170.5,
        y: 238,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });

      firstPage.drawText("N/A", {
        x: 128.5,
        y: 315,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });

      firstPage.drawText("N/A", {
        x: 117,
        y: 325,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Current Home Address
    if (currentHomeAddress.length < 18) {
      firstPage.drawText(currentHomeAddress, {
        x: 205,
        y: 215,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Count spaces
      var spaceCount = currentHomeAddress.split(" ").length - 1;

      console.log("Number of spaces:", spaceCount);
      // Find the index of the first space character

      const halfSpaceIndex = currentHomeAddress.indexOf(" ", spaceCount + 20);
      const thirdSpaceIndex = currentHomeAddress.indexOf(" ", spaceCount + 40);

      console.log("halfSpaceIndex:", halfSpaceIndex);
      console.log("thirdSpaceIndex:", thirdSpaceIndex);

      const firstline = currentHomeAddress.slice(0, halfSpaceIndex);
      const secondline = currentHomeAddress.slice(
        halfSpaceIndex,
        thirdSpaceIndex
      );
      const lastline = currentHomeAddress.slice(
        thirdSpaceIndex,
        currentHomeAddress.length
      );
      firstPage.drawText(firstline.toUpperCase(), {
        x: 198,
        y: 208,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(secondline.toUpperCase(), {
        x: 208,
        y: 206,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(lastline.toUpperCase(), {
        x: 218,
        y: 206,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Year at Home Address
    firstPage.drawText(yrAtPresentAddress, {
      x: 231.5,
      y: 315,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Month at Home Address
    firstPage.drawText(mnAtPresentAddress, {
      x: 231.5,
      y: 356,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Area Code at Home Address
    firstPage.drawText(residenceAreaCode, {
      x: 265,
      y: 212,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    if (residensePhone1 === "") {
      firstPage.drawText("N/A", {
        x: 265,
        y: 252,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(residensePhone1, {
        x: 265,
        y: 252,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    if (residensePhone1 === "") {
      firstPage.drawText("N/A", {
        x: 265,
        y: 290,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(residensePhone2, {
        x: 265,
        y: 290,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    firstPage.drawText(residenseMobile, {
      x: 265,
      y: 338,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Fax
    if (fax === "") {
      firstPage.drawText("N/A", {
        x: 282,
        y: 225,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(fax, {
        x: 282,
        y: 215,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Personal Email
    firstPage.drawText(personalEmail, {
      x: 282,
      y: 275,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Permanent Home Address
    if (permanentHomeAddress.length < 18) {
      firstPage.drawText(permanentHomeAddress, {
        x: 318,
        y: 215,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Count spaces
      var spaceCount = permanentHomeAddress.split(" ").length - 1;

      console.log("Number of spaces:", spaceCount);
      // Find the index of the first space character

      const halfSpaceIndex = permanentHomeAddress.indexOf(" ", spaceCount + 20);
      const thirdSpaceIndex = permanentHomeAddress.indexOf(
        " ",
        spaceCount + 40
      );

      console.log("halfSpaceIndex:", halfSpaceIndex);
      console.log("thirdSpaceIndex:", thirdSpaceIndex);

      const firstline = permanentHomeAddress.slice(0, halfSpaceIndex);
      const secondline = permanentHomeAddress.slice(
        halfSpaceIndex,
        thirdSpaceIndex
      );
      const lastline = permanentHomeAddress.slice(
        thirdSpaceIndex,
        permanentHomeAddress.length
      );
      firstPage.drawText(firstline.toUpperCase(), {
        x: 308,
        y: 208,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(secondline.toUpperCase(), {
        x: 318,
        y: 206,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(lastline.toUpperCase(), {
        x: 328,
        y: 206,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Year at Home Address
    firstPage.drawText(permanentYrAtPresentAddress, {
      x: 341.2,
      y: 315,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Month at Home Address
    firstPage.drawText(permanentMnAtPresentAddress, {
      x: 341.2,
      y: 356,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Area Code at Permanent Home Address
    firstPage.drawText(permanentResidenceAreaCode, {
      x: 375,
      y: 212,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    if (permanentResidensePhone1 === "") {
      firstPage.drawText("N/A", {
        x: 376,
        y: 252,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(permanentResidensePhone1, {
        x: 375,
        y: 252,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    if (permanentResidensePhone2 === "") {
      firstPage.drawText("N/A", {
        x: 376,
        y: 290,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(permanentResidensePhone2, {
        x: 375,
        y: 290,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    firstPage.drawText(permanentResidenseMobile, {
      x: 375,
      y: 338,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Previous Home Address
    if (previousHomeAddress.length < 18) {
      firstPage.drawText(previousHomeAddress, {
        x: 410,
        y: 215,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Count spaces
      var spaceCount = previousHomeAddress.split(" ").length - 1;

      console.log("Number of spaces:", spaceCount);
      // Find the index of the first space character

      const halfSpaceIndex = previousHomeAddress.indexOf(" ", spaceCount + 20);
      const thirdSpaceIndex = previousHomeAddress.indexOf(" ", spaceCount + 40);

      console.log("halfSpaceIndex:", halfSpaceIndex);
      console.log("thirdSpaceIndex:", thirdSpaceIndex);

      const firstline = previousHomeAddress.slice(0, halfSpaceIndex);
      const secondline = previousHomeAddress.slice(
        halfSpaceIndex,
        thirdSpaceIndex
      );
      const lastline = previousHomeAddress.slice(
        thirdSpaceIndex,
        previousHomeAddress.length
      );
      firstPage.drawText(firstline.toUpperCase(), {
        x: 402,
        y: 208,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(secondline.toUpperCase(), {
        x: 412,
        y: 206,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(lastline.toUpperCase(), {
        x: 422,
        y: 206,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Year at Previous Address
    firstPage.drawText(yrsAtPreviousHomeAddress, {
      x: 437,
      y: 315,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Month at Previous Address
    firstPage.drawText(mmAtPreviousHomeAddress, {
      x: 437,
      y: 356,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Provincial Home Address
    if (provincialHomeAddress.length < 18) {
      firstPage.drawText(provincialHomeAddress, {
        x: 475,
        y: 215,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Count spaces
      var spaceCount = provincialHomeAddress.split(" ").length - 1;

      console.log("Number of spaces:", spaceCount);
      // Find the index of the first space character

      const halfSpaceIndex = provincialHomeAddress.indexOf(
        " ",
        spaceCount + 20
      );
      const thirdSpaceIndex = provincialHomeAddress.indexOf(
        " ",
        spaceCount + 40
      );

      console.log("halfSpaceIndex:", halfSpaceIndex);
      console.log("thirdSpaceIndex:", thirdSpaceIndex);

      const firstline = provincialHomeAddress.slice(0, halfSpaceIndex);
      const secondline = provincialHomeAddress.slice(
        halfSpaceIndex,
        thirdSpaceIndex
      );
      const lastline = provincialHomeAddress.slice(
        thirdSpaceIndex,
        provincialHomeAddress.length
      );
      firstPage.drawText(firstline.toUpperCase(), {
        x: 468,
        y: 208,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(secondline.toUpperCase(), {
        x: 478,
        y: 206,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(lastline.toUpperCase(), {
        x: 488,
        y: 206,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Area Code at Provincial Home Address
    firstPage.drawText(provincialAreaCode, {
      x: 516.8,
      y: 212,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    if (provincialPhone1 === "") {
      firstPage.drawText("N/A", {
        x: 519,
        y: 252,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(provincialPhone1, {
        x: 516.8,
        y: 252,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    if (provincialPhone2 === "") {
      firstPage.drawText("N/A", {
        x: 519,
        y: 290,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(provincialPhone2, {
        x: 516.8,
        y: 290,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    firstPage.drawText(provincialMobile, {
      x: 516.8,
      y: 338,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Work and finances
    if (sourceOfIncome == "employment") {
      firstPage.drawImage(checkImage, {
        x: 120.6,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (sourceOfIncome == "business") {
      firstPage.drawImage(checkImage, {
        x: 131.2,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Is permanent
    if (isPermanent == "yes") {
      firstPage.drawImage(checkImage, {
        x: 120.7,
        y: 461,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (isPermanent == "no") {
      firstPage.drawImage(checkImage, {
        x: 120.8,
        y: 481.7,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Part Owner
    if (partOwner == "yes") {
      firstPage.drawImage(checkImage, {
        x: 120.7,
        y: 507,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(`${percentOfOwnership}%`, {
        x: 133,
        y: 550,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else if (partOwner == "no") {
      firstPage.drawImage(checkImage, {
        x: 120.7,
        y: 527.6,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });

      firstPage.drawText("N/A", {
        x: 133,
        y: 550,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Company Type
    if (companyType == "private") {
      firstPage.drawImage(checkImage, {
        x: 155,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(`N/A`, {
        x: 154.5,
        y: 468,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else if (companyType == "government") {
      firstPage.drawImage(checkImage, {
        x: 167.3,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(`N/A`, {
        x: 154.5,
        y: 468,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else if (companyType == "others") {
      firstPage.drawImage(checkImage, {
        x: 155,
        y: 444.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(othersCompanyType, {
        x: 154.5,
        y: 468,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Employer or Business Name
    if (employerOrBusinessName.length < 18) {
      firstPage.drawText(employerOrBusinessName.toUpperCase(), {
        x: 160,
        y: 515,
        size: 7,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Find the index of the first space character
      const firstSpaceIndex = employerOrBusinessName.indexOf(" ");

      if (firstSpaceIndex !== -1) {
        // Find the index of the second space character starting from after the first space
        const secondSpaceIndex = employerOrBusinessName.indexOf(
          " ",
          firstSpaceIndex + 1
        );

        if (secondSpaceIndex !== -1) {
          console.log("Index of the second space character:", secondSpaceIndex);

          const firstline = employerOrBusinessName.slice(
            0,
            secondSpaceIndex + 10
          );
          const lastline = employerOrBusinessName.slice(
            secondSpaceIndex,
            employerOrBusinessName.length
          );
          firstPage.drawText(firstline.toLocaleUpperCase(), {
            x: 155,
            y: 508,
            size: 5,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
          firstPage.drawText(lastline.toUpperCase(), {
            x: 165,
            y: 506,
            size: 5,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
        } else {
          console.log("Second space not found in the text.");
        }
      } else {
        console.log("First space not found in the text.");
      }
    }

    firstPage.drawText(natureOfBusiness.toLocaleUpperCase(), {
      x: 186.5,
      y: 415,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(yourPosition.toLocaleUpperCase(), {
      x: 186.5,
      y: 506,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Company Type
    if (rank == "staff") {
      firstPage.drawImage(checkImage, {
        x: 208.5,
        y: 407.6,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "junior-officer") {
      firstPage.drawImage(checkImage, {
        x: 219,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "middle-management") {
      firstPage.drawImage(checkImage, {
        x: 229.6,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "production-worker") {
      firstPage.drawImage(checkImage, {
        x: 240.2,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "service-employee") {
      firstPage.drawImage(checkImage, {
        x: 208.5,
        y: 478.4,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "president") {
      firstPage.drawImage(checkImage, {
        x: 219,
        y: 478.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "vise-president") {
      firstPage.drawImage(checkImage, {
        x: 229.6,
        y: 478.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "senior-manager") {
      firstPage.drawImage(checkImage, {
        x: 240.2,
        y: 478.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Employer / Business Address
    if (employerOrBusinessAddress.length < 18) {
      firstPage.drawText(employerOrBusinessAddress, {
        x: 280,
        y: 415,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Count spaces
      var spaceCount = employerOrBusinessAddress.split(" ").length - 1;

      console.log("Number of spaces:", spaceCount);
      // Find the index of the first space character

      const halfSpaceIndex = employerOrBusinessAddress.indexOf(
        " ",
        spaceCount + 20
      );
      const thirdSpaceIndex = employerOrBusinessAddress.indexOf(
        " ",
        spaceCount + 40
      );

      console.log("halfSpaceIndex:", halfSpaceIndex);
      console.log("thirdSpaceIndex:", thirdSpaceIndex);

      const firstline = employerOrBusinessAddress.slice(0, halfSpaceIndex);
      const secondline = employerOrBusinessAddress.slice(
        halfSpaceIndex,
        thirdSpaceIndex
      );
      const lastline = employerOrBusinessAddress.slice(
        thirdSpaceIndex,
        employerOrBusinessAddress.length
      );
      firstPage.drawText(firstline.toUpperCase(), {
        x: 280,
        y: 408,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(secondline.toUpperCase(), {
        x: 290,
        y: 406,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(lastline.toUpperCase(), {
        x: 300,
        y: 406,
        size: 8.5,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Years and month at present company
    firstPage.drawText(yrsAtPresentCompany, {
      x: 312,
      y: 515,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(monthsAtPresentCompany, {
      x: 312,
      y: 556,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Area Code at Present company
    firstPage.drawText(officeAreaCode, {
      x: 345,
      y: 412,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(officePhone1, {
      x: 345,
      y: 442,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(officePhone2, {
      x: 345,
      y: 486,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(officeMobile, {
      x: 345,
      y: 522,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Office fax and email
    firstPage.drawText(officeFax, {
      x: 363,
      y: 412,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(officeEmail, {
      x: 363,
      y: 480,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Monthly Income
    firstPage.drawText(monthlyBasicIncome, {
      x: 384,
      y: 428,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(monthlyAllowance, {
      x: 384,
      y: 488,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(monthlyFamilyIncome, {
      x: 384,
      y: 554,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(monthlyHouseHoldExpense, {
      x: 400.5,
      y: 470,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    firstPage.drawText(previousEmployerOrBusinessName, {
      x: 415.5,
      y: 481,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(yrsAtPreviousCompany, {
      x: 427,
      y: 515,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(monthsAtPreviousCompany, {
      x: 427,
      y: 555,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Area code at previous company
    firstPage.drawText(previousCompanyAreaCode, {
      x: 458.8,
      y: 415,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(previousCompanyPhone1, {
      x: 458.8,
      y: 458,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(previousCompanyMobile, {
      x: 458.8,
      y: 523,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Spouse Details
    if (spouseEmployerOrBusinessName === "") {
      firstPage.drawText(`N/A`, {
        x: 498,
        y: 415,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(spouseEmployerOrBusinessName.toLocaleUpperCase(), {
        x: 498,
        y: 415,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    if (spouseTitleOrRank === "") {
      firstPage.drawText(`N/A`, {
        x: 498,
        y: 523,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(spouseTitleOrRank.toLocaleUpperCase(), {
        x: 498,
        y: 523,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    if (spouseMonthlyIncome === "") {
      firstPage.drawText(`N/A`, {
        x: 515,
        y: 450,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(spouseMonthlyIncome, {
        x: 515,
        y: 450,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Spouse Office Contact
    if (spouseMonthlyIncome === "") {
      firstPage.drawText(`N/A`, {
        x: 116.9,
        y: 610,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(spouseOfficeAreaCode, {
        x: 115.2,
        y: 615,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    if (spouseOfficePhone1 === "") {
      firstPage.drawText(`N/A`, {
        x: 116.9,
        y: 640,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(spouseOfficePhone1, {
        x: 115.2,
        y: 640,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    if (spouseOfficePhone2 === "") {
      firstPage.drawText(`N/A`, {
        x: 116.9,
        y: 685,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(spouseOfficePhone2, {
        x: 115.2,
        y: 685,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    if (spouseOfficeMobile === "") {
      firstPage.drawText(`N/A`, {
        x: 116.9,
        y: 730,
        size: 12,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(spouseOfficeMobile, {
        x: 115.2,
        y: 730,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Spouse year and month at company
    firstPage.drawText(spouseYrsAtPresentCompany, {
      x: 129,
      y: 713,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(spouseMonthsAtPresentCompany, {
      x: 129,
      y: 754,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Bank References
    firstPage.drawText(bankName.toUpperCase(), {
      x: 188,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    // Here
    if (bankBranchName.length < 12) {
      console.log("bankBranchName is less than 12C");
      firstPage.drawText(bankBranchName.toUpperCase(), {
        x: 188,
        y: 700,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      console.log("bankBranchName is greater than 12C", bankBranchName);
      // Find the index of the first space character
      const firstSpaceIndex = bankBranchName.indexOf(" ");

      if (firstSpaceIndex !== -1) {
        // Find the index of the second space character starting from after the first space
        const secondSpaceIndex = bankBranchName.indexOf(
          " ",
          firstSpaceIndex + 1
        );

        if (secondSpaceIndex !== -1) {
          console.log("Index of the second space character:", secondSpaceIndex);

          const firstline = bankBranchName.slice(0, secondSpaceIndex);
          const lastline = bankBranchName.slice(
            secondSpaceIndex,
            bankBranchName.length
          );
          firstPage.drawText(firstline.toLocaleUpperCase(), {
            x: 183,
            y: 712,
            size: 6,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
          firstPage.drawText(lastline.toUpperCase(), {
            x: 188,
            y: 711,
            size: 6,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
        } else {
          console.log("Second space not found in the text.");

          firstPage.drawText(bankBranchName.toLocaleUpperCase(), {
            x: 188,
            y: 712,
            size: 6,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
        }
      } else {
        console.log("First space not found in the text.");
      }
    }

    firstPage.drawText(bankAccountType.toUpperCase(), {
      x: 230,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(bankAccountNumber, {
      x: 230.2,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Credit Card Own / Others loans
    firstPage.drawText(creditCardNo, {
      x: 287,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(issuerNameOrBankName.toLocaleUpperCase(), {
      x: 287,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(memberSinceAndLoanGranted, {
      x: 328,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(creditCardExpiryAndLoanMaturity, {
      x: 328,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(cardLimitAndLoanAmount, {
      x: 372.2,
      y: 680,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Personal / Trade Reference 1
    firstPage.drawText(personalReferenceName.toLocaleUpperCase(), {
      x: 428.5,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceRelation.toLocaleUpperCase(), {
      x: 428.5,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceMobile, {
      x: 485,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceAddress.toLocaleUpperCase(), {
      x: 485,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Personal / Trade Reference 2
    firstPage.drawText(personalReferenceName2.toLocaleUpperCase(), {
      x: 440,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceRelation2.toLocaleUpperCase(), {
      x: 440,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceMobile2, {
      x: 498.5,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceAddress2.toLocaleUpperCase(), {
      x: 498.5,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Personal / Trade Reference 3
    firstPage.drawText(personalReferenceName3.toLocaleUpperCase(), {
      x: 455,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceRelation3.toLocaleUpperCase(), {
      x: 455,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceMobile3, {
      x: 510,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceAddress3.toLocaleUpperCase(), {
      x: 510,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Client Contact
    firstPage.drawText(`CLIENT MOBILE NUMBER: ${permanentResidenseMobile}`, {
      x: 25,
      y: 220,
      size: 18,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(
      `CLIENT BEST TIME TO CALL: ${clientBestTimeTocall.toLocaleUpperCase()}`,
      {
        x: 45,
        y: 220,
        size: 14,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      }
    );
    firstPage.drawText(`HRD HEAD EMAIL AD FOR EV: ${clientHeadEmail}`, {
      x: 65,
      y: 220,
      size: 16,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Save modifications
    const updatedPdfBytes = await pdfDoc.save();

    // Download Updated PDF
    download(
      updatedPdfBytes,
      `CTBC FORM -${firstName} ${lastName}.pdf`,
      "application/pdf"
    );
  };
  return (
    <div className="w-full">
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        my={2}
        width={"100%"}
        justifyContent={"space-around"}
      >
        {/* <div className="form-control">
          <label className="input-group input-group-vertical">
            <span>Client Mobile No.</span>
            <input
              type="number"
              placeholder="Mobile no...."
              className="input input-bordered"
              value={clientMobileNo}
              onChange={(e) => setClientMobileNo(e.target.value)}
            />
          </label>
        </div> */}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your best time to call?</span>
            <span className="label-text-alt"></span>
          </label>
          <input
            type="text"
            placeholder="Time..."
            value={clientBestTimeTocall}
            onChange={(e) => setClientBestTimeToCall(e.target.value)}
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">HR Email</span>
            <span className="label-text-alt"></span>
          </label>
          <input
            type="email"
            placeholder="Email..."
            value={clientHeadEmail}
            onChange={(e) => setClientHeadEmail(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </Stack>

      <button
        type="submit"
        className="btn btn-lg btn-neutral w-1/2 my-16"
        onClick={modifyPdf}
      >
        Generate PDF
        <Image className="ml-4" src={"/inbox.svg"} width={40} height={40} />
      </button>
    </div>
  );
};
export default GeneratePdf;
