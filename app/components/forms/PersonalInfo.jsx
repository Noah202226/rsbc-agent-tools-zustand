import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { formStore } from "../../store/useCtbcFormStore";
import { useEffect } from "react";

const PersonalInfo = () => {
  const {
    gender,
    handleGender,
    title,
    setTitle,
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    lastName,
    setLastName,

    aliasName,
    setAliasName,
    birthdate,
    setBirthDate,
    placeOfBirth,
    setPlaceOfBirth,

    maritalStatus,
    setMaritalStatus,
    spouseName,
    setSpouseName,
    isSpouseWorking,
    setIsSpouseWorking,

    noOfChild,
    setNoOfChild,
    noOfDependents,
    setNoOfDependents,
    mothersFirstname,
    setMothersFirstName,
    mothersMiddleName,
    setMothersMiddleName,
    mothersLastname,
    setMothersLastName,
    isPhResident,
    setIsPhResident,

    nationality,
    setNationality,
    sssNo,
    setSssNo,
    tinNo,
    setTinNo,
    educationAttain,
    setEducationAttain,

    residenceType,
    setResidenceType,

    isAmortization,
    setIsMortization,
    amortizationPerMonth,
    setAmortizationPerMonth,

    isRented,
    setIsRented,
    rentPerMonth,
    setRentPerMonth,

    isOtherResidency,
    setIsOtherResidency,
    otherResidensy,
    setotherResidensy,

    currentHomeAddress,
    setCurrentHomeAddress,

    yrAtPresentAddress,
    setYrAtPresentAddress,
    mnAtPresentAddress,
    setMnAtPresentAddress,

    residenceAreaCode,
    setResidenceAreaCode,
    residensePhone1,
    setResidensePhone1,
    residensePhone2,
    setResidensePhone2,
    residenseMobile,
    setResidenseMobile,

    fax,
    setFax,
    personalEmail,
    setPersonalEmail,
    permanentHomeAddress,
    setPermanentHomeAddress,
    permanentMnAtPresentAddress,
    setpermanentMnAtPresentAddress,
    permanentYrAtPresentAddress,
    setpermanentYrAtPresentAddress,

    permanentResidenceAreaCode,
    setPermanentResidenceAreaCode,
    permanentResidensePhone1,
    setPermanentResidensePhone1,
    permanentResidensePhone2,
    setPermanentResidensePhone2,
    permanentResidenseMobile,
    setPermanentResidenseMobile,

    previousHomeAddress,
    setPreviousHomeAddress,

    yrsAtPreviousHomeAddress,
    setYrsAtPreviousHomeAddress,
    mmAtPreviousHomeAddress,
    setMmAtPreviousHomeAddress,

    provincialHomeAddress,
    setProvincialHomeAddress,
    provincialAreaCode,
    setProvincialAreaCode,
    provincialPhone1,
    setProvincialPhone1,
    provincialPhone2,
    setProvincialPhone2,
    provincialMobile,
    setProvincialMobile,
  } = formStore((state) => state);

  // checkResidensyType
  const checkResidensyType = () => {
    if (residenceType == "others") {
      setIsOtherResidency("block");
      setIsMortization("none");
      setIsRented("none");
    } else if (residenceType == "owned-mortgaged") {
      setIsOtherResidency("none");
      setIsMortization("block");
      setIsRented("none");
    } else if (residenceType == "rented") {
      setIsOtherResidency("none");
      setIsMortization("none");
      setIsRented("block");
    } else {
      setIsOtherResidency("none");
      setIsMortization("none");
      setIsRented("none");
    }
  };
  useEffect(() => {
    checkResidensyType();
  }, [residenceType]);
  return (
    <div>
      {/* Gender */}
      <FormControl required sx={{ display: "block" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={gender}
          onChange={(e) => handleGender(e.target.value)}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />

          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>

      {/* Title */}
      <FormControl required sx={{ display: "block" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Title</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <FormControlLabel value="mr" control={<Radio />} label="Mr." />
          <FormControlLabel value="ms" control={<Radio />} label="Ms." />
          <FormControlLabel value="mrs" control={<Radio />} label="Mrs." />
        </RadioGroup>
      </FormControl>

      {/* Details */}
      <Stack flexDirection={{ md: "row", xs: "column" }} my={2}>
        <TextField
          type="text"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          type="text"
          label="Middle Name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <TextField
          type="text"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Stack>

      <Stack flexDirection={{ md: "row", xs: "column" }} my={2}>
        <TextField
          type="text"
          label="Other Name (Alias)"
          value={aliasName}
          onChange={(e) => setAliasName(e.target.value)}
        />

        <TextField
          type="text"
          label="Date of Birth (dd/mm/yyy)"
          value={birthdate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <TextField
          type="text"
          label="Place of birth"
          value={placeOfBirth}
          onChange={(e) => setPlaceOfBirth(e.target.value)}
        />
      </Stack>

      {/* Marital Status */}
      <FormControl required sx={{ display: "block" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Marital Status
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={maritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
        >
          <FormControlLabel value="single" control={<Radio />} label="Single" />
          <FormControlLabel
            value="married"
            control={<Radio />}
            label="Married"
          />
          <FormControlLabel
            value="widowed"
            control={<Radio />}
            label="Widowed"
          />
          <FormControlLabel
            value="seperated"
            control={<Radio />}
            label="Seperated"
          />
        </RadioGroup>
      </FormControl>

      <TextField
        type="text"
        label="Spouse Name"
        value={spouseName}
        onChange={(e) => setSpouseName(e.target.value)}
        fullWidth
      />

      <FormControl required sx={{ display: "block", my: 1 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Spouse Working?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={isSpouseWorking}
          onChange={(e) => setIsSpouseWorking(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <Stack flexDirection={{ md: "row", xs: "column" }} my={2}>
        <TextField
          type="text"
          label="No. of Children"
          value={noOfChild}
          onChange={(e) => setNoOfChild(e.target.value)}
        />

        <TextField
          type="text"
          label="No. of Dependent"
          value={noOfDependents}
          onChange={(e) => setNoOfDependents(e.target.value)}
        />
      </Stack>

      <Stack flexDirection={{ md: "row", xs: "column" }} my={2}>
        <TextField
          type="text"
          label="Mother's Firstname"
          value={mothersFirstname}
          onChange={(e) => setMothersFirstName(e.target.value)}
        />
        <TextField
          type="text"
          label="Mother's Maiden Name"
          value={mothersMiddleName}
          onChange={(e) => setMothersMiddleName(e.target.value)}
        />
        <TextField
          type="text"
          label="Mother's Last Name"
          value={mothersLastname}
          onChange={(e) => setMothersLastName(e.target.value)}
        />
      </Stack>

      <FormControl required sx={{ display: "block" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Philippine Resident?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={isPhResident}
          onChange={(e) => setIsPhResident(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <Stack
        flexDirection={{ md: "row", xs: "column" }}
        my={2}
        justifyContent={{ md: "space-between", xs: "center" }}
      >
        <TextField
          type="text"
          label="Nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />

        <TextField
          type="text"
          label="SSS / GSIS No."
          value={sssNo}
          onChange={(e) => setSssNo(e.target.value)}
        />

        <TextField
          type="text"
          label="TIN"
          value={tinNo}
          onChange={(e) => setTinNo(e.target.value)}
        />
      </Stack>

      <FormControl required sx={{ display: "block" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Education Attainment
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={educationAttain}
          onChange={(e) => setEducationAttain(e.target.value)}
        >
          <FormControlLabel
            value="high-school"
            control={<Radio />}
            label="High School"
          />
          <FormControlLabel
            value="college-level"
            control={<Radio />}
            label="College Level"
          />
          <FormControlLabel
            value="college-graduate"
            control={<Radio />}
            label="College Graduate"
          />
          <FormControlLabel
            value="post-graduate"
            control={<Radio />}
            label="Post Graduate"
          />
        </RadioGroup>
      </FormControl>

      <FormControl required sx={{ display: "block" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Residence Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={residenceType}
          onChange={(e) => setResidenceType(e.target.value)}
        >
          <FormControlLabel
            value="owned-not-mortgaged"
            control={<Radio />}
            label="Owned (Not Mortgaged)"
          />
          <FormControlLabel
            value="owned-mortgaged"
            control={<Radio />}
            label="Owned (Mortgaged)"
          />
          <TextField
            variant="outlined"
            label="₱ Amortization / Month"
            sx={{ display: isAmortization }}
            value={amortizationPerMonth}
            onChange={(e) => setAmortizationPerMonth(e.target.value)}
          />
          <FormControlLabel value="rented" control={<Radio />} label="Rented" />
          <TextField
            variant="outlined"
            label="₱ Rented / Month"
            sx={{ display: isRented }}
            value={rentPerMonth}
            onChange={(e) => setRentPerMonth(e.target.value)}
          />
          <FormControlLabel
            value="used-free"
            control={<Radio />}
            label="Used Free"
          />
          <FormControlLabel
            value="staying-with-parents"
            control={<Radio />}
            label="Staying with Parents"
          />
          <FormControlLabel
            value="staying-with-relatives"
            control={<Radio />}
            label="Staying with Relatives"
          />
          <FormControlLabel value="others" control={<Radio />} label="Others" />
          <TextField
            variant="outlined"
            label="Others"
            sx={{ display: isOtherResidency }}
            value={otherResidensy}
            onChange={(e) => setotherResidensy(e.target.value)}
          />
        </RadioGroup>
      </FormControl>

      <TextField
        variant="outlined"
        label="Current Home Address"
        value={currentHomeAddress}
        onChange={(e) => setCurrentHomeAddress(e.target.value)}
        fullWidth
        sx={{ marginY: 1 }}
      />

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
      >
        <Typography width={{ xs: "100%", md: "60%" }} variant="h6">
          Year / Month at Present Address
        </Typography>

        <Stack flexDirection={"row"}>
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Years"
            value={yrAtPresentAddress}
            onChange={(e) => setYrAtPresentAddress(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 1, md: 5 } }}
            variant="outlined"
            label="Months"
            value={mnAtPresentAddress}
            onChange={(e) => setMnAtPresentAddress(e.target.value)}
          />
        </Stack>
      </Stack>

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        my={1}
      >
        <Typography width={"100%"} variant="h6">
          Residence Contact Number
        </Typography>
        <TextField
          sx={{ marginLeft: { xs: 0, md: 5 } }}
          variant="outlined"
          label="Area Code"
          value={residenceAreaCode}
          onChange={(e) => setResidenceAreaCode(e.target.value)}
        />
        <TextField
          sx={{ marginLeft: { xs: 0, md: 5 } }}
          variant="outlined"
          label="Phone 1"
          value={residensePhone1}
          onChange={(e) => setResidensePhone1(e.target.value)}
        />
        <TextField
          sx={{ marginLeft: { xs: 0, md: 5 } }}
          variant="outlined"
          label="Phone 2"
          value={residensePhone2}
          onChange={(e) => setResidensePhone2(e.target.value)}
        />
        <TextField
          sx={{ marginLeft: { xs: 0, md: 5 } }}
          variant="outlined"
          label="Mobile"
          value={residenseMobile}
          onChange={(e) => setResidenseMobile(e.target.value)}
        />
      </Stack>

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
      >
        <TextField
          // sx={{ marginLeft: { xs: 0, md: 5 } }}
          variant="outlined"
          label="Fax"
          fullWidth
          value={fax}
          onChange={(e) => setFax(e.target.value)}
        />
        <TextField
          sx={{ marginLeft: { xs: 0, md: 5 } }}
          variant="outlined"
          label="Personal Email"
          value={personalEmail}
          fullWidth
          onChange={(e) => setPersonalEmail(e.target.value)}
        />
      </Stack>

      <TextField
        variant="outlined"
        label="Permanent Home Address"
        value={permanentHomeAddress}
        fullWidth
        onChange={(e) => setPermanentHomeAddress(e.target.value)}
        sx={{ mt: 2 }}
      />

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        sx={{ mt: 1 }}
      >
        <Typography width={"100%"} variant="h6">
          Year / Month at Present Address
        </Typography>

        <Stack flexDirection={"row"}>
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Years"
            value={permanentYrAtPresentAddress}
            onChange={(e) => setpermanentYrAtPresentAddress(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 2, md: 5 } }}
            variant="outlined"
            label="Months"
            value={permanentMnAtPresentAddress}
            onChange={(e) => setpermanentMnAtPresentAddress(e.target.value)}
          />
        </Stack>
      </Stack>

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        sx={{ mt: 1 }}
      >
        <Typography width={"100%"} variant="h6">
          Permanent Contact Number
        </Typography>
        <Stack flexDirection={"row"}>
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Area Code"
            value={permanentResidenceAreaCode}
            onChange={(e) => setPermanentResidenceAreaCode(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 2, md: 5 } }}
            variant="outlined"
            label="Phone 1"
            value={permanentResidensePhone1}
            onChange={(e) => setPermanentResidensePhone1(e.target.value)}
          />
        </Stack>

        <Stack flexDirection={"row"}>
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Phone 2"
            value={permanentResidensePhone2}
            onChange={(e) => setPermanentResidensePhone2(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 2, md: 5 } }}
            variant="outlined"
            label="Mobile"
            value={permanentResidenseMobile}
            onChange={(e) => setPermanentResidenseMobile(e.target.value)}
          />
        </Stack>
      </Stack>

      <TextField
        variant="outlined"
        label="Previous Home Address"
        value={previousHomeAddress}
        onChange={(e) => setPreviousHomeAddress(e.target.value)}
        fullWidth
        sx={{ mt: 1 }}
      />

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        sx={{ mt: 1 }}
      >
        <Typography width={"100%"} variant="h6">
          Year / Month at Present Address
        </Typography>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
        >
          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: { xs: 0, md: 5 } }}
              variant="outlined"
              label="Years"
              value={yrsAtPreviousHomeAddress}
              onChange={(e) => setYrsAtPreviousHomeAddress(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: { xs: 2, md: 5 } }}
              variant="outlined"
              label="Months"
              value={mmAtPreviousHomeAddress}
              onChange={(e) => setMmAtPreviousHomeAddress(e.target.value)}
            />
          </Stack>
        </Stack>
      </Stack>

      <TextField
        variant="outlined"
        label="Provincial Home Address"
        fullWidth
        value={provincialHomeAddress}
        onChange={(e) => setProvincialHomeAddress(e.target.value)}
        sx={{ mt: 1 }}
      />

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        sx={{ mt: 1 }}
      >
        <Typography width={"100%"} variant="h6">
          Provincial Contact Number
        </Typography>

        <Stack flexDirection={"row"}>
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Area Code"
            value={provincialAreaCode}
            onChange={(e) => setProvincialAreaCode(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 2, md: 5 } }}
            variant="outlined"
            label="Phone 1"
            value={provincialPhone1}
            onChange={(e) => setProvincialPhone1(e.target.value)}
          />
        </Stack>

        <Stack flexDirection={"row"}>
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Phone 2"
            value={provincialPhone2}
            onChange={(e) => setProvincialPhone2(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 2, md: 5 } }}
            variant="outlined"
            label="Mobile"
            value={provincialMobile}
            onChange={(e) => setProvincialMobile(e.target.value)}
          />
        </Stack>
      </Stack>
    </div>
  );
};
export default PersonalInfo;
