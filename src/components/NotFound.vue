<script setup lang="ts">
import { profile } from '../data/portfolio'
</script>

<template>
  <main class="notfound">
    <div class="container notfound__inner">
      <p class="notfound__code">404</p>
      <h1 class="notfound__title">Page not found</h1>
      <p class="notfound__text">
        The page you were looking for doesn’t exist or may have moved.
      </p>
      <a href="/" class="btn btn--primary">Back to {{ profile.name }}’s portfolio</a>
    </div>
  </main>
</template>

<style scoped>
.notfound {
  min-height: 70vh;
  display: grid;
  place-items: center;
  text-align: center;
}

.notfound__code {
  font-size: clamp(3rem, 2rem + 8vw, 6rem);
  font-weight: 800;
  margin: 0;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

.notfound__title {
  margin: var(--space-2) 0;
  font-size: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
}

.notfound__text {
  max-width: 46ch;
  margin: 0 auto var(--space-3);
}
</style>
