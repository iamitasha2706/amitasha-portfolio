<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import IconLibrary from './IconLibrary.vue'
import { links } from '../data/portfolio'
</script>

<template>
  <section id="contact" class="section section--alt">
    <div class="container">
      <SectionHeading
        title="Contact"
        lead="The quickest way to reach me is by email. You can also find me on LinkedIn and GitHub."
      />

      <div class="contact__actions">
        <a :href="`mailto:${links.email}`" class="btn btn--primary">
          <IconLibrary name="email" class="btn__icon" />
          {{ links.email }}
        </a>
        <a
          :href="links.linkedin"
          class="btn btn--secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLibrary name="linkedin" class="btn__icon" />
          LinkedIn
        </a>
        <a
          :href="links.github"
          class="btn btn--secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLibrary name="github" class="btn__icon" />
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
