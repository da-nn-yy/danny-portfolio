/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        primary: 'Poppins',
        secondary: 'Poppins',
        tertiary: 'Matemize',
      },
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      extend: {
        backgroundImage:{
          danBg: "url('./assets/danBg.mp4')",
        },
      },
    },
    plugins: [],
  }
