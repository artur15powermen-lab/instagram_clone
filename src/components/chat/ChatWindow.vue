<template>
  <section class="chat-window">
    <header class="chat-header">Chat #{{ chatId }}</header>
    <div class="messages" ref="box">
      <MessageBubble v-for="m in messages" :key="m.id"
                     :message="m" :is-me="m.sender_username === me" />
      <TypingIndicator v-if="showTyping" />
    </div>
    <MessageInput @send="$emit('send', $event)" @typing="$emit('typing')" />
  </section>
</template>

<script setup>
import { onMounted, ref, watch, nextTick } from "vue";
import MessageBubble from "./MessageBubble.vue";
import MessageInput from "./MessageInput.vue";
import TypingIndicator from "./TypingIndicator.vue";

const props = defineProps({ chatId: Number, messages: Array, me: String });
defineEmits(["send", "typing"]);

const box = ref(null);
const showTyping = ref(false);

watch(() => props.messages.length, () => {
  nextTick(() => box.value && (box.value.scrollTop = box.value.scrollHeight));
});
</script>

<style scoped>
.chat-window { display: flex; flex-direction: column; height: 100vh; }
.chat-header { padding: 16px; border-bottom: 1px solid #dbdbdb; font-weight: 600; }
.messages { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 8px; }
</style>