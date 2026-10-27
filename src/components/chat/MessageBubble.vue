<template>
  <div :class="['bubble', isMe ? 'me' : 'other']">
    <small>{{ message.sender_username }}</small>
    <p>{{ message.text }}</p>
  </div>
</template>

<script setup>
defineProps({ message: Object, isMe: Boolean });
</script>

<style scoped>
.bubble { max-width: 70%; padding: 8px 12px; border-radius: 12px; font-size: 14px; }
.bubble small { display: block; font-size: 10px; opacity: 0.7; margin-bottom: 2px; }
.bubble.me { background: #0095f6; color: #fff; align-self: flex-end; border-bottom-right-radius: 2px; }
.bubble.other { background: #f0f0f0; align-self: flex-start; border-bottom-left-radius: 2px; }
</style>