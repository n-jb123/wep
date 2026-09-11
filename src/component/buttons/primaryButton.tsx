"use client";
import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function PrimaryButton({
  children,
  title,
  onClick
}: {
  children?: ReactNode;
  title: string;
  onClick?:()=>void
}) {
  return (
    <Button
    onClick={onClick}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        bgcolor: "primary.main",
        borderRadius: theme.shape.full,
        alignItems: "center",
        justifyContent: "center",
        gap:2,
        paddingTop:2,
        paddingBottom:2,
        paddingRight:4,
        paddingLeft:4,
        width: "100%",
        height:50,
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
      
      
      <Typography variant="title" sx={{ color: "primary.contrastText" }}>
        {title}
      </Typography>
      {children}
    </Button>
  );
}
