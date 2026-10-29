<script setup lang="ts">
import { links, profile } from '../data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">© {{ year }} {{ profile.name }}</p>
      <nav class="footer__links" aria-label="Footer">
        <a :href="`mailto:${links.email}`">Email</a>
        <a :href="links.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="links.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#top">Back to top</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: var(--space-4) 0;
  background-color: var(--bg-elevated);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-2);
}

.footer__copy {
  margin: 0;
  color: var(--text-faint);
  font-size: 0.9rem;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.footer__links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 600;
}

.footer__links a:hover {
  color: var(--accent);
}
</style>
