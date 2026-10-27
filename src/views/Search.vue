<template>
  <div class="layout">
    <Sidebar />
    <main class="feed">
      <input v-model="q" placeholder="Foydalanuvchi qidirish..." @input="search" />
      <div style="margin-top:16px">
        <UserCard v-for="u in results" :key="u.id" :user="u" />
        <EmptyState v-if="q && !results.length" text="Topilmadi" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "../components/layout/Sidebar.vue";
import UserCard from "../components/user/UserCard.vue";
import EmptyState from "../components/ui/EmptyState.vue";
import { listUsers } from "../api/users";

const q = ref("");
const results = ref([]);
let allUsers = [];

async function search() {
  if (!allUsers.length) {
    const data = (await listUsers()).data;
    allUsers = data.results || data;
  }
  results.value = allUsers.filter(u =>
    u.username.toLowerCase().includes(q.value.toLowerCase())
  );
}
</script>