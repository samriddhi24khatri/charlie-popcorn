// src/components/Flavors.jsx
import React from 'react';
import flavor1 from '../assets/salted.png';
import flavor2 from '../assets/tomato.png';
import flavor3 from '../assets/peri-peri.png';
import flavor4 from '../assets/schezwan.png';

const flavors = [
  { name: 'Salted',      image: flavor1 },
  { name: 'Tomato',      image: flavor2 },
  { name: 'Peri‑Peri',   image: flavor3 },
  { name: 'Schezwan',    image: flavor4 },
];

export default function Flavors() {
  return (
    <section
      id="flavors"
      className="color-base-100 py-16 px-6 sm:px-8 lg:px-12"
    >
      {/* Section Heading */}
      <div className="container mx-auto text-center mb-12">
        <h2
          style={{ fontFamily: 'Lobster, cursive', fontWeight: 'bold', fontSize: '1.875rem', lineHeight: '2.25rem', color: 'var(--color-accent)' }}
        >
          Our Flavors
        </h2>
        <p style={{ fontFamily: 'League Spartan, sans-serif' }} className="mt-2 color-base-content/80 text-lg font-league-spartan">
          Discover the variety of delicious flavors we hand‑craft just for you.
        </p>
      </div>

      {/* Flavor Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {flavors.map(({ name, image }) => (
          <div
            key={name}
            className="
              group
              color-base-200 rounded-lg overflow-hidden
              border border-transparent
              shadow-md hover:shadow-lg hover:border-primary
              transition-shadow duration-300
            "
          >
            {/* Image with hover‑zoom and overlay */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={image}
                alt={name}
                loading="lazy"
                className="
                  w-full h-full object-cover object-center
                  group-hover:scale-105 transition-transform duration-500
                "
              />
              <div
                className="
                  absolute inset-0 bg-primary/60 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  flex items-center justify-center
                "
              >
                <span style={{ fontFamily: 'League Spartan, sans-serif' }} className="color-base-content text-lg font-semibold">
                  {name}
                </span>
              </div>
            </div>

            {/* Flavor name below */}
            <div className="p-4">
              <h3 style={{ fontFamily: 'League Spartan, sans-serif' }} className="font-league-spartan font-semibold text-xl color-base-content">
                {name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

