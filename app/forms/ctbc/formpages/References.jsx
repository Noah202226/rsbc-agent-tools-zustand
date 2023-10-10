import { Stack, TextField, Typography } from "@mui/material";
import { formStore } from "../../../store/useCtbcFormStore";

const References = () => {
  const {
    bankName,
    setBankName,
    bankBranchName,
    setBankBranchName,
    bankAccountType,
    setBankAccountType,
    bankAccountNumber,
    setBankAccountNumber,

    creditCardNo,
    setcreditCardNo,
    issuerNameOrBankName,
    setIssuerNameOrBankName,
    memberSinceAndLoanGranted,
    setMemberSinceAndLoanGranted,
    creditCardExpiryAndLoanMaturity,
    setCreditCardExpiryAndLoanMaturity,
    cardLimitAndLoanAmount,
    setCardLimitAndLoanAmount,

    personalReferenceName,
    setPersonalReferenceName,
    personalReferenceRelation,
    setPersonalReferenceRelation,
    personalReferenceMobile,
    setPersonalReferenceMobile,
    personalReferenceAddress,
    setPersonalReferenceAddress,

    personalReferenceName2,
    setPersonalReferenceName2,
    personalReferenceRelation2,
    setPersonalReferenceRelation2,
    personalReferenceMobile2,
    setPersonalReferenceMobile2,
    personalReferenceAddress2,
    setPersonalReferenceAddress2,

    personalReferenceName3,
    setPersonalReferenceName3,
    personalReferenceRelation3,
    setPersonalReferenceRelation3,
    personalReferenceMobile3,
    setPersonalReferenceMobile3,
    personalReferenceAddress3,
    setPersonalReferenceAddress3,
  } = formStore((state) => state);
  return (
    <div className="w-full">
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        textAlign={"start"}
        justifyContent={{ md: "space-between", xs: "center" }}
        my={1}
      >
        <Typography
          width={{ xs: "100%", md: "30%" }}
          variant="h6"
          sx={{ marginLeft: 2 }}
        >
          Bank / Credit References
        </Typography>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
        >
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Bank Name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            fullWidth
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Branch"
            value={bankBranchName}
            onChange={(e) => setBankBranchName(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Account Type"
            value={bankAccountType}
            onChange={(e) => setBankAccountType(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Account Number"
            value={bankAccountNumber}
            onChange={(e) => setBankAccountNumber(e.target.value)}
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
        <Typography
          width={{ xs: "100%", md: "30%" }}
          variant="h6"
          sx={{ marginLeft: 2 }}
        >
          Credit Card Owned / Other Loans
        </Typography>

        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
        >
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Credit Card No. / PN No."
            value={creditCardNo}
            onChange={(e) => setcreditCardNo(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Issuer's Name / Bank Name"
            value={issuerNameOrBankName}
            onChange={(e) => setIssuerNameOrBankName(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Member Since / Loan Granted (mm/yyyy)"
            value={memberSinceAndLoanGranted}
            onChange={(e) => setMemberSinceAndLoanGranted(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Card Expiry / Loan Maturity (mm/yyyy)"
            value={creditCardExpiryAndLoanMaturity}
            onChange={(e) => setCreditCardExpiryAndLoanMaturity(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Card Limit / Loan Amount"
            value={cardLimitAndLoanAmount}
            onChange={(e) => setCardLimitAndLoanAmount(e.target.value)}
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
        <Typography
          width={{ xs: "100%", md: "30%" }}
          variant="h6"
          sx={{ marginLeft: 2 }}
        >
          Personal / Trade Reference 1
        </Typography>

        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
        >
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Name"
            value={personalReferenceName}
            onChange={(e) => setPersonalReferenceName(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Relationship"
            value={personalReferenceRelation}
            onChange={(e) => setPersonalReferenceRelation(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Landline / Mobile"
            value={personalReferenceMobile}
            onChange={(e) => setPersonalReferenceMobile(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Address"
            value={personalReferenceAddress}
            onChange={(e) => setPersonalReferenceAddress(e.target.value)}
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
        <Typography
          width={{ xs: "100%", md: "30%" }}
          variant="h6"
          sx={{ marginLeft: 2 }}
        >
          Personal / Trade Reference 2
        </Typography>

        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
        >
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Name"
            value={personalReferenceName2}
            onChange={(e) => setPersonalReferenceName2(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Relationship"
            value={personalReferenceRelation2}
            onChange={(e) => setPersonalReferenceRelation2(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Landline / Mobile"
            value={personalReferenceMobile2}
            onChange={(e) => setPersonalReferenceMobile2(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Address"
            value={personalReferenceAddress2}
            onChange={(e) => setPersonalReferenceAddress2(e.target.value)}
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
        <Typography
          width={{ xs: "100%", md: "30%" }}
          variant="h6"
          sx={{ marginLeft: 2 }}
        >
          Personal / Trade Reference 3
        </Typography>

        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
        >
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Name"
            value={personalReferenceName3}
            onChange={(e) => setPersonalReferenceName3(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Relationship"
            value={personalReferenceRelation3}
            onChange={(e) => setPersonalReferenceRelation3(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Landline / Mobile"
            value={personalReferenceMobile3}
            onChange={(e) => setPersonalReferenceMobile3(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Address"
            value={personalReferenceAddress3}
            onChange={(e) => setPersonalReferenceAddress3(e.target.value)}
          />
        </Stack>
      </Stack>
    </div>
  );
};
export default References;
