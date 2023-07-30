/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // bool or 'media' (system setting) or 'class' (toggle manually)
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
        display: ["Anybody", "sans-serif"],
      },
      colors: {
        theme: {
          background: "#f2f6ff",
          backgroundDark: "#282828",
          surface: "#e7e8ec",
          surfaceDark: "#3c3c3e",
          // error: "",
          onBackground: "#2a2a2a",
          onBackgroundDark: "#f2f6ff",
          onSurface: "#2a2a2a",
          onSurfaceDark: "#f2f6ff",
          // onError: ""
        },
      },
    },
  },
  plugins: [
  ],
}
