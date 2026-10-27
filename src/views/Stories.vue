<template>
  <div class="layout">
    <Sidebar />
    <main class="feed">
      <h2 style="margin-bottom:16px">📸 Stories</h2>
      <StoryCreate @created="load" />
      <Swiper :slides-per-view="3" :space-between="12" style="margin-top:16px">
        <SwiperSlide v-for="s in stories" :key="s.id">
          <StoryViewer :story="s" />
        </SwiperSlide>
      </Swiper>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import Sidebar from "../components/layout/Sidebar.vue";
import StoryViewer from "../components/stories/StoryViewer.vue";
import StoryCreate from "../components/stories/StoryCreate.vue";
import { getStories } from "../api/stories";

const stories = ref([]);
async function load() {
  const data = (await getStories()).data;
  stories.value = data.results || data;
}
onMounted(load);
</script>