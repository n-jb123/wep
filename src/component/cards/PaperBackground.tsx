"use client";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function PaperBackground({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        bgcolor: "background.paper",
        p: 5,
        overflow: "hidden",
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
