import axios from "axios";
import config from "./config";

const api = () => {
  return axios.create({
    baseURL: config.api,
    timeout: 30000
  });
};

export default api;
