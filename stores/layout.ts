import { defineStore } from "pinia";

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    sidebar: false,
  }),
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    setSidebar(value: boolean) {
      this.sidebar = value;
    },
    toggleSidebarMini() {
      this.sidebarMini = !this.sidebarMini;
    },
  },
});