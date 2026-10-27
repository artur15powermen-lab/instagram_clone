<template>
  <div class="typing">yozmoqda<span>.</span><span>.</span><span>.</span></div>
</template>

<style scoped>
.typing { color: #999; font-size: 12px; font-style: italic; }
@keyframes blink { 50% { opacity: 0; } }
.typing span { animation: blink 1.2s infinite; }
.typing span:nth-child(2) { animation-delay: 0.2s; }
.typing span:nth-child(3) { animation-delay: 0.4s; }
</style>