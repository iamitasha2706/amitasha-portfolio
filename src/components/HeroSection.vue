<script setup lang="ts">
import IconLibrary from './IconLibrary.vue'
import { availability, headshot, links, profile } from '../data/portfolio'

const hasResume = links.resume.trim().length > 0
const hasHeadshot = headshot.src.trim().length > 0
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__inner">
      <div class="hero__content fade-in">
        <h1 class="hero__headline">{{ profile.heroHeadline }}</h1>
        <p class="hero__supporting">{{ profile.heroSupporting }}</p>

        <p class="hero__name">{{ profile.name }}</p>

        <p v-if="availability.showAvailability" class="hero__availability">
          {{ availability.text }}
        </p>

        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">View Projects</a>
          <a :href="`mailto:${links.email}`" class="btn btn--secondary">
            <IconLibrary name="email" class="btn__icon" />
            Contact Me
          </a>
        </div>

        <ul class="hero__links">
          <li>
            <a
              :href="links.linkedin"
              class="hero__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLibrary name="linkedin" class="btn__icon" />
              LinkedIn
              <IconLibrary name="external" class="hero__link-ext" />
            </a>
          </li>
          <li>
            <a
              :href="links.github"
              class="hero__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLibrary name="github" class="btn__icon" />
              GitHub
              <IconLibrary name="external" class="hero__link-ext" />
            </a>
          </li>
          <li v-if="hasResume">
            <a
              :href="links.resume"
              class="hero__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLibrary name="document" class="btn__icon" />
              Resume
              <IconLibrary name="external" class="hero__link-ext" />
            </a>
          </li>
        </ul>
      </div>

      <div v-if="hasHeadshot" class="hero__portrait">
        <img :src="headshot.src" :alt="headshot.alt" />
        <div class="hero__glow" aria-hidden="true"></div>
      </div>

      <div v-else class="hero__visual" aria-hidden="true">
        <div class="orb orb--search">
          <IconLibrary name="search" />
          <span>Search</span>
        </div>
        <div class="orb orb--ml">
          <IconLibrary name="brain" />
          <span>ML</span>
        </div>
        <div class="orb orb--rag">
          <IconLibrary name="graph" />
          <span>RAG</span>
        </div>
        <div class="hero__glow"></div>
      </div>
    </div>

    <a href="#about" class="hero__scroll" aria-label="Scroll to About section">
      <IconLibrary name="arrow-down" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: clamp(3rem, 2rem + 8vw, 7rem) 0 var(--space-6);
  overflow: hidden;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--space-5);
  align-items: center;
}

.hero__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0 0 var(--space-2);
  color: var(--text-faint);
  font-weight: 600;
  font-size: 0.9rem;
}

.hero__kicker :deep(.icon) {
  width: 1.05rem;
  height: 1.05rem;
}

.hero__headline {
  font-size: clamp(2rem, 1.3rem + 3.2vw, 3.1rem);
  margin: 0 0 var(--space-2);
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__supporting {
  font-size: clamp(1.05rem, 1rem + 0.4vw, 1.2rem);
  max-width: 52ch;
  margin: 0 0 var(--space-3);
}

.hero__name {
  font-weight: 700;
  color: var(--text);
  margin: 0 0 0.25rem;
  font-size: 1.05rem;
}

.hero__availability {
  display: inline-block;
  margin: 0 0 var(--space-3);
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background-color: var(--accent-soft);
  color: var(--accent-strong);
  font-size: 0.88rem;
  font-weight: 600;
}

[data-theme='dark'] .hero__availability {
  color: var(--accent);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: var(--space-3);
}

.hero__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  list-style: none;
}

.hero__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.95rem;
}

.hero__link:hover {
  color: var(--accent);
}

.hero__link-ext {
  width: 0.85rem;
  height: 0.85rem;
  opacity: 0.7;
}

/* Portrait */
.hero__portrait {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 280px;
}

.hero__portrait .hero__glow {
  inset: 50% auto auto 50%;
  width: 240px;
  height: 240px;
  transform: translate(-50%, -50%);
}

.hero__portrait img {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 220px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--bg-elevated);
  box-shadow: var(--shadow-md), 0 0 0 1px var(--border);
}

/* Visual */
.hero__visual {
  position: relative;
  min-height: 320px;
}

.hero__glow {
  position: absolute;
  inset: 10% 5%;
  background: var(--gradient);
  filter: blur(70px);
  opacity: 0.18;
  border-radius: 50%;
}

.orb {
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  background-color: var(--bg-elevated);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  color: var(--accent);
  font-weight: 700;
  font-size: 0.85rem;
}

.orb :deep(.icon) {
  width: 1.8rem;
  height: 1.8rem;
}

.orb span {
  color: var(--text);
}

.orb--search {
  top: 6%;
  left: 8%;
  animation: float 6s ease-in-out infinite;
}

.orb--ml {
  top: 40%;
  right: 6%;
  animation: float 6s ease-in-out infinite 1.5s;
}

.orb--rag {
  bottom: 6%;
  left: 24%;
  animation: float 6s ease-in-out infinite 3s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero__scroll {
  position: absolute;
  left: 50%;
  bottom: 1.25rem;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background-color: var(--bg-elevated);
  color: var(--text-muted);
  animation: bob 2.4s ease-in-out infinite;
}

.hero__scroll:hover {
  color: var(--accent);
  border-color: var(--accent);
}

@keyframes bob {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(6px);
  }
}

@media (max-width: 860px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }

  .hero__visual {
    display: none;
  }

  .hero__portrait {
    min-height: 0;
    margin-bottom: var(--space-2);
  }

  .hero__portrait img {
    max-width: 180px;
  }

  .hero__scroll {
    display: none;
  }
}
</style>
