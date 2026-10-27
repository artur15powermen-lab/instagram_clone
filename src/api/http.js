import axios from "axios";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
export const WS_URL = import.meta.env.VITE_WS_URL || "ws://localhost:8001";

const http = axios.create({ baseURL: API_URL, timeout: 15000 });

http.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("access");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

http.interceptors.response.use(
  (r) => r,
  async (err) => {
    const original = err.config;
    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;
      try {
        const refresh = localStorage.getItem("refresh");
        if (!refresh) throw new Error("no refresh");
        const { data } = await axios.post(`${API_URL}/auth/refresh/`, { refresh });
        localStorage.setItem("access", data.access);
        original.headers.Authorization = `Bearer ${data.access}`;
        return http(original);
      } catch {
        localStorage.clear();
        if (!window.location.pathname.startsWith("/login")) {
          window.location.href = "/login";
        }
      }
    } else if (err.response?.status >= 500) {
      Swal.fire("Server xatosi", err.response.data?.detail || "Keyinroq urinib ko'ring", "error");
    }
    return Promise.reject(err);
  }
);

export default http;