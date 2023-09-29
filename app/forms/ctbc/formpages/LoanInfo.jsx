import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { formStore } from "../../../store/useCtbcFormStore";
import { useEffect } from "react";

const LoanInfo = () => {
  const {
    desiredAmount,
    handleDesiredAmount,
    loanTerm,
    handleLoanTerm,
    loanType,
    handleLoanType,
    purposeOfLoan,
    handlePurposeOfLoan,

    sourceOfLoan,
    handleSourceOfLoan,

    isBranch,
    handleIsBranch,
    branchName,
    handleBranchName,

    isAgency,
    handleIsAgency,
    agencyName,
    handleAgencyName,

    isOthers,
    handleIsOthers,
    otherSourceName,
    handleOtherSourceName,
  } = formStore((state) => state);

  // checkPurpose
  const checkPurpose = () => {
    if (sourceOfLoan == "others") {
      handleIsOthers("block");
      handleIsAgency("none");
      handleIsBranch("none");
    } else if (sourceOfLoan == "branch") {
      handleIsBranch("block");
      handleIsOthers("none");
      handleIsAgency("none");
    } else if (sourceOfLoan == "agency") {
      handleIsAgency("block");
      handleIsOthers("none");
      handleIsBranch("none");
    } else {
      handleIsAgency("none");
      handleIsOthers("none");
      handleIsBranch("none");
    }
  };
  useEffect(() => {
    checkPurpose();
  }, [sourceOfLoan]);
  return (
    <div>
      {/* Desired Amount */}
      <Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Derised Loan Amount"
            type="number"
            value={desiredAmount}
            onChange={(e) => handleDesiredAmount(e.target.value)}
            required
            sx={{ display: "block" }}
            fullWidth
            className="text-black sm:text-x"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl
            required
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: { xs: 0, md: 1 },
              padding: { xs: 2, md: 1 },
            }}
          >
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              className="text-2xl text-black"
            >
              Choose desire amount
            </FormLabel>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Button
                sx={{ color: "black" }}
                onClick={() => handleDesiredAmount("2000000")}
              >
                2M
              </Button>
              <Button
                sx={{ color: "black" }}
                onClick={() => handleDesiredAmount("1000000")}
              >
                1M
              </Button>
              <Button
                sx={{ color: "black" }}
                onClick={() => handleDesiredAmount("500000")}
              >
                500k
              </Button>
              <Button
                sx={{ color: "black" }}
                onClick={() => handleDesiredAmount("300000")}
              >
                300k
              </Button>
              <Button
                sx={{ color: "black" }}
                onClick={() => handleDesiredAmount("100000")}
              >
                100k
              </Button>
              <Button
                sx={{ color: "black" }}
                onClick={() => handleDesiredAmount("50000")}
              >
                50k
              </Button>
              <Button
                sx={{ color: "black" }}
                onClick={() => handleDesiredAmount("20000")}
              >
                20k
              </Button>
            </ButtonGroup>
          </FormControl>
        </Grid>
      </Grid>

      {/* Loan Term */}
      <FormControl required>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className="text-black text-2xl"
        >
          Desired Loan Term
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={loanTerm}
          onChange={(e) => handleLoanTerm(e.target.value)}
        >
          <FormControlLabel value="12" control={<Radio />} label="12 Months" />

          <FormControlLabel value="18" control={<Radio />} label="18 Months" />
          <FormControlLabel value="24" control={<Radio />} label="24 Months" />
          <FormControlLabel value="36" control={<Radio />} label="36 Months" />
        </RadioGroup>
      </FormControl>

      {/* Loan Type */}
      <FormControl
        required
        sx={{ display: "block", justifyContent: "space-between" }}
      >
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className="text-black text-2xl"
        >
          Loan Application Type
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={loanType}
          onChange={(e) => handleLoanType(e.target.value)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            value="new-application"
            control={<Radio />}
            label="New Application"
          />

          <FormControlLabel
            value="with-existing-loan"
            control={<Radio />}
            label="With Existing Loan"
          />
          <FormControlLabel
            value="with-previous-loan"
            control={<Radio />}
            label="With Previous Loan"
          />
          <FormControlLabel
            value="with-previous-application"
            control={<Radio />}
            label="With Previous Application"
          />
        </RadioGroup>
      </FormControl>

      {/* Loan Purpose */}
      <FormControl required sx={{ display: "block" }}>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className="text-black text-2xl"
        >
          Purpose of Loan
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={purposeOfLoan}
          onChange={(e) => handlePurposeOfLoan(e.target.value)}
          sx={{ display: "flex" }}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <FormControlLabel
              value="appliance"
              control={<Radio />}
              label="Appliance"
            />
            <FormControlLabel
              value="balance-transfer"
              control={<Radio />}
              label="Balance Transfer"
            />
            <FormControlLabel
              value="education"
              control={<Radio />}
              label="Education"
            />
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <FormControlLabel
              value="health-and-hospitalization"
              control={<Radio />}
              label="Health / Hospitalization"
            />
            <FormControlLabel
              value="home-improvement"
              control={<Radio />}
              label="Home Improvement"
            />
            <FormControlLabel
              value="livelihood-and-working-capital"
              control={<Radio />}
              label="Livelihood / Working Capital"
            />
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <FormControlLabel
              value="travel"
              control={<Radio />}
              label="Travel"
            />
            <FormControlLabel
              value="personal"
              control={<Radio />}
              label="Personal"
            />
          </Box>
        </RadioGroup>
      </FormControl>

      {/* Source of Loan */}
      <FormControl required sx={{ display: "block" }}>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          className="text-2xl text-black"
        >
          Source of Loan
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={sourceOfLoan}
          onChange={(e) => {
            console.log("changing ...", e.target.value);
            handleSourceOfLoan(e.target.value);
            console.log("changing ...", e.target.value);
          }}
        >
          <FormControlLabel value="branch" control={<Radio />} label="Branch" />
          <TextField
            variant="outlined"
            label="Branch Name"
            sx={{ display: "none" }}
            value={branchName}
            onChange={(e) => handleBranchName(e.target.value)}
          />
          <FormControlLabel value="agency" control={<Radio />} label="Agency" />
          <TextField
            variant="outlined"
            label="Agency Name"
            sx={{ display: "none" }}
            value={agencyName}
            onChange={(e) => handleAgencyName(e.target.value)}
          />
          <FormControlLabel
            value="walk-in"
            control={<Radio />}
            label="Walk - in"
          />
          <FormControlLabel
            value="employee-referral"
            control={<Radio />}
            label="Employee Referral"
          />
          <FormControlLabel
            value="telemarketing"
            control={<Radio />}
            label="Telemarketing"
          />
          <FormControlLabel
            value="website"
            control={<Radio />}
            label="Website"
          />

          <FormControlLabel value="others" control={<Radio />} label="Others" />
          <TextField
            variant="outlined"
            label="Other source"
            sx={{ display: "none" }}
            value={otherSourceName}
            onChange={(e) => handleOtherSourceName(e.target.value)}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default LoanInfo;
