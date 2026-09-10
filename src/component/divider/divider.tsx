import { Box } from "@mui/material";
export const Divider = ({
  height,
  width,
}: {
  height: string | { xs: string; md: string };
  width: string | { xs: string; md: string };
}) => (
  <Box
    sx={{
      mt: 1,
      height,
      width,
      borderRadius: "10px",
      background: "linear-gradient(180deg, #087a4bff, #d6a996ff, #727973)",
      opacity: 0.6,
    }}
  />
);
