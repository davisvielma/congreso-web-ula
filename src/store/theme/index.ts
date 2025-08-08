import { create } from 'zustand'

interface State {
  theme: 'light' | 'dark'
}

interface Actions {
  setTheme: (theme: State['theme']) => void
}

export const useThemeStore = create<State & Actions>((set) => ({
  theme: (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
  setTheme: (theme) => set(() => ({ theme })),
}))
