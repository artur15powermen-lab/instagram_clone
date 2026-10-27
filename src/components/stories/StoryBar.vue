<template>
  <Swiper :slides-per-view="5" :space-between="12" class="story-bar">
    <SwiperSlide v-for="s in stories" :key="s.id">
      <div class="story" @click="viewStory(s)">
        <img :src="s.image" />
        <small>{{ s.username }}</small>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import Swal from "sweetalert2";

defineProps({ stories: Array });

function viewStory(s) {
  Swal.fire({ imageUrl: s.image, imageAlt: s.username, showConfirmButton: false, showCloseButton: true });
}
</script>

<style scoped>
.story-bar { margin-bottom: 24px; }
.story { display: flex; flex-direction: column; align-items: center; gap: 4px; cursor: pointer; }
.story img {
  width: 70px; height: 70px; border-radius: 50%;
  object-fit: cover; border: 3px solid #e1306c; padding: 2px;
}
.story small { font-size: 12px; }
</style>