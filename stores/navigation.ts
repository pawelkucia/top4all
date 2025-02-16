import { defineStore } from 'pinia';

interface ServiceLink {
  label: string;
  path: string;
}

export const useNavigationStore = defineStore('navigation', () => {
  const serviceLinks = ref<ServiceLink[]>([
    { label: 'SEO Audit', path: '/seo-audit' },
    { label: 'SEM Audit', path: '/sem-audit' },
    { label: 'Google Ads Audit', path: '/google-ads-audit' }
  ]);

  return {
    serviceLinks
  };
});