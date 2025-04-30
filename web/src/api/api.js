import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      config.headers["x-access-token"] = `${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
