import { create } from 'zustand';

interface HeaderStore {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
