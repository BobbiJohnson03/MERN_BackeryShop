import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme(); // Możesz tu dodać własne kolory itp.

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
