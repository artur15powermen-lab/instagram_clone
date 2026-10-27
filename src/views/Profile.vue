<template>
  <div class="layout">
    <Sidebar />
    <main class="feed">
      <div v-if="user" class="profile-head">
        <Avatar :src="user.avatar" :username="user.username" :size="100" />
        <div>
          <h2>@{{ user.username }}</h2>
          <p style="color:#666">{{ user.bio || "Bio yo'q" }}</p>
          <div class="stats">
            <span><strong>{{ user.posts_count || 0 }}</strong> postlar</span>
            <span><strong>{{ user.followers_count }}</strong> followers</span>
            <span><strong>{{ user.following_count }}</strong> following</span>
          </div>
          <FollowButton v-if="!isMe" :user="user" @changed="load" />
        </div>
      </div>

      <canvas ref="chartEl" height="200" style="margin-top:24px;max-width:400px"></canvas>

      <div class="posts-grid">
        <img v-for="p in posts" :key="p.id" :src="p.image" class="grid-img" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import Chart from "chart.js/auto";
import Sidebar from "../components/layout/Sidebar.vue";
import Avatar from "../components/user/Avatar.vue";
import FollowButton from "../components/user/FollowButton.vue";
import { getUser, me as getMe } from "../api/users";
import { getPosts } from "../api/posts";

const route = useRoute();
const user = ref(null);
const posts = ref([]);
const chartEl = ref(null);
const myId = ref(null);

const isMe = computed(() => user.value?.id === myId.value);

async function load() {
  const myData = (await getMe()).data;
  myId.value = myData.id;
  const id = route.params.id || myData.id;
  user.value = (await getUser(id)).data;
  const allPosts = (await getPosts()).data;
  const list = allPosts.results || allPosts;
  posts.value = list.filter(p => p.author === Number(id));

  if (chartEl.value && user.value) {
    new Chart(chartEl.value, {
      type: "doughnut",
      data: {
        labels: ["Followers", "Following"],
        datasets: [{
          data: [user.value.followers_count, user.value.following_count],
          backgroundColor: ["#e1306c", "#405de6"],
        }],
      },
    });
  }
}

onMounted(load);
</script>

<style scoped>
.profile-head { display: flex; gap: 32px; align-items: center; padding: 24px 0; }
.stats { display: flex; gap: 24px; margin: 12px 0; }
.posts-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; margin-top: 24px;
}
.grid-img { width: 100%; aspect-ratio: 1; object-fit: cover; }
</style>