import http from "./http";

export const getStories = () => http.get("/stories/");
export const createStory = (formData) => http.post("/stories/", formData);