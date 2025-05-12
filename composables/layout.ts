import { useLayoutStore } from "~/stores/layout";

export function useLayout () {
  const layoutStore = useLayoutStore();
  const sidebar = computed({
    get() {
      return layoutStore.sidebar;
    },
    set(value) {
      layoutStore.setSidebar(value);
    }
  });
  const sidebarItems = layoutStore.sidebarItems;
  const toggleSidebar = () => layoutStore.toggleSidebar();

  return {
    sidebar,
    sidebarItems,
    toggleSidebar,
  };
}