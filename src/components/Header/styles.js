import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  background: theme.palette.primary.background,
  height: "97px",
  display: "flex",
  padding: "0 40px",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const TokenContainer = styled("div")(({ theme }) => ({
  padding: "16px 32px",
  background: "linear-gradient(90deg, #da4a52 0%, #df775a 100%)",
  border: "2px solid #ffffff",
  borderRadius: "10px",
  fontFamily: "Space Grotesk",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "23px",
  /* identical to box height */
  width: "222.97px",
  height: "55px",
  /* White */

  color: "#ffffff",
  transition: "400ms cubic-bezier(0.54, 0.21, 0.18, 1.35)",
}));
