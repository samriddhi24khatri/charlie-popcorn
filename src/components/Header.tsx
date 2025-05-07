import React, { useState, useEffect, useCallback } from 'react';
import logo from '../assets/charlie-logo.png';


const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Flavors', href: '#flavors' },
  { name: 'How to Order', href: '#order' },
  { name: 'FAQs', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

// Reusable nav‐link list
const NavLinks = ({ onClick, linkClass }) =>
  navigation.map((item) => (
    <a
      key={item.name}
      href={item.href}
      onClick={onClick}
      className={`${linkClass} hover: color-primary-content transition-colors duration-200 ${
        window.location.hash === item.href ? 'color-primary font-bold' : ''
      }`}
    >
      {item.name}
    </a>
  ));

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header data-theme="charlie" className="header-gradient relative overflow-visible">
      {/* Navbar */}
      <nav
        className={`
          fixed inset-x-0 top-0 z-50 
          transition-all duration-300 ease-in-out 
          ${scrolled 
            ? 'bg-base-100 shadow-md py-2'
            : 'bg-base-100/90 backdrop-blur-md py-4'
          }
        `}
      >
        <div className="container flex items-center justify-between px-4 sm:px-8 lg:px-12">
          {/* Logo only */}
          <a href="#home" aria-label="Home">
            <img
              src={logo}
              alt="Charlie Popcorn Logo"
              width={scrolled ? 24 : 32}
              height={scrolled ? 24 : 32}
              className="object-contain transition-all duration-300 ease-in-out"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8 font-league-spartan text-lg">
            <NavLinks linkClass="cursor-pointer" onClick={undefined} />
            <a
              href="#order"
              className="btn btn-primary btn-sm font-bold flex items-center gap-1 ml-4"
            >
              Order Now <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden btn btn-ghost p-2"
            aria-label="Open main menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile nav panel */}
        <div
          id="mobile-menu"
          className={`
            lg:hidden fixed inset-0 z-50 bg-base-100/95 backdrop-blur-md flex flex-col
            transform transition-transform duration-300 ease-in-out
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex items-center justify-between h-16 px-4 sm:px-8 lg:px-12">
            <a href="#home" aria-label="Home" onClick={() => setMobileMenuOpen(false)}>
              <img
                src={logo}
                alt="Charlie Popcorn Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-ghost p-2"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 mt-8 font-league-spartan text-xl">
            <NavLinks
              onClick={() => setMobileMenuOpen(false)}
              linkClass="cursor-pointer"
            />
            <a
              href="https://wa.me/918827006464?text=I%20want%20to%20place%20an%20order%20for%20Charlie%20Popcorn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg font-bold flex items-center gap-1 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Now <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 px-6 sm:px-8 lg:px-12 bg-base-100">
        <div className="mx-auto max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-12 text-center lg:text-left">
          {/* Text Content */}
          <div className="flex-1">
            <h1
              className="font-lobster text-primary font-bold text-[clamp(2.5rem,5vw,4rem)] sm:text-[clamp(4rem,6vw,6rem)] mb-4"
              style={{ fontFamily: "'Lobster', cursive" }}
            >
              Charlie Popcorn
            </h1>
            <p style={{ fontFamily: 'League Spartan, sans-serif' }} className="text-base-content text-lg sm:text-xl mb-8">
              Fresh, fun, and full of flavor! Discover the magic of gourmet popcorn, hand‑crafted for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#order" className="btn btn-primary btn-lg px-8 font-bold" aria-label="Order now">
                Order Now <span aria-hidden="true">→</span>
              </a>
              <a href="#flavors" className="btn btn-outline btn-primary btn-lg px-8 font-bold" aria-label="See flavors">
                See Flavors
              </a>
            </div>
          </div>
          {/* Mockup Image */}
          <div className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <img src="/src/assets/packets-hero.png" alt="Charlie Popcorn Bags Mockup" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto drop-shadow-2xl rounded-xl" />
          </div>
        </div>
      </section>
    </header>
  );
}

