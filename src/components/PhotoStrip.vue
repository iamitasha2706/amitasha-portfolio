<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import IconLibrary from './IconLibrary.vue'

interface Photo {
  src: string
  alt: string
}

const props = defineProps<{ photos: Photo[] }>()

const activeIndex = ref<number | null>(null)

function open(index: number): void {
  activeIndex.value = index
}

function close(): void {
  activeIndex.value = null
}

function next(): void {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % props.photos.length
}

function prev(): void {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + props.photos.length) % props.photos.length
}

function onKeydown(event: KeyboardEvent): void {
  if (activeIndex.value === null) return
  if (event.key === 'Escape') close()
  else if (event.key === 'ArrowRight') next()
  else if (event.key === 'ArrowLeft') prev()
}

watch(activeIndex, (value) => {
  if (value !== null) {
    window.addEventListener('keydown', onKeydown)
    document.body.style.overflow = 'hidden'
  } else {
    window.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <ul class="strip">
    <li v-for="(photo, i) in photos" :key="photo.src">
      <button
        type="button"
        class="strip__thumb"
        @click="open(i)"
        :aria-label="`View photo: ${photo.alt}`"
      >
        <img :src="photo.src" :alt="photo.alt" loading="lazy" />
        <span class="strip__hint" aria-hidden="true">
          <IconLibrary name="external" />
        </span>
      </button>
    </li>
  </ul>

  <Teleport to="body">
    <div
      v-if="activeIndex !== null"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="photos[activeIndex].alt"
      @click.self="close"
    >
      <button class="lightbox__btn lightbox__close" type="button" @click="close">
        <IconLibrary name="close" />
        <span class="sr-only">Close</span>
      </button>

      <button
        v-if="photos.length > 1"
        class="lightbox__btn lightbox__nav lightbox__prev"
        type="button"
        @click="prev"
      >
        <span aria-hidden="true">‹</span>
        <span class="sr-only">Previous photo</span>
      </button>

      <figure class="lightbox__figure">
        <img :src="photos[activeIndex].src" :alt="photos[activeIndex].alt" />
        <figcaption>{{ photos[activeIndex].alt }}</figcaption>
      </figure>

      <button
        v-if="photos.length > 1"
        class="lightbox__btn lightbox__nav lightbox__next"
        type="button"
        @click="next"
      >
        <span aria-hidden="true">›</span>
        <span class="sr-only">Next photo</span>
      </button>
    </div>
  </Teleport>
</template>

<style scoped>
.strip {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: var(--space-3);
}

.strip__thumb {
  position: relative;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: none;
  cursor: pointer;
  overflow: hidden;
  width: 92px;
  height: 92px;
  transition: transform var(--transition), border-color var(--transition),
    box-shadow var(--transition);
}

.strip__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--transition);
}

.strip__thumb:hover,
.strip__thumb:focus-visible {
  transform: translateY(-3px) scale(1.04);
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}

.strip__thumb:hover img,
.strip__thumb:focus-visible img {
  transform: scale(1.08);
}

.strip__hint {
  position: absolute;
  right: 4px;
  bottom: 4px;
  display: grid;
  place-items: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  opacity: 0;
  transition: opacity var(--transition);
}

.strip__hint :deep(.icon) {
  width: 0.85rem;
  height: 0.85rem;
}

.strip__thumb:hover .strip__hint,
.strip__thumb:focus-visible .strip__hint {
  opacity: 1;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  gap: var(--space-2);
  grid-template-columns: auto 1fr auto;
  padding: clamp(1rem, 4vw, 3rem);
  background: rgba(8, 12, 22, 0.86);
  backdrop-filter: blur(4px);
  animation: lb-in 160ms ease both;
}

@keyframes lb-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lightbox__figure {
  grid-column: 2;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  max-height: 100%;
}

.lightbox__figure img {
  max-width: min(90vw, 1100px);
  max-height: 78vh;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
}

.lightbox__figure figcaption {
  color: #e6ecf7;
  font-size: 0.92rem;
  text-align: center;
  max-width: 60ch;
}

.lightbox__btn {
  display: grid;
  place-items: center;
  border: none;
  cursor: pointer;
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 50%;
}

.lightbox__btn:hover {
  background: rgba(255, 255, 255, 0.24);
}

.lightbox__nav {
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  line-height: 1;
}

.lightbox__prev {
  grid-column: 1;
}

.lightbox__next {
  grid-column: 3;
}

.lightbox__close {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 2.75rem;
  height: 2.75rem;
}

@media (max-width: 640px) {
  .lightbox {
    grid-template-columns: 1fr;
  }

  .lightbox__figure {
    grid-column: 1;
  }

  .lightbox__nav {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
  }

  .lightbox__prev {
    left: 0.5rem;
  }

  .lightbox__next {
    right: 0.5rem;
  }
}
</style>
