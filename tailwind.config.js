/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1A1A2E',
        'accent-red': '#C4302B',
        'deep-blue': '#16213E',
        'gold': '#E2B714',
      },
    },
  },
  plugins: [],
}
