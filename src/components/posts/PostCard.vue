<template>
  <article class="post">
    <header class="post-head">
      <Avatar :src="post.author_avatar" :username="post.author_username" :size="36" />
      <strong>{{ post.author_username }}</strong>
    </header>
    <img :src="post.image" class="post-img" />
    <div class="post-actions">
      <button class="icon-btn" @click="toggleLike">
        {{ liked ? "❤️" : "🤍" }} {{ likeCount }}
      </button>
      <span>💬 {{ post.comments_count || 0 }}</span>
    </div>
    <p v-if="post.caption" class="caption">
      <strong>{{ post.author_username }}</strong> {{ post.caption }}
    </p>
    <small style="color:#999;padding:0 16px 16px;display:block">
      {{ formatDate(post.created_at) }}
    </small>
  </article>
</template>

<script setup>
import { computed, ref } from "vue";
import Avatar from "../user/Avatar.vue";
import { likePost } from "../../api/posts";

const props = defineProps({ post: Object });
const emit = defineEmits(["changed"]);

const liked = ref(props.post.is_liked);
const likeCount = ref(props.post.likes_count);

async function toggleLike() {
  const { data } = await likePost(props.post.id);
  liked.value = data.liked;
  likeCount.value = data.likes_count;
}

function formatDate(d) {
  return new Date(d).toLocaleString("uz-UZ", {
    day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
  });
}
</script>

<style scoped>
.post { background: #fff; border: 1px solid #dbdbdb; border-radius: 12px; margin-bottom: 20px; overflow: hidden; }
.post-head { display: flex; align-items: center; gap: 12px; padding: 14px 16px; }
.post-img { width: 100%; display: block; }
.post-actions { display: flex; gap: 16px; padding: 12px 16px; }
.icon-btn { background: transparent; color: inherit; padding: 0; font-size: 18px; }
.caption { padding: 0 16px 8px; font-size: 14px; }
</style>