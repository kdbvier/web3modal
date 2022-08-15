import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  borderRadius: "10px",
  position: "relative",
  backgroundColor: "#FFFFFF",
  boxShadow: "(0 0 0 / 8%) 0px 4px 15px",
  border: "1px solid black",
}));
export const ImageDiv = styled("div")(({ theme }) => ({
  width: "100%",
  paddingBottom: "100%",
  display: "block",
  position: "relative",
}));
export const Image = styled("img")(({ theme }) => ({
  borderTopRightRadius: "10px",
  borderTopLeftRadius: "10px",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
}));

export const Info = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "12px",
  padding: "20px",
}));

export const Name = styled("div")(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "600",
}));

export const CollectionName = styled("div")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "400",
}));
