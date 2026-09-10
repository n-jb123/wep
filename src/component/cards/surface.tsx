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
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        borderRadius: theme.shape.xxl,
      })}
    >
      {children}
    </Box>
  );
}
