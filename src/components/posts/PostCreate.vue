<template>
  <div class="create-box">
    <label class="create-btn">
      📷 Yangi post
      <input type="file" accept="image/*" hidden @change="upload" />
    </label>
    <input v-model="caption" placeholder="Izoh (ixtiyoriy)" style="margin-top:8px" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import { createPost } from "../../api/posts";

const caption = ref("");
const emit = defineEmits(["created"]);

async function upload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const fd = new FormData();
  fd.append("image", file);
  fd.append("caption", caption.value);
  try {
    await createPost(fd);
    caption.value = "";
    e.target.value = "";
    Swal.fire({ icon: "success", title: "Yuklandi!", timer: 900, showConfirmButton: false });
    emit("created");
  } catch {
    Swal.fire("Xato", "Yuklab bo'lmadi", "error");
  }
}
</script>

<style scoped>
.create-box { background: #fff; border: 1px solid #dbdbdb; border-radius: 12px; padding: 16px; margin-bottom: 20px; }
.create-btn {
  display: inline-block;
  background: #0095f6;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
</style>