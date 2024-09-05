import axios from "axios";
import { baseURL } from "../config/baseUrl";
import applyCaseMiddleware from "axios-case-converter";

export const axiosInstance = applyCaseMiddleware(
  axios.create({
    baseURL,
  })
);
