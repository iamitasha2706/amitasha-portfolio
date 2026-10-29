<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { skillGroups } from '../data/portfolio'

/** Groups with many items span two columns so they don't look cramped. */
function isWide(count: number): boolean {
  return count >= 7
}
</script>

<template>
  <section id="skills" class="section section--alt">
    <div class="container">
      <SectionHeading
        title="Skills"
        lead="Grouped by area. These reflect tools and techniques I have worked with."
      />

      <div class="skills__grid">
        <article
          v-for="group in skillGroups"
          :key="group.title"
          class="skill-card"
          :class="{ 'skill-card--wide': isWide(group.items.length) }"
        >
          <h3 class="skill-card__title">{{ group.title }}</h3>
          <ul class="skill-card__tags">
            <li v-for="item in group.items" :key="item">
              <span class="tag">{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
}

.skill-card {
  grid-column: span 2;
  padding: var(--space-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background-color: var(--bg);
  transition: border-color var(--transition), transform var(--transition);
}

/* Large groups (many items) take the full row width. */
.skill-card--wide {
  grid-column: span 4;
}

.skill-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.skill-card__title {
  font-size: 1.1rem;
  margin: 0 0 var(--space-2);
}

.skill-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
}

@media (max-width: 760px) {
  .skills__grid {
    grid-template-columns: 1fr;
  }

  .skill-card,
  .skill-card--wide {
    grid-column: auto;
  }
}
</style>
