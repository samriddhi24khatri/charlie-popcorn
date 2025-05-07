import React from 'react';
import logo from '../assets/charlie-logo.png';

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Flavors', href: '#flavors' },
  { name: 'How to Order', href: '#order' },
  { name: 'FAQs', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      className="--color-accent color-base-content py-8 px-4 sm:px-8 lg:px-12"
      style={{
        borderTop: '1px solid var(--color-accent)',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Brand */}
        <a
          href="#home"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-200"
          style={{
            textDecoration: 'none',
            color: 'var(--color-accent-content)',
          }}
        >
          <img
            src={logo}
            alt="Charlie Popcorn Logo"
            style={{
              height: '2rem',
              width: '2rem',
              objectFit: 'contain',
            }}
          />
          <span
            style={{
              fontFamily: 'Lobster, cursive',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'var(--color-accent)',
            }}
          >
            Charlie Popcorn
          </span>
        </a>

        {/* Nav Links */}
        <nav>
          <ul
            className="flex flex-wrap items-center justify-center gap-6 text-base"
            style={{
              fontFamily: 'League Spartan, sans-serif',
            }}
          >
            {footerNav.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:opacity-90 transition-opacity duration-200"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--color-base-content)',
                    borderBottom: '2px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p
          style={{
            fontFamily: 'League Spartan, sans-serif',
            fontSize: '0.875rem',
            color: 'var(--color-base-content)',
            opacity: 0.7,
          }}
        >
          © {new Date().getFullYear()} Charlie Popcorn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}