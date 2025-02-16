export function useHeroSlides() {
  const slides = [
    {
      id: 1,
      title: "Digital Marketing Excellence",
      description: "Boost your online presence with our expert digital marketing services",
      image: "/images/hero-1-mood-seo.jpg",
      right: false,
    },
    {
      id: 2,
      title: "Data-Driven Results",
      description: "We use analytics and insights to drive your success",
      image: "/images/hero-2-everest.jpg",
      right: true,
    },
    {
      id: 3,
      title: "Custom Strategies",
      description: "Tailored digital marketing solutions for your business",
      image: "/images/hero-3-mountain.jpg",
      right: false,
    }
  ];

  return {
    slides
  };
}