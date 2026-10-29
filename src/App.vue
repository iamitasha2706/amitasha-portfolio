<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import CommunitySection from './components/CommunitySection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import NotFound from './components/NotFound.vue'

/**
 * This is a single-page site. The only "route" that matters is the root path.
 * Any other pathname (e.g. a mistyped URL) renders the custom 404 view.
 * Hash anchors (#about, #projects, ...) are handled natively by the browser.
 */
const path = ref(window.location.pathname)

function onPopState(): void {
  path.value = window.location.pathname
}

const isHome = computed(() => path.value === '/' || path.value === '/index.html')

onMounted(() => window.addEventListener('popstate', onPopState))
onBeforeUnmount(() => window.removeEventListener('popstate', onPopState))
</script>

<template>
  <a class="skip-link" href="#main">Skip to main content</a>

  <template v-if="isHome">
    <TheHeader />
    <main id="main">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CommunitySection />
      <ContactSection />
    </main>
    <TheFooter />
  </template>

  <NotFound v-else />
</template>
