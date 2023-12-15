import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme.tsx";
import { Theme as ThemeType } from "./styles/theme.tsx";
import "./index.css";
import "../i18n.js";

declare module "@emotion/react" {
  // eslint-disable-next-line
  interface Theme extends ThemeType {}
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
