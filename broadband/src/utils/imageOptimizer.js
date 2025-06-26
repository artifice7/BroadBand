// Image optimization utilities

// Check WebP support
export const supportsWebP = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Check AVIF support
export const supportsAVIF = () => {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => {
      resolve(avif.height === 2);
    };
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
};

// Get optimal image format based on browser support
export const getOptimalImageFormat = async (originalSrc) => {
  const hasWebP = await supportsWebP();
  const hasAVIF = await supportsAVIF();
  
  // Check if we have optimized versions
  const basePath = originalSrc.replace(/\.[^/.]+$/, '');
  
  if (hasAVIF) {
    try {
      const avifSrc = `${basePath}.avif`;
      const response = await fetch(avifSrc, { method: 'HEAD' });
      if (response.ok) return avifSrc;
    } catch (e) {
      // AVIF version doesn't exist, continue
    }
  }
  
  if (hasWebP) {
    try {
      const webpSrc = `${basePath}.webp`;
      const response = await fetch(webpSrc, { method: 'HEAD' });
      if (response.ok) return webpSrc;
    } catch (e) {
      // WebP version doesn't exist, continue
    }
  }
  
  return originalSrc;
};

// Create responsive image srcset
export const createSrcSet = (basePath, sizes = [400, 800, 1200, 1600]) => {
  return sizes.map(size => `${basePath}?w=${size} ${size}w`).join(', ');
};

// Get optimal image size based on container and device
export const getOptimalImageSize = (containerWidth, devicePixelRatio = 1) => {
  const targetWidth = containerWidth * devicePixelRatio;
  const sizes = [400, 800, 1200, 1600, 2000];
  
  return sizes.find(size => size >= targetWidth) || sizes[sizes.length - 1];
};

// Compress image quality based on connection
export const getOptimalQuality = (connectionType) => {
  const qualityMap = {
    'slow-2g': 30,
    '2g': 40,
    '3g': 60,
    '4g': 80,
    'unknown': 70
  };
  
  return qualityMap[connectionType] || 70;
};

// Smart image loading with intersection observer
export class SmartImageLoader {
  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );
    this.loadingImages = new Set();
  }

  observe(imageElement) {
    this.observer.observe(imageElement);
  }

  unobserve(imageElement) {
    this.observer.unobserve(imageElement);
    this.loadingImages.delete(imageElement);
  }

  async handleIntersection(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting && !this.loadingImages.has(entry.target)) {
        this.loadingImages.add(entry.target);
        await this.loadImage(entry.target);
        this.unobserve(entry.target);
      }
    }
  }

  async loadImage(imageElement) {
    const originalSrc = imageElement.dataset.src;
    if (!originalSrc) return;

    try {
      const optimalSrc = await getOptimalImageFormat(originalSrc);
      
      const img = new Image();
      img.onload = () => {
        imageElement.src = optimalSrc;
        imageElement.classList.add('loaded');
      };
      img.onerror = () => {
        // Fallback to original if optimized version fails
        imageElement.src = originalSrc;
        imageElement.classList.add('loaded');
      };
      img.src = optimalSrc;
    } catch (error) {
      // Fallback to original image
      imageElement.src = originalSrc;
      imageElement.classList.add('loaded');
    }
  }
}

// Global image loader instance
export const imageLoader = new SmartImageLoader(); 