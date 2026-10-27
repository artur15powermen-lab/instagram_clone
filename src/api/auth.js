import http from "./http";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export async function login(username, password) {
  const { data } = await axios.post(`${API_URL}/auth/token/`, { username, password });
  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);
  return data;
}

export async function register(payload) {
  const { data } = await http.post("/auth/register/", payload);
  return data;
}

export function logout() {
  localStorage.clear();
}