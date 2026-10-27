<template>
  <div class="layout">
    <Sidebar />
    <main class="feed">
      <StoryBar :stories="stories" @refresh="loadStories" />

      <PostCreate @created="loadPosts" />

      <div v-if="loading" class="spinner-wrap"><Spinner /></div>
      <template v-else>
        <PostCard v-for="p in posts" :key="p.id" :post="p" @changed="loadPosts" />
        <EmptyState v-if="!posts.length" text="Hozircha postlar yo'q. Birinchi bo'ling!" />
      </template>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Sidebar from "../components/layout/Sidebar.vue";
import StoryBar from "../components/stories/StoryBar.vue";
import PostCreate from "../components/posts/PostCreate.vue";
import PostCard from "../components/posts/PostCard.vue";
import Spinner from "../components/ui/Spinner.vue";
import EmptyState from "../components/ui/EmptyState.vue";
import { getPosts } from "../api/posts";
import { getStories } from "../api/stories";

const posts = ref([]);
const stories = ref([]);
const loading = ref(true);

async function loadPosts() {
  loading.value = true;
  try {
    const data = (await getPosts()).data;
    posts.value = data.results || data;
  } finally {
    loading.value = false;
  }
}

async function loadStories() {
  const data = (await getStories()).data;
  stories.value = data.results || data;
}

onMounted(() => { loadPosts(); loadStories(); });
</script>

<style scoped>
.spinner-wrap { display: flex; justify-content: center; padding: 40px; }
</style>