import http from "./http";

export const getChats = () => http.get("/chats/");
export const startChat = (userId) => http.post("/chats/start/", { user_id: userId });
export const getMessages = (chatId) => http.get(`/messages/?chat=${chatId}`);
export const sendMessage = (chatId, text) =>
  http.post("/messages/", { chat: chatId, text });