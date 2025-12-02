import { useEffect, useRef } from 'react';
export const useScrollAnimation = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    }, { threshold: 0.1 });
    if (ref.current) {
      Object.assign(ref.current.style, { opacity: '0', transform: 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' });
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);
  return ref;
};

