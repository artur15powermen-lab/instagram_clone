<template>
  <aside class="sidebar">
    <h2 style="padding:24px 16px">📱 SocialHub</h2>
    <nav>
      <router-link to="/" class="nav-item">🏠 Lenta</router-link>
      <router-link to="/stories" class="nav-item">📸 Stories</router-link>
      <router-link to="/chat" class="nav-item">💬 Chat</router-link>
      <router-link to="/search" class="nav-item">🔍 Qidiruv</router-link>
      <router-link to="/profile" class="nav-item">👤 Profil</router-link>
    </nav>
    <button class="logout" @click="logout">Chiqish</button>
  </aside>
</template>

<script setup>
import { useRouter } from "vue-router";
import { logout as logoutApi } from "../../api/auth";

const router = useRouter();
function logout() {
  logoutApi();
  router.push("/login");
}
</script>

<style scoped>
.sidebar {
  background: #fff;
  border-right: 1px solid #dbdbdb;
  height: 100vh;
  position: sticky;
  top: 0;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}
nav { flex: 1; display: flex; flex-direction: column; }
.nav-item {
  padding: 14px 20px;
  font-size: 15px;
  transition: background 0.15s;
}
.nav-item:hover { background: #fafafa; }
.nav-item.router-link-active { background: #f0f0f0; font-weight: 600; }
.logout {
  margin: 16px;
  background: transparent;
  color: #ed4956;
  text-align: left;
  padding: 10px;
}
</style>