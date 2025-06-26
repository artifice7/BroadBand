// Performance monitoring utilities

// Debounce function for performance optimization
export const debounce = (func, wait, immediate) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if device prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get connection type for adaptive loading
export const getConnectionType = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return connection ? connection.effectiveType : 'unknown';
};

// Check if user is on slow connection
export const isSlowConnection = () => {
  const connectionType = getConnectionType();
  return ['slow-2g', '2g'].includes(connectionType);
};

// Performance observer for measuring metrics
export const observePerformance = () => {
  if ('PerformanceObserver' in window) {
    // Observe Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Observe First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Observe Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      let clsValue = 0;
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
};

// Cache API responses
export const cacheResponse = (key, data, expiry = 3600000) => { // 1 hour default
  const item = {
    data,
    timestamp: Date.now(),
    expiry
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getCachedResponse = (key) => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  
  const parsed = JSON.parse(item);
  const now = Date.now();
  
  if (now - parsed.timestamp > parsed.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  
  return parsed.data;
};

// Preload resources
export const preloadResource = (href, as, type = null) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Lazy load scripts
export const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}; 