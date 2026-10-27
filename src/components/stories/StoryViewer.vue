<template>
  <div class="viewer" @click="view">
    <img :src="story.image" />
    <p>{{ story.username }}</p>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
const props = defineProps({ story: Object });
function view() {
  Swal.fire({ imageUrl: props.story.image, showConfirmButton: false, showCloseButton: true });
}
</script>

<style scoped>
.viewer { cursor: pointer; }
.viewer img { width: 100%; aspect-ratio: 9/16; object-fit: cover; border-radius: 8px; }
.viewer p { text-align: center; margin-top: 6px; font-size: 13px; }
</style>