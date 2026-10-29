<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { experience } from '../data/portfolio'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <SectionHeading title="Experience" />

      <ol class="timeline">
        <li v-for="(item, i) in experience" :key="i" class="timeline__item">
          <div class="timeline__dot" aria-hidden="true"></div>
          <article class="exp-card">
            <div class="exp-card__head">
              <h3 class="exp-card__role">{{ item.role }}</h3>
              <span class="exp-card__period">{{ item.period }}</span>
            </div>
            <p class="exp-card__meta">
              <strong>{{ item.company }}</strong>
              <span aria-hidden="true"> · </span>
              <span>{{ item.location }}</span>
            </p>
            <ul class="exp-card__bullets">
              <li v-for="(bullet, b) in item.bullets" :key="b">{{ bullet }}</li>
            </ul>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 1.75rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0.4rem;
  bottom: 0.4rem;
  left: 0.42rem;
  width: 2px;
  background: linear-gradient(var(--border-strong), transparent);
}

.timeline__item {
  position: relative;
  margin-bottom: var(--space-3);
}

.timeline__dot {
  position: absolute;
  left: -1.6rem;
  top: 0.55rem;
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  background: var(--gradient);
  box-shadow: 0 0 0 4px var(--bg);
}

.exp-card {
  padding: var(--space-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background-color: var(--bg-elevated);
}

.exp-card__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
}

.exp-card__role {
  font-size: 1.15rem;
  margin: 0;
}

.exp-card__period {
  color: var(--text-faint);
  font-size: 0.88rem;
  font-weight: 600;
  white-space: nowrap;
}

.exp-card__meta {
  margin: 0.3rem 0 var(--space-2);
  color: var(--text-muted);
}

.exp-card__meta strong {
  color: var(--text);
}

.exp-card__bullets {
  padding-left: 1.1rem;
  margin: 0;
}

.exp-card__bullets li {
  margin-bottom: 0.5rem;
  color: var(--text-muted);
}
</style>
