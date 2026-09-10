"use client";
import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function PrimaryButton({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <Button
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        bgcolor: "primary.main",
        borderRadius: theme.shape.full,
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        pt: 4,
        pb: 4,
        width: "100%",
        transition: "all 0.5s",
        boxShadow: `0 1px 10px 2px ${theme.palette.primary.main}`,
        "&:hover": {
          scale: 1.02,
          bgcolor: "primary.light",
          boxShadow: `0 1px 20px 4px ${theme.palette.primary.light}`,
        },
        "&:active": {
          scale: 0.92,
          bgcolor: "primary.dark",
          boxShadow: `0 1px 5px 1px ${theme.palette.primary.dark}`,
        },
      })}
    >
      
      {children}
      <Typography variant="title" sx={{ color: "primary.contrastText" }}>
        {title}
      </Typography>
    </Button>
  );
}
