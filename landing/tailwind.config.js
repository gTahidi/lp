const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto, Mono"', ...defaultTheme.fontFamily.sans],
        sans: ['"Roboto, Mono"', ...defaultTheme.fontFamily.sans],
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
}