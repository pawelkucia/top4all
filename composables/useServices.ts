export function useServices() {
  const services = [
    {
      id: 1,
      title: "SEO Services",
      icon: "/images/seo-icon.svg"
    },
    {
      id: 2,
      title: "Google Ads",
      icon: "/images/google-ads-icon.svg"
    },
    {
      id: 3,
      title: "Digital Audits",
      icon: "/images/audit-icon.svg"
    }
  ];

  return {
    services
  };
}