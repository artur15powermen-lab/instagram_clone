<template>
  <label class="create">
    ➕ Story
    <input type="file" accept="image/*" hidden @change="upload" />
  </label>
</template>

<script setup>
import Swal from "sweetalert2";
import { createStory } from "../../api/stories";

const emit = defineEmits(["created"]);

async function upload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const fd = new FormData();
  fd.append("image", file);
  await createStory(fd);
  Swal.fire({ icon: "success", title: "Story yuklandi!", timer: 900, showConfirmButton: false });
  e.target.value = "";
  emit("created");
}
</script>

<style scoped>
.create {
  display: inline-block; background: #e1306c; color: #fff;
  padding: 8px 16px; border-radius: 8px; cursor: pointer; font-weight: 600;
}
</style>