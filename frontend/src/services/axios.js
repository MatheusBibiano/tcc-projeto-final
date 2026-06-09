import axios from "axios";

export const axiosAPI = axios.create({
  baseURL: `https://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT}/`,
});
