import axios from "axios";

let theBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Api = axios.create({
  baseURL: theBaseUrl,
  withCredentials: true,
  withXSRFToken: true,
  // credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    // "Access-Control-Allow-Origin": true,
    // "Set-Cookie": `JSESSIONID=${new Date().toString()} SameSite=None; Secure`,
  },
});

export default Api;
