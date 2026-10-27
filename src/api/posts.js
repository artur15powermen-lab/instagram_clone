import http from "./http";

export const getPosts = () => http.get("/posts/");
export const getPost = (id) => http.get(`/posts/${id}/`);
export const createPost = (formData) => http.post("/posts/", formData);
export const deletePost = (id) => http.delete(`/posts/${id}/`);
export const likePost = (id) => http.post(`/posts/${id}/like/`);
export const getComments = (postId) => http.get(`/comments/?post=${postId}`);
export const createComment = (postId, text) =>
  http.post("/comments/", { post: postId, text });