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
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contactlist"
          element={
            <PrivateRoute component={<ContactList />} redirectTo="/login" />
          }
        />
      </Route>
      <Route path="login" element={<Login />} />
      <Route
        path="register"
        element={
          <RestrictedRoute component={<Register />} redirectTo="/contacts" />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
