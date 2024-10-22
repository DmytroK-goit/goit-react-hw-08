import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  if (token) {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete goitApi.defaults.headers.common.Authorization;
  }
};

export const register = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      toast.success("Success");
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/login", credentials);
      toast.success("Success");
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await goitApi.post("users/logout");
    setAuthHeader("");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk("refresh", async (_, thunkApi) => {
  try {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
      return thunkApi.rejectWithValue("Token does not exist!");
    }

    setAuthHeader(savedToken);

    const { data } = await goitApi.get("users/current");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
