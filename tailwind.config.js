// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif'],
        'lobster': ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [
    require("daisyui"),            // ← Core DaisyUI plugin
  ],
  // Remove the `daisyui` block entirely if you only use CSS theming
}
