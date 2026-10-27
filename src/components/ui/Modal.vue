<template>
  <div v-if="open" class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({ open: Boolean });
defineEmits(["close"]);
</script>

<style scoped>
.overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center; z-index: 999;
}
.modal { background: #fff; border-radius: 12px; padding: 24px; max-width: 500px; width: 90%; }
</style>