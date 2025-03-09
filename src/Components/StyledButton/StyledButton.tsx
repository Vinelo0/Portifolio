import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "16px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  textTransform: "none",
  color: theme.palette.primary.contrastText,
  lineHeight: 1.2,
  whiteSpace: "nowrap",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  width: "220px",
  height: "60px",
  fontSize: "1.2rem",

  [theme.breakpoints.down("sm")]: {
    width: "180px",
    height: "50px",
    fontSize: "1rem",
  },
}));

export default StyledButton;
