export default defineNuxtPlugin((nuxtApp) => {
  // Register navigation components globally
  const components = import.meta.glob('../components/navigation/*.vue', { eager: true });
  
  Object.entries(components).forEach(([path, component]) => {
    const componentName = path.split('/').pop()?.replace(/\.\w+$/, '');
    if (componentName && 'default' in component) {
      nuxtApp.vueApp.component(componentName, component.default);
    }
  });
});