import { useEffect, useRef, useState } from 'react';

// Custom hook for lazy loading images
export const useLazyImage = (src, placeholder = '/placeholder.svg') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            img.src = src;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return { imgRef, imageSrc, isLoaded };
};

// Lazy Image Component
export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/placeholder.svg',
  ...props 
}) => {
  const { imgRef, imageSrc, isLoaded } = useLazyImage(src, placeholder);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`lazy-image ${isLoaded ? 'loaded' : ''} ${className}`}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

// Function to preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Preload multiple images
export const preloadImages = async (imageSources) => {
  const promises = imageSources.map(preloadImage);
  return Promise.allSettled(promises);
}; 