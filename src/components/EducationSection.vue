<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { education } from '../data/portfolio'
</script>

<template>
  <section id="education" class="section section--alt">
    <div class="container">
      <SectionHeading title="Education" />

      <ul class="edu__list">
        <li v-for="item in education" :key="item.institution" class="edu-card">
          <div class="edu-card__head">
            <h3 class="edu-card__inst">{{ item.institution }}</h3>
            <span class="edu-card__period">{{ item.period }}</span>
          </div>
          <p class="edu-card__qual">{{ item.qualification }}</p>
          <p class="edu-card__meta">
            <span v-if="item.location">{{ item.location }}</span>
            <span v-if="item.location && item.detail" aria-hidden="true"> · </span>
            <span v-if="item.detail" class="edu-card__detail">{{ item.detail }}</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.edu__list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-3);
}

.edu-card {
  padding: var(--space-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background-color: var(--bg);
}

.edu-card__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
}

.edu-card__inst {
  font-size: 1.05rem;
  margin: 0;
}

.edu-card__period {
  color: var(--text-faint);
  font-size: 0.85rem;
  font-weight: 600;
}

.edu-card__qual {
  margin: 0.4rem 0 0.2rem;
  color: var(--text);
  font-weight: 600;
}

.edu-card__meta {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.92rem;
}

.edu-card__detail {
  font-weight: 600;
  color: var(--accent);
}
</style>
