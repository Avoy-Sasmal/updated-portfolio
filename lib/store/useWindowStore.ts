import { create } from 'zustand';

export type WindowType = 'terminal' | 'explorer' | 'about' | 'skills' | 'projects' | 'contact' | 'vscode';

interface WindowState {
  id: WindowType;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface WindowStore {
  windows: Record<WindowType, WindowState>;
  activeWindow: WindowType | null;
  openWindow: (id: WindowType) => void;
  closeWindow: (id: WindowType) => void;
  minimizeWindow: (id: WindowType) => void;
  maximizeWindow: (id: WindowType) => void;
  focusWindow: (id: WindowType) => void;
}

const initialWindows: Record<WindowType, WindowState> = {
  terminal: { id: 'terminal', title: 'Terminal', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  explorer: { id: 'explorer', title: 'File Explorer', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  about: { id: 'about', title: 'About Me', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  skills: { id: 'skills', title: 'My Skills', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  projects: { id: 'projects', title: 'Projects', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  contact: { id: 'contact', title: 'Contact', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
  vscode: { id: 'vscode', title: 'Visual Studio Code', isOpen: false, isMinimized: false, isMaximized: false, zIndex: 10 },
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: initialWindows,
  activeWindow: null,

  openWindow: (id) =>
    set((state) => {
      const maxZIndex = Math.max(...Object.values(state.windows).map((w) => w.zIndex), 10);
      return {
        windows: {
          ...state.windows,
          [id]: { ...state.windows[id], isOpen: true, isMinimized: false, zIndex: maxZIndex + 1 },
        },
        activeWindow: id,
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: false },
      },
      activeWindow: state.activeWindow === id ? null : state.activeWindow,
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: true },
      },
      activeWindow: state.activeWindow === id ? null : state.activeWindow,
    })),

  maximizeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMaximized: !state.windows[id].isMaximized },
      },
    })),

  focusWindow: (id) =>
    set((state) => {
      const maxZIndex = Math.max(...Object.values(state.windows).map((w) => w.zIndex), 10);
      if (state.activeWindow === id) return state;
      return {
        windows: {
          ...state.windows,
          [id]: { ...state.windows[id], isMinimized: false, zIndex: maxZIndex + 1 },
        },
        activeWindow: id,
      };
    }),
}));
