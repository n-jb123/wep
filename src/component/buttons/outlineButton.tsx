"use client";
import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function OutlineButton({
  title,
  children,
  onClick,
}: {
  title: string;
  children?: ReactNode;
  onClick?:()=>void
}) {
  return (
    <Button
    onClick={onClick}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        bgcolor: "transform",
        paddingTop:2,
        paddingBottom:2,
        paddingRight:4,
        paddingLeft:4,
        gap: 3,
        height:50,
        borderRadius: theme.shape.full,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        border: "1px solid",
        borderColor: "outline.main",
        transition: "all 0.5s",
        boxShadow: `0 1px 10px 2px ${theme.palette.outline.main}`,
        "&:hover": {
          scale: 1.02,
          boxShadow: `0 1px 20px 4px ${theme.palette.outline.main}`,
        },
        "&:active": {
          scale: 0.92,
          boxShadow: `0 1px 5px 1px ${theme.palette.outline.main}`,
        },
      })}
    >
      {children}
      <Typography sx={{ color: "text.primary" }}>{title}</Typography>
    </Button>
  );
}
