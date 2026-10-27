<template>
  <button :class="['follow-btn', { following }]" @click="toggle">
    {{ following ? "Following" : "Follow" }}
  </button>
</template>

<script setup>
import { ref } from "vue";
import { toggleFollow } from "../../api/users";

const props = defineProps({ user: Object });
const emit = defineEmits(["changed"]);
const following = ref(!!props.user.is_following);

async function toggle() {
  const { data } = await toggleFollow(props.user.id);
  following.value = data.following;
  emit("changed");
}
</script>

<style scoped>
.follow-btn {
  padding: 6px 14px;
  border-radius: 8px;
  background: #0095f6;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
}
.follow-btn.following { background: #efefef; color: #262626; }
</style>