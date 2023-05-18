import axios from "axios";
const BASE_URL = "http://localhost:8000/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 1000,
});
