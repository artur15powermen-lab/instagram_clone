<template>
  <div class="layout">
    <Sidebar />
    <main class="feed" v-if="post">
      <PostCard :post="post" @changed="load" />
      <h3 style="margin-top:24px">Kommentlar ({{ post.comments?.length || 0 }})</h3>
      <CommentList :comments="post.comments || []" />
      <form @submit.prevent="addComment" style="display:flex;gap:8px;margin-top:16px">
        <input v-model="text" placeholder="Komment yozing..." required />
        <button>Yuborish</button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "../components/layout/Sidebar.vue";
import PostCard from "../components/posts/PostCard.vue";
import CommentList from "../components/posts/CommentList.vue";
import { getPost, createComment } from "../api/posts";

const route = useRoute();
const post = ref(null);
const text = ref("");

async function load() {
  post.value = (await getPost(route.params.id)).data;
}

async function addComment() {
  await createComment(route.params.id, text.value);
  text.value = "";
  load();
}

onMounted(load);
</script>