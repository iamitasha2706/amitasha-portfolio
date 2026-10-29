<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import PhotoStrip from './PhotoStrip.vue'
import { community } from '../data/portfolio'
</script>

<template>
  <section id="community" class="section">
    <div class="container">
      <SectionHeading title="Community" />

      <p class="community__intro">{{ community.intro }}</p>

      <article class="community-card">
        <div class="community-card__head">
          <div>
            <h3 class="community-card__role">{{ community.role }}</h3>
            <p class="community-card__org">{{ community.organization }}</p>
          </div>
          <span class="community-card__period">{{ community.period }}</span>
        </div>
        <ul class="community-card__bullets">
          <li v-for="(bullet, i) in community.bullets" :key="i">{{ bullet }}</li>
        </ul>
      </article>

      <PhotoStrip v-if="community.photos.length" :photos="community.photos" />
    </div>
  </section>
</template>

<style scoped>
.community__intro {
  max-width: 70ch;
  font-size: 1.05rem;
  margin: 0 0 var(--space-3);
}

.community-card {
  padding: var(--space-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background-color: var(--bg-elevated);
  border-left: 4px solid var(--accent);
}

.community-card__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: var(--space-2);
}

.community-card__role {
  margin: 0;
  font-size: 1.1rem;
}

.community-card__org {
  margin: 0.2rem 0 0;
  color: var(--text-muted);
  font-weight: 600;
}

.community-card__period {
  color: var(--text-faint);
  font-size: 0.88rem;
  font-weight: 600;
}

.community-card__bullets {
  padding-left: 1.1rem;
  margin: 0;
}

.community-card__bullets li {
  color: var(--text-muted);
  margin-bottom: 0.4rem;
}

.community__intro + :deep(.strip),
.community-card + :deep(.strip) {
  margin-top: var(--space-3);
}
</style>
