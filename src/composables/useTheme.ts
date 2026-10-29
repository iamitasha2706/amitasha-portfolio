import { onMounted, ref } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const theme = ref<Theme>('light')

function applyTheme(value: Theme): void {
  document.documentElement.setAttribute('data-theme', value)
}

function readInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

/**
 * Accessible light/dark theme toggle.
 * The initial value is also set in index.html before paint to avoid a flash;
 * this composable keeps Vue state in sync and persists user choices.
 */
export function useTheme() {
  onMounted(() => {
    theme.value = readInitialTheme()
    applyTheme(theme.value)
  })

  function toggleTheme(): void {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(theme.value)
    try {
      localStorage.setItem(STORAGE_KEY, theme.value)
    } catch {
      /* ignore storage errors (e.g. private mode) */
    }
  }

  return { theme, toggleTheme }
}
