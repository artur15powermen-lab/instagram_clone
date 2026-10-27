import { ref } from "vue";
import Swal from "sweetalert2";

const items = ref([]);

export function useNotifications() {
  function push(title, text, icon = "info") {
    items.value.push({ title, text, icon, at: Date.now() });
    Swal.fire({
      toast: true,
      position: "top-end",
      icon,
      title: text || title,
      showConfirmButton: false,
      timer: 3000,
    });
  }
  return { items, push };
}