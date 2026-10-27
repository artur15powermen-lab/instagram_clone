<template>
  <form class="composer" @submit.prevent="submit">
    <input v-model="text" placeholder="Xabar yozing..." @input="$emit('typing')" />
    <button>➤</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
const emit = defineEmits(["send", "typing"]);
function submit() {
  if (!text.value.trim()) return;
  emit("send", text.value);
  text.value = "";
}
</script>

<style scoped>
.composer { display: flex; gap: 8px; padding: 16px; border-top: 1px solid #dbdbdb; }
</style>