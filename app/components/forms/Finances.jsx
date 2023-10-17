import {
  Divider,
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

const Finances = () => {
  const {
    sourceOfIncome,
    setSourceOfIncome,
    isPermanent,
    setIsPermanent,
    isPartOwner,
    setIsPartOwner,
    partOwner,
    setPartOwner,
    percentOfOwnership,
    setPercentOfOwnership,
    companyType,
    setCompanyType,
    othersCompanyType,
    setOthersCompanyType,
    isOtherCompanyType,
    setIsOtherCompanyType,

    employerOrBusinessName,
    setEmployerOrBusinessName,
    natureOfBusiness,
    setNatureOfBusiness,
    yourPosition,
    setYourPosition,

    rank,
    setRank,

    employerOrBusinessAddress,
    setEmployerOrBusinessAddress,

    yrsAtPresentCompany,
    setYrsAtPresentCompany,
    monthsAtPresentCompany,
    setMonthsAtPresentCompany,

    officeAreaCode,
    setOfficeAreaCode,
    officePhone1,
    setOfficePhone1,
    officePhone2,
    setOfficePhone2,
    officeMobile,
    setOfficeMobile,
    officeFax,
    setOfficeFax,
    officeEmail,
    setOfficeEmail,

    monthlyBasicIncome,
    setMonthlyBasicIncome,
    monthlyAllowance,
    setMonthlyAllowance,
    monthlyFamilyIncome,
    setMonthlyFamilyIncome,

    monthlyHouseHoldExpense,
    setMonthlyHouseHoldExpense,
    previousEmployerOrBusinessName,
    setPreviousEmployerOrBusinessName,
    yrsAtPreviousCompany,
    setYrsAtPreviousCompany,
    monthsAtPreviousCompany,
    setMonthsAtPreviousCompany,
    previousCompanyAreaCode,
    setPreviousCompanyAreaCode,
    previousCompanyPhone1,
    setPreviousCompanyPhone1,
    previousCompanyMobile,
    setPreviousCompanyMobile,

    spouseEmployerOrBusinessName,
    setSpouseEmployerOrBusinessName,
    spouseTitleOrRank,
    setspouseTitleOrRank,
    spouseMonthlyIncome,
    setSpouseMonthlyIncome,

    spouseOfficeAreaCode,
    setspouseOfficeAreaCode,
    spouseOfficePhone1,
    setSpouseOfficePhone1,
    spouseOfficePhone2,
    setspouseOfficePhone2,
    spouseOfficeMobile,
    setSpouseOfficeMobile,
    spouseYrsAtPresentCompany,
    setSpouseYrsAtPresentCompany,
    spouseMonthsAtPresentCompany,
    setspouseMonthsAtPresentCompany,
  } = formStore((state) => state);

  // checkPartOwner
  const checkPartnerOwner = () => {
    if (partOwner == "yes") {
      setIsPartOwner("block");
    } else if (partOwner == "no") {
      setIsPartOwner("none");
    }
  };
  // checkPartOwner
  const checkIsOtherCompanyType = () => {
    console.log(companyType);
    if (companyType == "others") {
      setIsOtherCompanyType("block");
    } else {
      setIsOtherCompanyType("none");
    }
  };
  useEffect(() => {
    console.log("changed");
    checkPartnerOwner();
    checkIsOtherCompanyType();
  }, [partOwner, companyType]);
  return (
    <div>
      <FormControl required sx={{ display: "block", my: { xs: 2, md: 0 } }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Source of Income
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={sourceOfIncome}
          onChange={(e) => setSourceOfIncome(e.target.value)}
        >
          <FormControlLabel
            value="employment"
            control={<Radio />}
            label="Employment"
          />
          <FormControlLabel
            value="business"
            control={<Radio />}
            label="Business"
          />
        </RadioGroup>
      </FormControl>

      <FormControl required sx={{ display: "block", my: { xs: 2, md: 0 } }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Permanent?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={isPermanent}
          onChange={(e) => setIsPermanent(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl required sx={{ display: "block", my: { xs: 2, md: 0 } }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Part Owner
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={partOwner}
          onChange={(e) => setPartOwner(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <TextField
            sx={{ display: isPartOwner }}
            variant="outlined"
            label="% of Ownership"
            value={percentOfOwnership}
            onChange={(e) => setPercentOfOwnership(e.target.value)}
          />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl required sx={{ display: "block", my: { xs: 2, md: 0 } }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Company Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={companyType}
          onChange={(e) => setCompanyType(e.target.value)}
        >
          <FormControlLabel
            value="private"
            control={<Radio />}
            label="Private"
          />
          <FormControlLabel
            value="government"
            control={<Radio />}
            label="Government"
          />

          <FormControlLabel value="others" control={<Radio />} label="Others" />
          <TextField
            variant="outlined"
            label="Others company name"
            sx={{ display: isOtherCompanyType }}
            value={othersCompanyType}
            onChange={(e) => setOthersCompanyType(e.target.value)}
          />
        </RadioGroup>
      </FormControl>

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        my={2}
      >
        <TextField
          variant="outlined"
          label="Employer / Business Name"
          value={employerOrBusinessName}
          onChange={(e) => setEmployerOrBusinessName(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Nature of Business"
          value={natureOfBusiness}
          onChange={(e) => setNatureOfBusiness(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Position"
          value={yourPosition}
          onChange={(e) => setYourPosition(e.target.value)}
        />
      </Stack>

      <FormControl required sx={{ display: "block" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Rank</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
        >
          <FormControlLabel value="staff" control={<Radio />} label="Staff" />
          <FormControlLabel
            value="junior-officer"
            control={<Radio />}
            label="Junior Officer"
          />

          <FormControlLabel
            value="middle-management"
            control={<Radio />}
            label="Middle Management"
          />

          <FormControlLabel
            value="production-worker"
            control={<Radio />}
            label="Production Worker"
          />

          <FormControlLabel
            value="service-employee"
            control={<Radio />}
            label="Service Employee (e.g Doctor, Nurse, Legal Counsel, etc)"
          />

          <FormControlLabel
            value="president"
            control={<Radio />}
            label="President / General Manager"
          />

          <FormControlLabel
            value="vise-president"
            control={<Radio />}
            label="Vise President"
          />

          <FormControlLabel
            value="senior-manager"
            control={<Radio />}
            label="Senior Manager"
          />
        </RadioGroup>
      </FormControl>

      <TextField
        variant="outlined"
        label="Employer / Business Address"
        fullWidth
        value={employerOrBusinessAddress}
        onChange={(e) => setEmployerOrBusinessAddress(e.target.value)}
      />

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        my={2}
      >
        <Typography width={"100%"} variant="h6">
          Years And Month At Present Company
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
              value={yrsAtPresentCompany}
              onChange={(e) => setYrsAtPresentCompany(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: { xs: 2, md: 5 } }}
              variant="outlined"
              label="Months"
              value={monthsAtPresentCompany}
              onChange={(e) => setMonthsAtPresentCompany(e.target.value)}
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        my={2}
      >
        <Typography width={"35%"} variant="h6">
          Office Contact Number
        </Typography>

        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
        >
          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Area Code"
              value={officeAreaCode}
              onChange={(e) => setOfficeAreaCode(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Phone 1"
              value={officePhone1}
              onChange={(e) => setOfficePhone1(e.target.value)}
            />
          </Stack>

          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Phone 2"
              value={officePhone2}
              onChange={(e) => setOfficePhone2(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Office Mobile"
              value={officeMobile}
              onChange={(e) => setOfficeMobile(e.target.value)}
            />
          </Stack>
          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Office Fax"
              value={officeFax}
              onChange={(e) => setOfficeFax(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Office Email"
              value={officeEmail}
              onChange={(e) => setOfficeEmail(e.target.value)}
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        my={1}
      >
        <Typography width={"120%"} variant="h6" sx={{ marginLeft: 2 }}>
          Monthly Income (based on 1 Month payslip)
        </Typography>
        <TextField
          sx={{ marginLeft: 2 }}
          variant="outlined"
          label="Basic ₱"
          value={monthlyBasicIncome}
          onChange={(e) => setMonthlyBasicIncome(e.target.value)}
        />
        <TextField
          sx={{ marginLeft: 2 }}
          variant="outlined"
          label="Allowance ₱"
          value={monthlyAllowance}
          onChange={(e) => setMonthlyAllowance(e.target.value)}
        />
        <TextField
          sx={{ marginLeft: 2 }}
          variant="outlined"
          label="Family Income ₱"
          value={monthlyFamilyIncome}
          onChange={(e) => setMonthlyFamilyIncome(e.target.value)}
        />
      </Stack>

      <TextField
        sx={{ marginLeft: 2 }}
        variant="outlined"
        label="Monthly Household Expense"
        fullWidth
        value={monthlyHouseHoldExpense}
        onChange={(e) => setMonthlyHouseHoldExpense(e.target.value)}
      />

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        my={1}
      >
        <Typography width={"100%"} variant="h6" sx={{ marginLeft: 2 }}>
          Previous Employer / Business Name
        </Typography>
        <TextField
          sx={{ marginLeft: 2 }}
          variant="outlined"
          fullWidth
          label="Name"
          value={previousEmployerOrBusinessName}
          onChange={(e) => setPreviousEmployerOrBusinessName(e.target.value)}
        />
      </Stack>

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
      >
        <Typography width={"100%"} variant="h6" sx={{ marginLeft: 2 }}>
          Years / Months at Previous Company
        </Typography>

        <Stack
          flexDirection={{ xs: "row", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
        >
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Year"
            value={yrsAtPreviousCompany}
            onChange={(e) => setYrsAtPreviousCompany(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Month"
            value={monthsAtPreviousCompany}
            onChange={(e) => setMonthsAtPreviousCompany(e.target.value)}
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
        <Typography width={"100%"} variant="h6" sx={{ marginLeft: 2 }}>
          Previous Company Contact Number
        </Typography>

        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
        >
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Area Code"
            value={previousCompanyAreaCode}
            onChange={(e) => setPreviousCompanyAreaCode(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Phone 1"
            value={previousCompanyPhone1}
            onChange={(e) => setPreviousCompanyPhone1(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Mobile"
            value={previousCompanyMobile}
            onChange={(e) => setPreviousCompanyMobile(e.target.value)}
          />
        </Stack>
      </Stack>

      <Divider>
        <Typography variant="h6" sx={{ margin: 2 }}>
          Spouse Details
        </Typography>
      </Divider>

      <TextField
        sx={{ marginLeft: 2 }}
        variant="outlined"
        label="Employer / Business Name"
        value={spouseEmployerOrBusinessName}
        onChange={(e) => setSpouseEmployerOrBusinessName(e.target.value)}
      />

      <TextField
        sx={{ marginLeft: 2 }}
        variant="outlined"
        label="Designation / Title / Rank"
        value={spouseTitleOrRank}
        onChange={(e) => setspouseTitleOrRank(e.target.value)}
      />

      <TextField
        sx={{ marginLeft: 2 }}
        variant="outlined"
        label="Monthly Income"
        value={spouseMonthlyIncome}
        onChange={(e) => setSpouseMonthlyIncome(e.target.value)}
      />

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        my={1}
      >
        <Typography width={"100%"} variant="h6" sx={{ marginLeft: 2 }}>
          Office Contact Number
        </Typography>

        <Stack flexDirection={"row"}>
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Area Code"
            value={spouseOfficeAreaCode}
            onChange={(e) => setspouseOfficeAreaCode(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Phone 1"
            value={spouseOfficePhone1}
            onChange={(e) => setSpouseOfficePhone1(e.target.value)}
          />
        </Stack>

        <Stack flexDirection={"row"}>
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Phone 2"
            value={spouseOfficePhone2}
            onChange={(e) => setspouseOfficePhone2(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Mobile"
            value={spouseOfficeMobile}
            onChange={(e) => setSpouseOfficeMobile(e.target.value)}
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
        <Typography width={"100%"} variant="h6" sx={{ marginLeft: 2 }}>
          Years / Months at Present Company
        </Typography>

        <Stack flexDirection={"row"}>
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Years"
            value={spouseYrsAtPresentCompany}
            onChange={(e) => setSpouseYrsAtPresentCompany(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Months"
            value={spouseMonthsAtPresentCompany}
            onChange={(e) => setspouseMonthsAtPresentCompany(e.target.value)}
          />
        </Stack>
      </Stack>
    </div>
  );
};
export default Finances;
