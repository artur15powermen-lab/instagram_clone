import http from "./http";

export const me = () => http.get("/users/me/");
export const getUser = (id) => http.get(`/users/${id}/`);
export const listUsers = () => http.get("/users/");
export const toggleFollow = (id) => http.post(`/users/${id}/follow/`);