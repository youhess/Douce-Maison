/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#141414',
        accent: '#E40015',
        background: '#F4F4F4',
        white: '#FFFFFF',
        muted: {
          DEFAULT: '#F4F4F4',
          foreground: '#6B7280',
        },
        border: '#E5E7EB',
        input: '#E5E7EB',
        ring: '#141414',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#141414',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#141414',
        },
        destructive: {
          DEFAULT: '#E40015',
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

