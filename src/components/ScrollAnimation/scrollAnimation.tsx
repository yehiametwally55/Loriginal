import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    const sections = document.querySelectorAll(".fade-up");
    sections.forEach((section) => observer.observe(section));

    return () =>
      sections.forEach((section) => observer.unobserve(section));
  }, []);
};

export default useScrollAnimation;
