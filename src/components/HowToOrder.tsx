import React, { useState } from 'react';

const phoneNumber = '918827006464';

export default function HowToOrder() {
  const flavors = ['Salted', 'Tomato', 'Peri‑Peri', 'Schezwan'] as const;
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFlavor = (flavor: string) => {
    setSelected((prev) =>
      prev.includes(flavor)
        ? prev.filter((f) => f !== flavor)
        : [...prev, flavor]
    );
  };

  const handleOrder = () => {
    const message = `Hello! I'd like to order: ${selected.join(', ')}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="how-to-order"
      className="bg-base-100 py-16 px-6 sm:px-8 lg:px-12"
    >
      <div className="container mx-auto text-center mb-12">
        <h2
          style={{
            fontFamily: 'Lobster, cursive',
            fontWeight: 'bold',
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            color: 'var(--color-accent)',
          }}
        >
          How to Order
        </h2>
        <p
          style={{
            fontFamily: 'League Spartan, sans-serif',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            color: 'var(--color-base-content)',
            opacity: 0.8,
          }}
          className="mt-2"
        >
          Select your flavors below and send your order via WhatsApp.
        </p>
      </div>

      <div className="container mx-auto max-w-md space-y-6">
        <div className="space-y-4">
          {flavors.map((flavor: string) => (
            <label
              key={flavor}
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                color: 'var(--color-base-content)',
              }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={selected.includes(flavor)}
                onChange={() => toggleFlavor(flavor)}
              />
              <span
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  color: 'var(--color-base-content)',
                }}
              >
                {flavor}
              </span>
            </label>
          ))}
        </div>

        <button
          style={{
            fontFamily: 'League Spartan, sans-serif',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 'bold',
          }}
          className={`btn btn-primary w-full transition-all duration-300 ${
            selected.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleOrder}
          disabled={selected.length === 0}
        >
          Order via WhatsApp
        </button>
      </div>
    </section>
  );
}