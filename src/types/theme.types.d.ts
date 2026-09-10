import * as React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    outline: Palette["main"]; 
  }

  interface PaletteOptions {
    outline?: PaletteOptions["main"];
  }
}

declare module "@mui/material/styles" {
  interface Shape {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    full: string;
  }

  interface ShapeOptions {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xxl?: string;
    full?: string;
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
