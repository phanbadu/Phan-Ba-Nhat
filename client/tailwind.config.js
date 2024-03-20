/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#FF3F80',
        'regal-blue': '#3E50B4',
        primary: 'rgba(var(--color-primary))',
        secondary: 'rgba(var(--color-secondary), 0.7)',
        hint: 'rgba(var(--color-hint), 0.3)',
      }
    },
  },
  plugins: [],
}