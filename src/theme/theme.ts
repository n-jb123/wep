"use client";
import { lightColor } from "./tokens/color";
import { typography } from "./tokens/typography";
import { shape } from "./tokens/shape";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: lightColor.primary.main,
      light: lightColor.primary.light,
      dark: lightColor.primary.dark,
      contrastText: lightColor.primary.contrastText,
    },
    outline:{
      main:lightColor.outline.main
    },
    secondary: {
      main: lightColor.secondary.main,
      light: lightColor.secondary.light,
      dark: lightColor.secondary.dark,
      contrastText: lightColor.secondary.contrastText,
    },
    error: {
      main: lightColor.error.main,
    },
    warning: {
      main: lightColor.warning.main,
    },
    info: {
      main: lightColor.info.main,
    },
    success: {
      main: lightColor.success.main,
    },
    background: {
      default: lightColor.background.default,
      paper: lightColor.background.paper,
    },
    text: {
      primary: lightColor.text.primary,
    },
  },
  typography: {
    fontFamily: typography.fontFamily,
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
    title: typography.title,
    body1: typography.body1,
    body2: typography.body2,
    body3: typography.body3,
    label: typography.label,
    caption: typography.caption,
  },
  spacing: [2, 4, 8, 16, 24, 32],
  shape:{
    xs:shape.xs,
    sm:shape.sm,
    md:shape.md,
    lg:shape.lg,
    xl:shape.xl,
    xxl:shape.xxl,
    full:shape.full
  },
  components:{
    MuiCssBaseline:{
       styleOverrides:{
        body:{
            background:lightColor.background.default,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
        }
       }
    }
  }
});

export default theme;
