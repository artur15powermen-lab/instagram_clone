<template>
  <img :src="src || '/assets/images/placeholder.png'"
       :alt="username"
       :style="{ width: size + 'px', height: size + 'px' }"
       class="avatar" />
</template>

<script setup>
defineProps({ src: String, username: String, size: { type: Number, default: 40 } });
</script>

<style scoped>
.avatar { border-radius: 50%; object-fit: cover; background: #f0f0f0; }
</style>