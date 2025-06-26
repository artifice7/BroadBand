import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Centralized AOS hook to avoid duplicate initialization
export const useAOS = (config = { duration: 2000 }) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      AOS.init({
        duration: config.duration || 2000,
        once: true, // Animation only once for better performance
        offset: 50,
        delay: 0,
        easing: 'ease-out-cubic'
      });
      initialized.current = true;
    }

    // Refresh AOS when component mounts
    AOS.refresh();

    return () => {
      // Clean up on unmount
      AOS.refreshHard();
    };
  }, [config.duration]);

  return {
    refresh: () => AOS.refresh(),
    refreshHard: () => AOS.refreshHard()
  };
}; 