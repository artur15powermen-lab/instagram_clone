import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/login", component: () => import("../views/Login.vue"), meta: { public: true } },
  { path: "/register", component: () => import("../views/Register.vue"), meta: { public: true } },
  { path: "/", component: () => import("../views/Feed.vue") },
  { path: "/stories", component: () => import("../views/Stories.vue") },
  { path: "/chat/:id?", component: () => import("../views/Chat.vue") },
  { path: "/profile/:id?", component: () => import("../views/Profile.vue") },
  { path: "/post/:id", component: () => import("../views/PostDetail.vue") },
  { path: "/search", component: () => import("../views/Search.vue") },
  { path: "/:pathMatch(.*)*", component: () => import("../views/NotFound.vue") },
];

export const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to) => {
  const authed = !!localStorage.getItem("access");
  if (!to.meta.public && !authed) return "/login";
  if (to.meta.public && authed) return "/";
});