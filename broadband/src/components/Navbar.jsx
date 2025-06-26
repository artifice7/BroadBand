import { useEffect, useRef, useState, memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuJustOpened, setMenuJustOpened] = useState(false);
  const { pathname } = useLocation();
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const openMobileMenu = useCallback(() => {
    console.log('Opening mobile menu'); // Debug log
    setIsMobileMenuOpen(true);
    setMenuJustOpened(true);
    
    // Reset the "just opened" flag after a short delay
    setTimeout(() => {
      setMenuJustOpened(false);
    }, 300);
  }, []);

  const closeMobileMenu = useCallback(() => {
    console.log('Closing mobile menu'); // Debug log
    setIsMobileMenuOpen(false);
    setMenuJustOpened(false);
  }, []);

  const handleHamburgerClick = useCallback((event) => {
    console.log('Hamburger clicked!'); // Debug log
    event.stopPropagation();
    event.preventDefault();
    
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }, [isMobileMenuOpen, openMobileMenu, closeMobileMenu]);

  // Handle clicks outside menu - simplified logic
  useEffect(() => {
    if (!isMobileMenuOpen || menuJustOpened) {
      return; // Don't add listeners if menu is closed or just opened
    }

    const handleOutsideClick = (event) => {
      // Ignore if menu was just opened
      if (menuJustOpened) return;
      
      // Ignore clicks on hamburger button
      if (hamburgerRef.current?.contains(event.target)) return;
      
      // Ignore clicks inside the menu
      if (mobileMenuRef.current?.contains(event.target)) return;
      
      // Close menu for any other clicks
      closeMobileMenu();
    };

    // Use capture phase and add delay
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleOutsideClick, true);
      document.addEventListener('touchend', handleOutsideClick, true);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleOutsideClick, true);
      document.removeEventListener('touchend', handleOutsideClick, true);
    };
  }, [isMobileMenuOpen, menuJustOpened, closeMobileMenu]);

  // Close mobile menu when route changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  }, [pathname, closeMobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen && !menuJustOpened) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }
    
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen, menuJustOpened, closeMobileMenu]);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/plans", label: "OUR PLANS" },
    { path: "/inquiry", label: "CONTACT US" }
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="border-gray-200 bg-[#EAEDF4] fixed top-0 left-0 w-full z-50 bg-opacity-95 backdrop-blur-md shadow-sm">
        <div className="flex max-w-[1712px] mx-auto items-center justify-between p-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse z-60"
            aria-label="SUDAMA TELECOM Home"
          >
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl leading-tight">
              <span className="block">SUDAMA TELECOM</span>
              <span className="block text-sm md:text-base lg:text-lg">PRIVATE LIMITED</span>
            </h1>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navItems.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`font-semibold py-2 px-3 rounded-md transition-all duration-200 hover:bg-white/20 hover:text-blue-700 ${
                      pathname === path 
                        ? "text-blue-700 bg-white/30 font-bold" 
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Menu Button - FIXED */}
          <button
            ref={hamburgerRef}
            className="lg:hidden relative w-12 h-12 flex flex-col justify-center items-center z-60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            onClick={handleHamburgerClick}
            onMouseDown={(e) => e.preventDefault()} // Prevent focus issues
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
            style={{ 
              WebkitTapHighlightColor: 'transparent',
              userSelect: 'none'
            }}
          >
            <div className="relative w-6 h-4 flex flex-col justify-between pointer-events-none">
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 transform origin-center ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-800 transition-all duration-300 transform origin-center ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Side Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <Link 
            to="/" 
            className="flex items-center" 
            onClick={closeMobileMenu}
            aria-label="SUDAMA TELECOM Home"
          >
            <h2 className="font-semibold text-lg leading-tight">
              <span className="block">SUDAMA TELECOM</span>
              <span className="block text-sm text-gray-600">PRIVATE LIMITED</span>
            </h2>
          </Link>
          
          <button
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            onClick={closeMobileMenu}
            aria-label="Close mobile navigation menu"
            type="button"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-8">
            <ul className="space-y-4">
              {navItems.map(({ path, label }, index) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`flex items-center justify-between py-4 px-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                      pathname === path
                        ? "text-blue-700 bg-blue-50 border-l-4 border-blue-700 shadow-sm"
                        : "text-gray-800 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <span>{label}</span>
                    <svg 
                      className="w-5 h-5 text-blue-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3 font-medium">Contact Us</p>
            <div className="flex flex-col space-y-2">
              <a 
                href="tel:+919328291290" 
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors py-1"
              >
                📞 +91 9328291290
              </a>
              <a 
                href="tel:+919624340302" 
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors py-1"
              >
                📞 +91 9624340302
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
