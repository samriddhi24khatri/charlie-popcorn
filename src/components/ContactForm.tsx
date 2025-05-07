// src/components/Contact.jsx
import React, { useState } from 'react';

export default function Contact() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send `phone` to your API or WhatsApp link handler
    console.log('User phone:', phone);
    setPhone('');
  };

  return (
    <section
      id="contact"
      className="bg-base-100 py-16 px-6 sm:px-8 lg:px-12"
    >
      <div className="container mx-auto max-w-md text-center space-y-8">
        <h2
          style={{
            fontFamily: 'Lobster, cursive',
            fontWeight: 'bold',
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            color: 'var(--color-accent)',
          }}
        >
          Stay in Touch
        </h2>
        <p
          style={{
            fontFamily: 'League Spartan, sans-serif',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            color: 'var(--color-base-content)',
            opacity: 0.8,
          }}
        >
          Have questions or need us to call you back? Drop your mobile number below, and we'll reach out soon!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="input input-lg w-full"
            style={{
              backgroundColor: 'var(--color-base-200)',
              color: 'var(--color-base-content)',
              borderRadius: '0.5rem',
              padding: '0.75rem',
              border: '2px solid var(--color-base-200)',
              transition: 'all 0.3s ease',
            }}
          />

          <button
            type="submit"
            className="btn btn-lg w-full"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-primary-content)',
              borderRadius: '0.5rem',
              padding: '0.75rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
