<template>
  <button :disabled="disabled" :class="variant"><slot /></button>
</template>

<script setup>
defineProps({ disabled: Boolean, variant: { type: String, default: "primary" } });
</script>

<style scoped>
button.primary { background: #0095f6; color: #fff; }
button.danger { background: #ed4956; color: #fff; }
button.ghost { background: transparent; color: #0095f6; }
</style>