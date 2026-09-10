"use client";
import { Button } from "@mui/material";
import { ReactNode } from "react";

export default function SecondaryButton({ children }: { children: ReactNode }) {
  return (
    <Button
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        bgcolor: "secondary.main",
        p: 4,
        borderRadius: theme.shape.full,
        alignItems: "center",
        justifyContent: "center",
        width: "max-content",
        transition: "all 0.5s",
        boxShadow: `0 1px 10px 2px ${theme.palette.secondary.main}`,
        "&:hover": {
          scale: 1.02,
          bgcolor: "secondary.light",
          boxShadow: `0 1px 20px 4px ${theme.palette.secondary.main}`,
        },
        "&:active": {
          scale: 0.92,
          bgcolor: "secondary.dark",
          boxShadow: `0 1px 5px 1px ${theme.palette.secondary.main}`,
        },
      })}
    >
      {children}
    </Button>
  );
}
