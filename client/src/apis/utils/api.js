import axios from "axios";
import { getAccessToken, setAccessToken, removeAcessToken } from "./";

//SETTING AXIOS INSTANCE
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
  withCredentials: true,
});

// REQUEST INTERCEPTOR TO ATTACH THE  BEAREAR TOKEN
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// RESPONSE INTERCEPTOR TO IMPLEMENT THE REFERESH TOKEN WHEN PAGE SAYS 401(UNAUTORIZED);
api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshRes = await api.post("/auth/refresh");
        const newAccessToken = refreshRes.data.accessToken;

        setAccessToken(newAccessToken);

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        
        return api(originalRequest); 

      } catch (refreshError) {

        removeAcessToken();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(err);
  }
);


export default api;