import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        blue: {
          100: "#ccccff",
          200: "#9999ff",
          300: "#6666ff",
          400: "#3333ff",
          500: "#0000ff",
          600: "#0000cc",
          700: "#000099",
          800: "#000066",
          900: "#000033",
        },
        blueviolet: {
          100: "#e8d5f9",
          200: "#d0aaf3",
          300: "#b980ee",
          400: "#a155e8",
          500: "#8a2be2",
          600: "#6e22b5",
          700: "#531a88",
          800: "#37115a",
          900: "#1c092d",
        },
        violet: {
          100: "#e6cce6",
          200: "#cc99cc",
          300: "#b366b3",
          400: "#993399",
          500: "#800080",
          600: "#660066",
          700: "#4d004d",
          800: "#330033",
          900: "#1a001a",
        },
        darkred: {
          100: "#e8cccc",
          200: "#d19999",
          300: "#b96666",
          400: "#a23333",
          500: "#8b0000",
          600: "#6f0000",
          700: "#530000",
          800: "#380000",
          900: "#1c0000",
        },
        firebrick: {
          100: "#f0d3d3",
          200: "#e0a7a7",
          300: "#d17a7a",
          400: "#c14e4e",
          500: "#b22222",
          600: "#8e1b1b",
          700: "#6b1414",
          800: "#470e0e",
          900: "#240707",
        },
      }
    : {
        blue: {
          100: "#000033",
          200: "#000066",
          300: "#000099",
          400: "#0000cc",
          500: "#0000ff",
          600: "#3333ff",
          700: "#6666ff",
          800: "#9999ff",
          900: "#ccccff",
        },
        blueviolet: {
          100: "#1c092d",
          200: "#37115a",
          300: "#531a88",
          400: "#6e22b5",
          500: "#8a2be2",
          600: "#a155e8",
          700: "#b980ee",
          800: "#d0aaf3",
          900: "#e8d5f9",
        },
        violet: {
          100: "#1a001a",
          200: "#330033",
          300: "#4d004d",
          400: "#660066",
          500: "#800080",
          600: "#993399",
          700: "#b366b3",
          800: "#cc99cc",
          900: "#e6cce6",
        },
        darkred: {
          100: "#1c0000",
          200: "#380000",
          300: "#530000",
          400: "#6f0000",
          500: "#8b0000",
          600: "#a23333",
          700: "#b96666",
          800: "#d19999",
          900: "#e8cccc",
        },
        firebrick: {
          100: "#240707",
          200: "#470e0e",
          300: "#6b1414",
          400: "#8e1b1b",
          500: "#b22222",
          600: "#c14e4e",
          700: "#d17a7a",
          800: "#e0a7a7",
          900: "#f0d3d3",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.blueviolet[500],
            },
            secondary: {
              main: colors.violet[500],
            },
            tertiary: {
              dark: colors.blue[700],
              main: colors.blue[500],
              light: colors.blue[100],
            },
            background: {
              default: colors.bluevioletet[500],
            },
          }
        : {
            primary: {
              main: colors.blueviolet[100],
            },
            secondary: {
              main: colors.violet[500],
            },
            neutral: {
              dark: colors.blue[700],
              main: colors.blue[500],
              light: colors.blue[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typeSettings: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
