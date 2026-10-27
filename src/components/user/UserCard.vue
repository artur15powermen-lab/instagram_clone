<template>
  <div class="user-card">
    <Avatar :src="user.avatar" :username="user.username" :size="48" />
    <div style="flex:1">
      <strong>{{ user.username }}</strong>
      <p style="font-size:12px;color:#666">{{ user.bio || "" }}</p>
    </div>
    <FollowButton :user="user" @changed="() => {}" />
  </div>
</template>

<script setup>
import Avatar from "./Avatar.vue";
import FollowButton from "./FollowButton.vue";
defineProps({ user: Object });
</script>

<style scoped>
.user-card { display: flex; gap: 12px; align-items: center; padding: 12px; border-bottom: 1px solid #f0f0f0; }
</style>