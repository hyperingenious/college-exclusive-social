import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppShell from "./pages/app-shell/AppShell";
import Feed from "./pages/feed/Feed";
import Login from "./pages/Login";

export default function App() {
  const theme = createTheme({
    fontFamily: 'Verdana, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Greycliff CF, sans-serif' },
  });
  
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route path="feed" element={<Feed />} />
          </Route>
          <Route path="/authenticate" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
