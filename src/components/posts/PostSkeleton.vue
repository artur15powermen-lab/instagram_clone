<template>
  <div class="skeleton">
    <div class="head"></div>
    <div class="img"></div>
  </div>
</template>

<style scoped>
.skeleton { background: #fff; border: 1px solid #dbdbdb; border-radius: 12px; margin-bottom: 20px; overflow: hidden; }
.head { height: 60px; background: #f0f0f0; }
.img { height: 400px; background: #f0f0f0; animation: pulse 1.5s infinite; }
@keyframes pulse { 50% { opacity: 0.6; } }
</style>