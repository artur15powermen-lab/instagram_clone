<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  width: 36px; height: 36px;
  border: 3px solid #dbdbdb; border-top-color: #0095f6;
  border-radius: 50%; animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>