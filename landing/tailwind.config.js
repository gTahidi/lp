const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Mono"', ...defaultTheme.fontFamily.sans], // Single entry for sans with correct font family name
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5', 
          light: '#E0E7FF', 
        },
        secondary: {
          DEFAULT: '#0F172A', 
          light: '#F8FAFC', 
        },
      },
    },
  },
  plugins: [],
}