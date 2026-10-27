import { onMounted, onBeforeUnmount } from "vue";

export function useInfiniteScroll(elRef, callback, options = {}) {
  let observer;

  onMounted(() => {
    if (!elRef.value) return;
    observer = new IntersectionObserver(
      (entries) => entries[0].isIntersecting && callback(),
      { rootMargin: "200px", ...options }
    );
    observer.observe(elRef.value);
  });

  onBeforeUnmount(() => observer?.disconnect());
}