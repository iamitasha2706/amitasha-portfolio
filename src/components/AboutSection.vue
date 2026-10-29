<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import PhotoStrip from './PhotoStrip.vue'
import { aboutHuman, aboutParagraphs, aboutPhotos } from '../data/portfolio'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <SectionHeading title="About" />

      <div class="about__text">
        <p v-for="(para, i) in aboutParagraphs" :key="i">{{ para }}</p>
      </div>

      <div class="about__human">
        <h3 class="about__human-title">{{ aboutHuman.heading }}</h3>
        <p class="about__human-text">{{ aboutHuman.text }}</p>

        <PhotoStrip v-if="aboutPhotos.length" :photos="aboutPhotos" />
        <p v-if="aboutPhotos.length" class="about__gallery-hint">
          A few from the hills — tap any photo to view it full size.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-5);
  align-items: start;
}

.about__text {
  max-width: 72ch;
}

.about__text p {
  font-size: 1.05rem;
  margin: 0 0 var(--space-2);
}

.about__human {
  margin-top: var(--space-4);
  padding: var(--space-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background-color: var(--bg-elevated);
}

.about__human-title {
  margin: 0 0 var(--space-1);
  font-size: 1.1rem;
}

.about__human-text {
  margin: 0;
  max-width: 70ch;
  font-size: 1.02rem;
}

.about__gallery-hint {
  margin: 0.75rem 0 0;
  font-size: 0.85rem;
  color: var(--text-faint);
}

</style>
