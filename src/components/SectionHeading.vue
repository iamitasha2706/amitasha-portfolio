<script setup lang="ts">
defineProps<{ title: string; lead?: string }>()
</script>

<template>
  <header>
    <h2 class="section__title">{{ title }}</h2>
    <p v-if="lead" class="section__lead">{{ lead }}</p>
  </header>
</template>
