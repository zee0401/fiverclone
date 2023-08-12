import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://localhost:/api",
  withCredentials: true,
});
export default newRequest;
