<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import IconLibrary from './IconLibrary.vue'
import { projects } from '../data/portfolio'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <SectionHeading
        title="Projects"
        lead="Projects where I explore AI strategy and sharpen my skills with new tools."
      />

      <div class="projects__grid">
        <article v-for="project in projects" :key="project.name" class="project-card">
          <div class="project-card__top">
            <span class="project-card__label">{{ project.label }}</span>
          </div>

          <h3 class="project-card__name">
            {{ project.name }}
            <span class="project-card__tagline">— {{ project.tagline }}</span>
          </h3>

          <p class="project-card__desc">{{ project.description }}</p>

          <ul class="project-card__tech">
            <li v-for="tech in project.technologies" :key="tech">
              <span class="tag">{{ tech }}</span>
            </li>
          </ul>

          <div class="project-card__actions">
            <a
              v-if="project.repoUrl"
              :href="project.repoUrl"
              class="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLibrary name="github" class="btn__icon" />
              GitHub
            </a>
            <a
              v-if="project.paperUrl"
              :href="project.paperUrl"
              class="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLibrary name="document" class="btn__icon" />
              IEEE Paper
            </a>
            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              class="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLibrary name="external" class="btn__icon" />
              Live demo
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-3);
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background-color: var(--bg-elevated);
  transition: border-color var(--transition), transform var(--transition),
    box-shadow var(--transition);
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.project-card__top {
  margin-bottom: var(--space-2);
}

.project-card__label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-faint);
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
}

.project-card__name {
  font-size: 1.2rem;
  margin: 0 0 var(--space-2);
}

.project-card__tagline {
  font-weight: 500;
  color: var(--text-faint);
  font-size: 0.95rem;
}

.project-card__desc {
  margin: 0 0 var(--space-2);
  flex-grow: 1;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  margin-bottom: var(--space-2);
}

.project-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.project-card__actions .btn {
  padding: 0.5rem 0.9rem;
  font-size: 0.88rem;
}
</style>
