// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-12 px-6 sm:px-8 lg:px-16 bg-base-100"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-200 to-base-100 opacity-40 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: brand story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <span style={{ fontFamily: 'League Spartan, sans-serif' }} className="inline-block text-sm uppercase tracking-wider text-accent font-bold">
              Our Story
            </span>
            <h2 style={{ fontFamily: 'Lobster, cursive' }} className="text-3xl sm:text-4xl font-bold font-league-spartan text-base-content leading-tight">
              Handcrafted Excellence
            </h2>
            <p style={{ fontFamily: 'League Spartan, sans-serif' }} className="text-lg text-base-content/90 font-league-spartan leading-relaxed">
              At Charlie’s, we believe that every bite should be an experience.  
              Our journey began with a passion for creating popcorn that’s not just delicious, but memorable.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-bold color-primary-content">10+</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold color-base-content font-league-spartan">
                    Years of Experience
                  </h3>
                  <p className="text-base color-base-content/80 font-league-spartan">
                    Perfecting our craft
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xl font-bold color-secondary-content">4+</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'League Spartan, sans-serif' }} className="text-lg font-semibold color-base-content">
                    Flavors to Discover
                  </h3>
                  <p style={{ fontFamily: 'League Spartan, sans-serif' }} className="text-base color-base-content/80">
                    Endless taste adventures
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column: brand values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-base-200 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold color-base-content mb-4 font-league-spartan">
                What Makes Us Different
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    iconBg: 'bg-accent',
                    iconColor: 'color-accent-content',
                    text: 'Handcrafted in small batches for perfect texture',
                  },
                  {
                    iconBg: 'bg-secondary',
                    iconColor: 'color-secondary-content',
                    text: 'Only the finest, natural ingredients',
                  },
                  {
                    iconBg: 'bg-primary',
                    iconColor: 'color-primary-content',
                    text: 'Sustainable and eco‑friendly practices',
                  },
                ].map(({ iconBg, iconColor, text }, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${iconBg} flex items-center justify-center`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ${iconColor}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p style={{ fontFamily: 'League Spartan, sans-serif' }} className="color-base-content">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-base-200 rounded-xl p-6 shadow-lg">
              <h3 style={{ fontFamily: 'League Spartan, sans-serif' }} className="text-xl font-semibold color-base-content mb-4">
                Our Promise
              </h3>
              <p style={{ fontFamily: 'League Spartan, sans-serif' }} className="text-base color-base-content">
                We promise to deliver popcorn that’s not just a snack, but an experience.  
                Each flavor is crafted with care, using only the finest ingredients, and we’re committed to sustainability in everything we do.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
