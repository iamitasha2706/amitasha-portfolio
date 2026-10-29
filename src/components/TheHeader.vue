<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import IconLibrary from './IconLibrary.vue'
import { useTheme } from '../composables/useTheme'
import { navItems, profile } from '../data/portfolio'

const { theme, toggleTheme } = useTheme()

const menuOpen = ref(false)
const scrolled = ref(false)

function closeMenu(): void {
  menuOpen.value = false
}

function toggleMenu(): void {
  menuOpen.value = !menuOpen.value
}

function onScroll(): void {
  scrolled.value = window.scrollY > 8
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container header__bar">
      <a class="brand" href="#top" @click="closeMenu">
        <span class="brand__mark" aria-hidden="true">AV</span>
        <span class="brand__name">{{ profile.name }}</span>
      </a>

      <nav class="nav" aria-label="Primary">
        <button
          class="nav__toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="primary-nav"
          @click="toggleMenu"
        >
          <IconLibrary :name="menuOpen ? 'close' : 'menu'" />
          <span class="sr-only">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
        </button>

        <ul id="primary-nav" class="nav__list" :class="{ 'nav__list--open': menuOpen }">
          <li v-for="item in navItems" :key="item.id">
            <a :href="`#${item.id}`" class="nav__link" @click="closeMenu">
              {{ item.label }}
            </a>
          </li>
          <li class="nav__theme-item">
            <button
              class="theme-toggle"
              type="button"
              role="switch"
              :aria-checked="theme === 'dark'"
              @click="toggleTheme"
            >
              <IconLibrary :name="theme === 'dark' ? 'sun' : 'moon'" />
              <span class="sr-only">
                Switch to {{ theme === 'dark' ? 'light' : 'dark' }} theme
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: saturate(140%) blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition), background-color var(--transition);
}

.header--scrolled {
  border-bottom-color: var(--border);
  box-shadow: var(--shadow-sm);
}

.header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text);
  font-weight: 700;
}

.brand:hover {
  text-decoration: none;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-sm);
  background: var(--gradient);
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
}

.brand__name {
  font-size: 0.98rem;
}

.nav {
  display: flex;
  align-items: center;
}

.nav__toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background-color: var(--bg-elevated);
  color: var(--text);
  cursor: pointer;
}

.nav__list {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  list-style: none;
}

.nav__link {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.95rem;
}

.nav__link:hover {
  color: var(--text);
  background-color: var(--accent-soft);
  text-decoration: none;
}

.nav__theme-item {
  margin-left: 0.4rem;
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background-color: var(--bg-elevated);
  color: var(--text);
  cursor: pointer;
  transition: border-color var(--transition), color var(--transition);
}

.theme-toggle:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 760px) {
  .nav__toggle {
    display: inline-flex;
    position: relative;
    z-index: 2;
  }

  .nav__list {
    position: absolute;
    top: 4rem;
    right: 0;
    left: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    padding: var(--space-2);
    background-color: var(--bg-elevated);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow-md);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition), transform var(--transition);
  }

  .nav__list--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav__link {
    padding: 0.75rem;
    font-size: 1rem;
  }

  .nav__theme-item {
    margin: 0.25rem 0 0;
  }

  .theme-toggle {
    width: 100%;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 0.75rem;
  }

  .theme-toggle .sr-only {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    margin: 0;
    white-space: normal;
    font-weight: 600;
  }
}
</style>
