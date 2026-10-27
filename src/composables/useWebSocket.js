import { onBeforeUnmount, ref } from "vue";
import { connectChat } from "../api/ws";

export function useWebSocket(chatIdRef) {
  const socket = ref(null);
  let typingTimeout = null;

  function connect(handlers) {
    if (socket.value) socket.value.close();
    socket.value = connectChat(chatIdRef.value, handlers);
  }

  function disconnect() {
    socket.value?.close();
    socket.value = null;
  }

  function emitTyping() {
    if (typingTimeout) return;
    socket.value?.send("typing");
    typingTimeout = setTimeout(() => { typingTimeout = null; }, 2000);
  }

  onBeforeUnmount(disconnect);
  return { socket, connect, disconnect, emitTyping };
}