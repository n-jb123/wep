import * as React from "react";

declare module "@mui/material/styles" {
  interface Shape {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    full: number;
  }

  interface ShapeOptions {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
    full?: number;
  }

  interface TypographyVariants {
    title: React.CSSProperties;
    body3: React.CSSProperties;
    label: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    body3?: React.CSSProperties;
    label?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    body3: true;
    label: true;
  }
}
