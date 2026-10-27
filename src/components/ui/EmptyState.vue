<template>
  <div class="empty">{{ text }}</div>
</template>

<script setup>
defineProps({ text: { type: String, default: "Bo'sh" } });
</script>

<style scoped>
.empty { text-align: center; padding: 40px; color: #999; }
</style>