import React from 'react';

export default function FAQ() {
  return (
    <section id="faq" className="bg-base-100 py-16 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: 'Lobster, cursive',
              fontWeight: 'bold',
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              color: 'var(--color-accent)',
            }}
          >
            Frequently Asked Questions
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
            Answers to common queries about our popcorn and services.
          </p>
        </div>

        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="collapse collapse-arrow bg-base-200 rounded-xl border-2 border-base-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
            <input type="checkbox" name="faq-1" />
            <div
              className="collapse-title text-lg font-medium color-base-content"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                padding: '1rem 1.5rem',
              }}
            >
              Where do you source your popcorn kernels?
            </div>
            <div className="collapse-content color-base-content/80">
              <p
                style={{
                  fontFamily: 'League Spartan, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  padding: '1rem 1.5rem',
                }}
              >
                We procure premium-quality corn kernels from trusted suppliers in India, ensuring each batch meets our stringent quality standards for freshness and taste.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="collapse collapse-arrow bg-base-200 rounded-xl border-2 border-base-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
            <input type="checkbox" name="faq-2" />
            <div
              className="collapse-title text-lg font-medium color-base-content"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                padding: '1rem 1.5rem',
              }}
            >
              How is your popcorn prepared?
            </div>
            <div className="collapse-content color-base-content/80">
              <p
                style={{
                  fontFamily: 'League Spartan, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  padding: '1rem 1.5rem',
                }}
              >
                Our popcorn is handcrafted in small batches using hygienic processes and natural ingredients, ensuring a delightful snacking experience every time.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="collapse collapse-arrow bg-base-200 rounded-xl border-2 border-base-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
            <input type="checkbox" name="faq-3" />
            <div
              className="collapse-title text-lg font-medium color-base-content"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                padding: '1rem 1.5rem',
              }}
            >
              How can I place an order?
            </div>
            <div className="collapse-content color-base-content/80">
              <p
                style={{
                  fontFamily: 'League Spartan, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  padding: '1rem 1.5rem',
                }}
              >
                Simply select your favorite flavors on our website and click the "Order via WhatsApp" button. This will open a pre-filled message in WhatsApp, making the ordering process quick and convenient.
              </p>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="collapse collapse-arrow bg-base-200 rounded-xl border-2 border-base-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
            <input type="checkbox" name="faq-4" />
            <div
              className="collapse-title text-lg font-medium color-base-content"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                padding: '1rem 1.5rem',
              }}
            >
              What are the delivery timelines?
            </div>
            <div className="collapse-content color-base-content/80">
              <p
                style={{
                  fontFamily: 'League Spartan, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  padding: '1rem 1.5rem',
                }}
              >
                We typically dispatch orders within 24-48 hours. Delivery times vary based on location: 2-3 working days for nearby regions and up to 5-7 working days for more distant areas.
              </p>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="collapse collapse-arrow bg-base-200 rounded-xl border-2 border-base-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
            <input type="checkbox" name="faq-5" />
            <div
              className="collapse-title text-lg font-medium color-base-content"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                padding: '1rem 1.5rem',
              }}
            >
              What if I receive a damaged or incorrect order?
            </div>
            <div className="collapse-content color-base-content/80">
              <p
                style={{
                  fontFamily: 'League Spartan, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                  padding: '1rem 1.5rem',
                }}
              >
                Customer satisfaction is our priority. If you encounter any issues with your order, please contact us within 7 days of delivery, and we'll promptly address your concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}