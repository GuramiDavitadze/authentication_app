import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3009/api",
  headers: {
    "secret-api-key": import.meta.env.VITE_SECRET_API_KEY,
  },
});
export default api;
