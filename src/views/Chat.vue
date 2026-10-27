<template>
  <div class="layout">
    <Sidebar />
    <main class="chat-layout">
      <ChatList :chats="chats" :active-id="activeId" @select="openChat" />

      <ChatWindow v-if="activeId"
                  :chat-id="activeId"
                  :messages="messages"
                  :me="me"
                  @send="send"
                  @typing="typing" />
      <div v-else class="chat-empty">
        <p>Chatni tanlang yoki boshlang</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Sidebar from "../components/layout/Sidebar.vue";
import ChatList from "../components/chat/ChatList.vue";
import ChatWindow from "../components/chat/ChatWindow.vue";
import { getChats, getMessages, sendMessage } from "../api/chat";
import { me as getMe } from "../api/users";
import { useWebSocket } from "../composables/useWebSocket";

const route = useRoute();
const router = useRouter();
const chats = ref([]);
const messages = ref([]);
const activeId = ref(null);
const me = ref("");
const { connect, disconnect, emitTyping } = useWebSocket(activeId);

async function loadChats() {
  const data = (await getChats()).data;
  chats.value = data.results || data;
}

async function openChat(chatId) {
  activeId.value = chatId;
  router.push(`/chat/${chatId}`);
  messages.value = (await getMessages(chatId)).data.results ||
                    (await getMessages(chatId)).data;
  connect({
    onMessage: (m) => messages.value.push(m),
  });
}

async function send(text) {
  await sendMessage(activeId.value, text);
}

function typing() { emitTyping(); }

onMounted(async () => {
  me.value = (await getMe()).data.username;
  await loadChats();
  if (route.params.id) openChat(Number(route.params.id));
});
</script>

<style scoped>
.chat-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100vh;
  background: #fff;
}
.chat-empty {
  display: flex; align-items: center; justify-content: center; color: #999;
}
</style>