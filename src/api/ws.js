import { WS_URL } from "./http";

export function connectChat(chatId, { onMessage, onTyping, onClose } = {}) {
  const ws = new WebSocket(`${WS_URL}/ws/chat/${chatId}`);
  ws.onmessage = (ev) => {
    const data = JSON.parse(ev.data);
    if (data.type === "message") onMessage?.(data);
    else if (data.type === "typing") onTyping?.();
  };
  ws.onclose = () => onClose?.();
  return {
    send: (msg) => ws.readyState === WebSocket.OPEN && ws.send(msg),
    close: () => ws.close(),
  };
}