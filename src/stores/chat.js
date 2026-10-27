import { ref } from "vue";

const activeChatId = ref(null);
const chats = ref([]);

export function useChatStore() {
  return { activeChatId, chats };
}