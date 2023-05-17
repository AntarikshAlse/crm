import axios from "axios";
//const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://17xhzu.deta.dev/api/";

const tokenobj = localStorage.getItem("persist:root");
const TokenContainer = tokenobj ? JSON.parse(tokenobj).user : "";
const currentUser = TokenContainer
  ? JSON.parse(TokenContainer).currentUser
  : "";
const TOKEN = currentUser ? currentUser.accessToken : "";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  // },
  timeout: 1000,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { token: `Bearer ${TOKEN}` },
});
