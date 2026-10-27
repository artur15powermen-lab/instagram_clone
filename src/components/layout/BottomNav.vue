<template>
  <nav class="bottom-nav">
    <router-link to="/">🏠</router-link>
    <router-link to="/stories">📸</router-link>
    <router-link to="/chat">💬</router-link>
    <router-link to="/profile">👤</router-link>
  </nav>
</template>

<style scoped>
.bottom-nav {
  display: none;
  position: fixed;
  bottom: 0; left: 0; right: 0;
  background: #fff;
  border-top: 1px solid #dbdbdb;
  justify-content: space-around;
  padding: 12px;
  z-index: 100;
}
.bottom-nav a { font-size: 22px; }
@media (max-width: 768px) { .bottom-nav { display: flex; } }
</style>