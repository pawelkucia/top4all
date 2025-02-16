import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateThemeClass();
  };

  const updateThemeClass = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    isDark,
    toggleTheme
  };
});