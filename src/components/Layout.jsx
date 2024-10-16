import { Outlet, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

const Layout = () => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === "dark" ? "#333" : "#fff",
      },
    },
  });

  const getGradient = (mode) => {
    return mode === "dark"
      ? `linear-gradient(to bottom, #eed35c, #4f4f4f)`
      : `linear-gradient(to bottom, rgb(89, 236, 89), rgb(213, 250, 213))`;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          background: getGradient(mode),
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        <header>
          <nav>
            <ul className="flex gap-4 p-4 bg-teal-500">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contactlist">Contactlist</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Regestration</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="p-4">
          <Outlet />
        </main>
        <footer className="p-4 bg-teal-500 text-center">
          <p>© 2024 My App</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
