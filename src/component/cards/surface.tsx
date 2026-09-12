"use client";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function Surface({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        bgcolor: "#fff",
        overflow: "hidden",
        p: 5,
        height: "max-content",
        width:'100%',
        display: "flex",
        flexDirection: "column",
        gap: 4,
        borderRadius: theme.shape.xxl,
      })}
    >
      {children}
    </Box>
  );
}
