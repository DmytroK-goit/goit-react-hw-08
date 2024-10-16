import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { selectIsError, selectIsLoading } from "./redux/contactsSlice";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { fetchContacts } from "./redux/contactsOps";
import Layout from "./components/Layout";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/HomePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// function MyApp({ mode, setMode }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         width: "80px",
//         alignItems: "center",
//         justifyContent: "center",
//         bgcolor: mode === "dark" ? "grey.900" : "grey.100",
//         color: "text.primary",
//         borderRadius: 1,
//         p: 3,
//         height: "36px",
//       }}
//     >
//       <Select value={mode} onChange={(event) => setMode(event.target.value)}>
//         <MenuItem value="light">Light</MenuItem>
//         <MenuItem value="dark">Dark</MenuItem>
//       </Select>
//     </Box>
//   );
// }

function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);
  // const [mode, setMode] = useState("light");
  // const theme = createTheme({
  //   palette: {
  //     mode: mode,
  //     background: {
  //       default: mode === "dark" ? "#333" : "#fff",
  //     },
  //   },
  // });

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  // useEffect(() => {
  //   if (isError) {
  //     toast.error(`Error: ${isError}`);
  //   }
  // }, [isError]);

  // const getGradient = (mode) => {
  //   return mode === "dark"
  //     ? `linear-gradient(to bottom, #eed35c, #4f4f4f)`
  //     : `linear-gradient(to bottom, rgb(89, 236, 89), rgb(213, 250, 213))`;
  // };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contactlist" element={<ContactList />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
