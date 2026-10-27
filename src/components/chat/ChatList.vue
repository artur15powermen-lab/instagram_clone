<template>
  <aside class="chat-list">
    <h3 style="padding:16px">Chatlar</h3>
    <div v-for="c in chats" :key="c.id"
         :class="['chat-item', { active: c.id === activeId }]"
         @click="$emit('select', c.id)">
      <span>💬 Chat #{{ c.id }}</span>
      <small v-if="c.last_message">{{ c.last_message.text.slice(0, 30) }}</small>
    </div>
    <p v-if="!chats.length" style="padding:16px;color:#999;font-size:14px">
      Chat yo'q. Boshqalarni qidirib boshlang.
    </p>
  </aside>
</template>

<script setup>
defineProps({ chats: Array, activeId: Number });
defineEmits(["select"]);
</script>

<style scoped>
.chat-list { border-right: 1px solid #dbdbdb; overflow-y: auto; height: 100vh; }
.chat-item {
  padding: 14px 16px; cursor: pointer; border-bottom: 1px solid #f0f0f0;
  display: flex; flex-direction: column; gap: 4px;
}
.chat-item:hover { background: #fafafa; }
.chat-item.active { background: #eff6ff; }
.chat-item small { color: #666; font-size: 12px; }
</style>