import axios from "axios";

let theBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Api = axios.create({
  baseURL: theBaseUrl,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": true,
  },
});

export default Api;
