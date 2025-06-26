import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Suspense, lazy, useEffect, Component } from "react";
import { preloadImages } from "./utils/lazyImage.jsx";
import { useAOS } from "./hooks/useAOS";

// Lazy load pages for better code splitting
const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./Pages/About"));
const Inquiry = lazy(() => import("./Pages/Inquiry"));
const PlansPage = lazy(() => import("./Pages/PlansPage"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#EAEDF4]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-lg text-gray-600">Loading...</p>
    </div>
  </div>
);

// Error boundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-[#EAEDF4]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h2>
            <p className="text-gray-600 mb-4">Please refresh the page or try again later.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  // Initialize AOS globally
  useAOS({ duration: 2000 });

  useEffect(() => {
    // Preload critical images for better performance
    const criticalImages = [
      '/V-1.png',
      '/V-2.png',
      '/logo.png',
      '/About.jpg'
    ];
    
    preloadImages(criticalImages);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
      </Router>
      <Analytics />
    </ErrorBoundary>
  );
}

export default App;
